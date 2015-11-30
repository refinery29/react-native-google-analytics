'use strict';

var _ = require('lodash');

class Analytics {
  constructor(trackingId, clientId, version) {
    this.version = version || 1;
    this.trackingId = trackingId;
    this.clientId = clientId;
    this.customDimensions = [];
  }

  setCustomDimension(cd) {
    this.customDimensions.push(cd);
  }

  send(hit) {

    hit.set({
      v: this.version,
      tid: this.trackingId,
      cid: this.clientId
    });

    if (this.customDimensions.length) {
      _.each(this.customDimensions, function(cd) {
        _.mapKeys(cd, function(val, key) {
          var obj = {};
          obj[key] = val;
          hit.set(obj);
        });
      });
    }

      fetch('https://ssl.google-analytics.com/collect?'+ hit.toQueryString(),
    {
      method: 'get',
    });
  }
}

module.exports = Analytics;
