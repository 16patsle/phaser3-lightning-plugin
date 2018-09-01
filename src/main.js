/**
 * @author       Patrick Sletvold
 * @author       Richard Davey
 * @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
 */
import LightningGenerator from './LightningGenerator';

/**
 * The Lightning Plugin can make lightning
 */
class LightningPlugin extends Phaser.Plugins.ScenePlugin {
  /**
   * @param {Phaser.Scene} scene - A reference to the Phaser.Scene instance.
   * @param {Phaser.Plugins.PluginManager} pluginManager - A reference to the
   *  Phaser.Plugins.PluginManager instance.
   */
  constructor(scene, pluginManager) {
    super(scene, pluginManager);

    // Register our new Game Object type
    // pluginManager.registerGameObject('lightning', this.add);
  }

  /**
   * 
   * @param {number} generations - Number of times to run the division code
   * @param {String} maximumOffset - Maximum amount of pixels to offset the segments
   * @param {String} lengthScale - The factor to scale the lenght of the branches
   * @returns {LightningGenerator}
   */
  add(generations = 10, maximumOffset = 50, lengthScale = 0.8) {
    return new LightningGenerator(generations, maximumOffset, lengthScale);
  }

  /**
   * Called by the PluginManager when this plugin is started.
   * If a plugin is stopped, and then started again, this will get called again.
   * Typically called immediately after `BasePlugin.init`.
   *
   * @private
   * @returns {void}
   */
  start() {
    this.systems.events.on('postrender', this.postRender, this);
  }

  /**
   * If this is a Scene Plugin (i.e. installed into a Scene) then this method is called when the Scene boots.
   * By this point the plugin properties `scene` and `systems` will have already been set.
   * In here you can listen for Scene events and set-up whatever you need for this plugin to run.
   * @private
   * @returns {void}
   */
  boot() {
    const eventEmitter = this.systems.events;

    //  Listening to the following events is entirely optional,
    //  although we would recommend cleanly shutting down and destroying at least.
    //  If you don't need any of these events then remove the listeners and the relevant methods too.

    eventEmitter.on('preupdate', this.preUpdate, this);
    eventEmitter.on('update', this.update, this);
    eventEmitter.on('postupdate', this.postUpdate, this);

    eventEmitter.on('pause', this.pause, this);
    eventEmitter.on('resume', this.resume, this);

    eventEmitter.on('sleep', this.sleep, this);
    eventEmitter.on('wake', this.wake, this);

    eventEmitter.on('shutdown', this.shutdown, this);
    eventEmitter.on('destroy', this.destroy, this);
  }

  /**
   * Called every Scene step - phase 1
   * 
   * @private
   * @param {number} time - Current game time
   * @param {number} delta - Time since last call
   * @returns {void}
   */
  preUpdate(time, delta) {
    // Empty
  }

  /**
   * Internal update method, called by the PluginManager.
   * Called every Scene step - phase 2
   *
   * @private
   * @param {number} time - Current game time
   * @param {number} delta - Time since last call
   * @returns {void}
   */
  update(time, delta) {
    // Empty
  }

  /**
   * Called every Scene step - phase 3
   * 
   * @private
   * @param {number} time - Current game time
   * @param {number} delta - Time since last call
   * @returns {void}
   */
  postUpdate(time, delta) {
    // Empty
  }

  /**
   * Internal update method, called by the PluginManager.
   *
   * @private
   * @returns {void}
   */
  postRender() {
    // Empty
  }

  /**
   * Called when a Scene is paused. A paused scene doesn't have its Step run, but still renders.
   *
   * @private
   * @returns {void}
   */
  pause() {
    // Empty
  }

  /**
   * Called when a Scene is resumed from a paused state.
   *
   * @private
   * @returns {void}
   */
  resume() {
    // Empty
  }

  /**
   * Called when a Scene is put to sleep.
   * A sleeping scene doesn't update or render, but isn't destroyed or shutdown. preUpdate events still fire.
   *
   * @private
   * @returns {void}
   */
  sleep() {
    // Empty
  }

  /**
   * Called when a Scene is woken from a sleeping state.
   *
   * @private
   * @returns {void}
   */
  wake() {
    // Empty
  }

  /**
   * Called when a Scene shuts down,
   * it may then come back again later (which will invoke the 'start' event) but should be considered dormant.
   *
   * @private
   * @returns {void}
   */
  shutdown() {
    // Empty
  }

  /**
   * Destroys this Plugin.
   * You must release everything in here, all references, all objects, free it all up.
   * @private
   * @returns {void}
   */
  destroy() {
    this.pluginManager = null;
    this.game = null;
    this.scene = null;
    this.systems = null;
  }
}

/**
 * Shortcut to the LightningGenerator class
 * @type {LightningGenerator}
 */
LightningPlugin.LightningGenerator = LightningGenerator;

export default LightningPlugin;