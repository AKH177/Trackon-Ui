
import devConfigs from './config.dev.json';
import prodConfigs from './config.prod.json';
import testConfigs from './config.uat.json';

// Set config based on environment  
const env = process.env.NODE_ENV || 'development';
let config = {};
switch (env) {
  case 'production':
    config = prodConfigs;
    break;
  case 'UAT':
    config = testConfigs;
    break;
  case 'development':
    config = devConfigs;
    break;
  default:
    config = devConfigs;
    break;
}

export default config;