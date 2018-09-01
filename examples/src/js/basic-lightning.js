var config = {
  type: Phaser.WEBGL,
  parent: 'phaser-example',
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {

  this.load.scenePlugin('LightningPlugin', './LightningPlugin.js', null, 'lightning');

}

function create() {

  //  Create the lightning generator
  this.lightningGenerator = this.lightning.add(10);

  this.lightningGraphics = this.add.graphics({ x: 0, y: 0 })

  createLightning = createLightning.bind(this);

  createLightning();

  this.input.on('pointerdown', createLightning)
}

function createLightning() {
  this.lightningGraphics.clear();

  this.lightning = this.lightningGenerator.generate({ x: 0, y: 0 }, { x: 700, y: 700 })

  this.lightning.forEach(s => {
    if (s.level === 1) {
      this.lightningGraphics.lineStyle(1, 0xFFFFFF, 1)
    } else {
      this.lightningGraphics.lineStyle(1, 0xFFFFFF, 1 - s.level / 4)
    }
    this.lightningGraphics.beginPath();
    this.lightningGraphics.moveTo(s.startPoint.x, s.startPoint.y);
    this.lightningGraphics.lineTo(s.endPoint.x, s.endPoint.y);
    this.lightningGraphics.closePath();
    this.lightningGraphics.strokePath();
  })
}
