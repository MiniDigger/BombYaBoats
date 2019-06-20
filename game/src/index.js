import Phaser from "phaser";
import logoImg from "./assets/logo.png";
import css from './style.css';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.DOM.FIT,
    parent: "phaser-example",
    width: 800,
    height: 600,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    min: {
      width: 400,
      height: 300,
    },
    max: {
      width: 1600,
      height: 1200,
    }
  },
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(400, 150, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}