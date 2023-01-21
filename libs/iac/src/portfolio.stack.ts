import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { PortfolioStackShape } from './portfolio.shape';
import { provisionS3DistributionWebsite } from './s3-distribution-website';
import { provisionCertificate } from './provision-certifiate';
import { getRoute53HostedZone } from './route53';
import { baseBucketName, baseDomain } from './domain';

export class PortfolioStack extends Stack implements PortfolioStackShape {
  constructor(scope: Construct, projectId: string, props?: StackProps) {
    super(scope, projectId, props);

    // The code that defines your stack goes here
    const { phZone } = getRoute53HostedZone(this);
    //Provision certificate for SSL
    const certificate = provisionCertificate(this, phZone);

    // example resource
    provisionS3DistributionWebsite(
      this,
      `${projectId}.${baseDomain}`,
      `${projectId}-${baseBucketName}`,
      certificate,
      phZone
    );
  }
}
