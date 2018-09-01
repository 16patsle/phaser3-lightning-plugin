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
   * If this is a Scene Plugin (i.e. installed into a Scene) then this method is called when the Scene boots.
   * By this point the plugin properties `scene` and `systems` will have already been set.
   * In here you can listen for Scene events and set-up whatever you need for this plugin to run.
   * @private
   * @returns {void}
   */
  boot() {
    this.systems.events.on('destroy', this.destroy, this);
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