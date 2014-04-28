/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {

  /**
   * Array of application names.
   */
  app_name : ['akbuildingsolutions-js'],
  /**
   * Your New Relic license key.
   */
  license_key : 'c2c7bfd4b65ab50fc7293db6d260f8cdabb45476',
  logging : {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level : 'trace'
  }
};
