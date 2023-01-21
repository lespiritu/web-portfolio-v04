import * as cdk from 'aws-cdk-lib';

export interface PortfolioStackShape extends cdk.Stack {
  featureList?: string;
}
