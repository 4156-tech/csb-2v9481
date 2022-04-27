/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Entities extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hitbox", "./Entities/costumes/Hitbox.png", { x: 4, y: 4 })
    ];

    this.sounds = [new Sound("pop", "./Entities/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Entity Tick" },
        this.whenIReceiveEntityTick
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Toggle Map" },
        this.whenIReceiveToggleMap
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.vx = -11.955169204661598;
    this.vars.vy = 44.414466212620866;
    this.vars.type2 = 0;
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(53, 38);
    /* TODO: Implement sensing_setdragmode */ null;
    this.effects.ghost = 100;
    this.size = 250;
    this.effects.color = -10;
    yield* this.spawnOf(0, 1);
    this.effects.color = 20;
    this.size = 400;
    yield* this.spawnOf(0, 2);
    this.size = 300;
    this.effects.color = -30;
    yield* this.spawnOf(1, 3);
  }

  *whenIReceiveEntityTick() {
    this.vars.vx = this.x - this.sprites["Player"].x;
    this.vars.vy = this.y - this.sprites["Player"].y;
    yield* this.rotateView(this.vars.vx, this.vars.vy);
  }

  *rotateView(x3, y) {
    this.vars.vx =
      x3 * Math.cos(this.scratchToRad(this.stage.vars.cameraDir)) -
      y * Math.sin(this.scratchToRad(this.stage.vars.cameraDir));
    this.vars.vy =
      x3 * Math.sin(this.scratchToRad(this.stage.vars.cameraDir)) +
      y * Math.cos(this.scratchToRad(this.stage.vars.cameraDir));
    if (this.vars.vy > 0) {
      yield* this.drawAtXDist(
        this.vars.type2,
        this.vars.vx * (this.stage.vars.dv / this.vars.vy),
        this.vars.vy
      );
    }
  }

  *drawAtXDist(type3, x4, dist2) {
    while (
      !(this.stage.vars.drawDist[this.stage.vars.drawIdx - 1 - 1] > dist2)
    ) {
      this.stage.vars.drawIdx += -1;
    }
    while (!(this.stage.vars.drawDist[this.stage.vars.drawIdx - 1] < dist2)) {
      this.stage.vars.drawIdx += 1;
    }
    this.stage.vars.drawType.splice(this.stage.vars.drawIdx - 1, 0, type3);
    this.stage.vars.drawX.splice(this.stage.vars.drawIdx - 1, 0, x4);
    this.stage.vars.drawDist.splice(this.stage.vars.drawIdx - 1, 0, dist2);
  }

  *spawnOf(count, type4) {
    this.visible = true;
    this.vars.type2 = type4;
    for (let i = 0; i < count; i++) {
      this.goto(this.random(-240, 240), this.random(-180, 180));
      while (
        !!(
          this.touching(this.sprites["Level"].andClones()) ||
          this.touching(this.sprites["Player"].andClones()) ||
            this.touching(this.sprites["Entities"].andClones())
        )
      ) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
      }
      this.createClone();
    }
    this.vars.type2 = 0;
    this.visible = false;
  }

  *whenIReceiveToggleMap() {
    this.effects.ghost = this.stage.vars.mapGhost;
  }

  *startAsClone() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Player"].y - this.y,
          this.sprites["Player"].x - this.x
        )
      );
      yield* this.move(0.2 * this.stage.vars.delta);
      yield;
    }
  }

  *tryMove(dx2, dy2) {
    this.x += dx2;
    this.y += dy2;
    if (
      this.touching(this.sprites["Level"].andClones()) ||
      this.touching(this.sprites["Entities"].andClones())
    ) {
      this.x += 0 - dx2;
      this.y += 0 - dy2;
    }
  }

  *move(steps2) {
    yield* this.tryMove(
      steps2 * Math.sin(this.scratchToRad(this.direction)),
      0
    );
    yield* this.tryMove(
      0,
      steps2 * Math.cos(this.scratchToRad(this.direction))
    );
  }
}
