# Phaser3 Lightning Plugin

A Phaser 3 plugin to generate line segments resembling lightning.

This is a work in progress and is currently in beta.

## Building

Run `npm install` and then `npm run build` to build the plugin locally.

Use `npm run examples` to run the exampes locally, then visit `localhost:2344` in your browser.

## Using Plugins in Phaser 3

You can load plugins externally, or include them in your bundle.

To load an external plugin:

```js
function preload ()
{
    this.load.scenePlugin('LightningPlugin', 'path/to/LightningPlugin.js', 'lightningPlugin', 'lightning');
}
```

Then to install it into a Scene:

```js
    this.sys.install('LightningPlugin');
```

If you load the plugins in a Preloader scene then you can add them to any other Scenes by specifying them in the plugins array:

```js
var config = {
    scene: {
        create: create,
        plugins: [ 'LightningPlugin' ],
        map: {
            'lightning': 'lightning'
        }
    }
};
```

See inline JSDocs, and the included examples for usage.

The plugin is written in ES2015/ES6, but the built version targets ES5.

## Credits
This plugin is an implementation of [this algorithm](http://drilian.com/2009/02/25/lightning-bolts/), and is based on the Phaser 3 Plugin template by Richard Davey
