/**
 * Main application widget.
 * Deze widget staat in voor het instantieren van de globale layout
 * van de applicatie.
 * Het doel van deze widget is om zo generiek mogelijk te zijn.
 * @module App
 * @see module:App
 */
define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dojo/dom-construct',
  'dojo/_base/fx',
  'dojo/dom',
  'dojox/fx/style'
], function (
  declare,
  WidgetBase,
  domConstruct,
  fx,
  dom,
  xfx
) {
  return declare([WidgetBase], {

    loadingContainer: null,
    container: null,
    config: null,

    /**
     * Standaard widget functie.
     * Maak alle controllers aan.
     * @public
     */
    postCreate: function () {
      this.inherited(arguments);
      console.debug('App::postCreate');

      domConstruct.empty(this.container);
      domConstruct.empty(this.loadingContainer);

      // TODO fonzo animation verder uitwerken me dojo/fx combine
      var animatedText = domConstruct.create('div', { innerHTML: 'Fluctuation of Zen', 'class': 'introText' }, this.loadingContainer);

      //fx.fadeIn({
      //  node: animatedText,
      //  duration: 2000
      //}).play();

      //xfx.addClass(animatedText, 'rotated', { duration: 2000 }).play();


      // TODO handle startup + loading icon
      // uicontroller??
    },

    /**
     * Standaard widget functie.
     * Bouw de interface op.
     * @public
     */
    startup: function () {
      this.inherited(arguments);
      console.debug('App::startup');

    }
  });
});
