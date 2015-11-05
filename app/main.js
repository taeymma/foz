/**
 * Main module. Start de App module op.
 * @module main
 * @see module:App
 */

define([
  './App',
  'dojo/dom',
  'dojo/domReady!'
], function (
  App,
  dom
) {
  'use strict';

  /**
   * Maakt een nieuwe App module aan en start deze.
   * @see module:App
   */
  return new App({
    config: appConfig, //global var for app config, set in beheer.jinja2
    container: dom.byId('appLayout'),
    loadingContainer: dom.byId('loadingOverlay')
  }).startup();
});
