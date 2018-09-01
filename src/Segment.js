/**
 * @author       Patrick Sletvold
 * @license      {@link https://github.com/photonstorm/phaser3-plugin-template/blob/master/LICENSE|MIT License}
 */

class Segment {
  constructor(startPoint, endPoint, level) {
    this.startPoint = {
      x: startPoint.x,
      y: startPoint.y
    };
    this.endPoint = {
      x: endPoint.x,
      y: endPoint.y
    };
    this.level = level;
  }

  clone() {
    return new Segment(
      { x: this.startPoint.x, y: this.startPoint.y },
      { x: this.endPoint.x, y: this.endPoint.y },
      this.level
    );
  }
}

export default Segment;