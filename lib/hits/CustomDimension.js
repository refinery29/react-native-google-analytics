var Hit = require('../Hit');

//'ThisAM', '1', 'com.refinery29.thisAM', clientId, 'Card Home'
//appName, appVersion, appId, appInstallerId, screenName, experiment

class CustomDimension extends Hit {
  constructor(dimensionNumber, customData, experiment) {
    super('customdimension', {
      dn: dimensionNumber,
      cd: customData
    }, experiment);
  }
}

module.exports = CustomDimension;
