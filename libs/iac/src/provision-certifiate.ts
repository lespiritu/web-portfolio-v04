import * as certificateManager from 'aws-cdk-lib/aws-certificatemanager';
import { PortfolioStackShape } from './portfolio.shape';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { baseDomain } from './domain';

export const provisionCertificate = (
  scope: PortfolioStackShape,
  route53HostedZone: route53.IHostedZone
) => {
  const certificate = new certificateManager.DnsValidatedCertificate(scope, 'WebsiteCertificate', {
    domainName: `*.${baseDomain}`,
    hostedZone: route53HostedZone,
    region: 'us-east-1',
  });

  return certificate;
};
