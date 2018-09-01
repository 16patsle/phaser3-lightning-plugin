export default function averagePoint(point1, point2) {
  return {
    x: Phaser.Math.Average([point1.x, point2.x]),
    y: Phaser.Math.Average([point1.y, point2.y])
  };
}