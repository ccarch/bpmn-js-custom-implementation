'use strict';

var UserTaskDefinitionHelper = {},
    request = require('sync-request'),
    constants = require('./Constants');

module.exports = UserTaskDefinitionHelper;

/**
 * Call the service to retrieve the candidates for user tasks
 *
 * @method UserTaskDefinitionHelper#getAssignableCandidates
 *
 * @returns {Array} Array of candidates
 */
UserTaskDefinitionHelper.getAssignableCandidates = function(configSettings) {
  var candidates = [{id:1, Name:'DCS'}];
  try {
    var res = request('GET', configSettings.base_url + constants.CANDIDATES_URL);
    candidates = JSON.parse(res.getBody('utf8'));
  } catch (err) {
    console.log(err);
  }
  return candidates;
};

