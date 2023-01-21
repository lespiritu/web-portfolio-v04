import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from './portfolio.stack';
import { config } from 'dotenv';

config({ path: 'project.env' });

export const getBundleNameFromEnv = (processEnv: NodeJS.ProcessEnv) => {
  const bundleName = processEnv.PROJECT_ID;
  if (!bundleName) {
    throw new Error('Specify BUNDLE_NAME');
  }
  return bundleName;
};

const app = new cdk.App();
new PortfolioStack(app, `${getBundleNameFromEnv(process.env)}`, {
  env: {
    region: 'ap-southeast-1',
    account: '275832434559',
  },
  stackName: `${getBundleNameFromEnv(process.env)}-project`,
  description: 'The stacks for the portfolio website',
});
