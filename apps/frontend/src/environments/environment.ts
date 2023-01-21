// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.
import * as bundleEnv from './environment.bundle';

export const environment = {
  production: false,
  bundle: bundleEnv.bundleId,
};
