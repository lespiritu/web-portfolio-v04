import { PortfolioStackShape } from './portfolio.shape';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as alias from 'aws-cdk-lib/aws-route53-targets';
import * as certificateManager from 'aws-cdk-lib/aws-certificatemanager';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

export const provisionS3DistributionWebsite = (
  scope: PortfolioStackShape,
  domainName: string,
  bucketName: string,
  certificate: certificateManager.ICertificate,
  route53HostedZone: route53.IHostedZone
) => {
  // Provision S3 Bucket
  const bucket = new s3.Bucket(scope, `${domainName}WebsiteBucket`, {
    bucketName,
    accessControl: s3.BucketAccessControl.PUBLIC_READ,
    websiteErrorDocument: 'index.html',
    websiteIndexDocument: 'index.html',
    removalPolicy: cdk.RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
  });

  cdk.Tags.of(bucket).add('WebsiteBucket', domainName);

  bucket.addToResourcePolicy(
    new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.AnyPrincipal()],
      actions: ['s3:GetObject'],
      resources: [`${bucket.bucketArn}/*`],
    })
  );

  // Provision Cloudfront distribution
  const cfdistribution = new cloudfront.Distribution(scope, `${domainName}WebsiteDistribution`, {
    defaultBehavior: {
      origin: new origins.S3Origin(bucket),
      viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    },
    defaultRootObject: 'index.html',
    errorResponses: [
      {
        httpStatus: 403,
        responseHttpStatus: 200,
        responsePagePath: '/index.html',
      },
      {
        httpStatus: 404,
        responseHttpStatus: 200,
        responsePagePath: '/index.html',
      },
    ],
    domainNames: [domainName],
    certificate,
  });

  //
  const target = route53.RecordTarget.fromAlias(new alias.CloudFrontTarget(cfdistribution));

  new route53.ARecord(scope, `${domainName}WebsiteRecord`, {
    zone: route53HostedZone,
    target,
    recordName: domainName,
    ttl: cdk.Duration.seconds(300),
  });

  new cdk.CfnOutput(scope, `${domainName}WebsiteUrl`, {
    value: `https://${domainName}`,
  });

  new cdk.CfnOutput(scope, `${domainName}WebsiteDistributionId`, {
    value: cfdistribution.distributionId,
  });

  new s3deploy.BucketDeployment(scope, `${domainName}WebsiteBucketDeploymentV3`, {
    sources: [s3deploy.Source.asset(`dist/apps/frontend`)],
    destinationBucket: bucket,
    distribution: cfdistribution,
    distributionPaths: ['/*'],
    memoryLimit: 512,
    prune: false,
  });
};
