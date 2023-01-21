import { PortfolioStackShape } from './portfolio.shape';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { baseDomain } from './domain';

export const getRoute53HostedZone = (scope: PortfolioStackShape) => {
  const phZone = route53.HostedZone.fromLookup(scope, 'AZHostedZone', {
    domainName: baseDomain,
  });

  return {
    phZone,
  };
};
