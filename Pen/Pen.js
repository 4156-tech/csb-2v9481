/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Nano", "./Pen/costumes/Nano.svg", { x: 100, y: 100 }),
      new Costume("Frank", "./Pen/costumes/Frank.svg", { x: 100, y: 100 }),
      new Costume("Giga-d", "./Pen/costumes/Giga-d.svg", {
        x: 112.97489180262579,
        y: 52.995331761010675
      }),
      new Costume("Star", "./Pen/costumes/Star.svg", { x: 100, y: 100 }),
      new Costume("Milk-b", "./Pen/costumes/Milk-b.svg", {
        x: 50.89116824589277,
        y: 89.48802207287568
      })
    ];

    this.sounds = [new Sound("pop", "./Pen/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Paint" }, this.whenIReceivePaint)
    ];

    this.vars.distance2 = 19.958974315200013;
    this.vars.height = 69.42444156436191;
    this.vars.x5 = 208;
    this.vars.row = 486;
    this.vars.type5 = 53;
  }

  *whenIReceivePaint() {
    this.visible = false;
    yield* this.draw();
  }

  *draw() {
    this.clearPen();
    this.penSize = this.stage.vars.res;
    this.penColor.h = 53;
    this.vars.row = 1;
    for (let i = 0; i < this.stage.vars.drawDist.length; i++) {
      yield* this.drawRow();
      this.vars.row += 1;
    }
  }

  *drawRow() {
    this.vars.type5 = this.stage.vars.drawType[this.vars.row - 1];
    this.vars.x5 = this.stage.vars.drawX[this.vars.row - 1];
    this.vars.distance2 = this.stage.vars.drawDist[this.vars.row - 1];
    this.vars.height = 10 * (this.stage.vars.dv / this.vars.distance2);
    if (this.vars.type5 < 10) {
      yield* this.stampEntity(this.vars.x5, 0);
      return;
    }
    this.penColor.h = this.vars.type5;
    this.penColor.v = 120 - this.vars.distance2 / 2.5;
    this.goto(this.vars.x5, 1.5 * this.vars.height - this.stage.vars.res / 2);
    this.penDown = true;
    this.y = this.stage.vars.res / 2 - this.vars.height;
    this.penDown = false;
  }

  *stampEntity(x6, y2) {
    if (this.vars.type5 > 0) {
      this.size = this.vars.height;
      this.costume = this.vars.type5;
      this.goto(x6, y2);
      if (Math.abs(x6 - this.x) < 1) {
        this.effects.brightness = 40 - this.vars.distance2 / 2.5;
        this.stamp();
      }
    }
  }
}
