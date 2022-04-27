/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Raycaster extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hitbox", "./Raycaster/costumes/Hitbox.png", { x: 4, y: 4 }),
      new Costume("BIG", "./Raycaster/costumes/BIG.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("Meow", "./Raycaster/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Raycast" },
        this.whenIReceiveRaycast
      )
    ];

    this.vars.x = 241;
    this.vars.distance = 45.50000000000003;
    this.vars.scanLines = 480;
  }

  *whenGreenFlagClicked() {
    this.costume = "BIG";
    this.size = 1;
    this.costume = "Hitbox";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.effects.ghost = 0;
  }

  *singleRay() {
    this.goto(this.sprites["Player"].x, this.sprites["Player"].y);
    yield* this.fastProximityRay();
    while (!!this.touching(this.sprites["Level"].andClones())) {
      this.move(-1);
    }
    this.vars.distance = Math.hypot(
      this.sprites["Player"].x - this.x,
      this.sprites["Player"].y - this.y
    );
    this.vars.distance =
      this.vars.distance *
      Math.cos(this.scratchToRad(this.direction - this.stage.vars.cameraDir));
    if (this.touching(this.sprites["LevelColor"].andClones())) {
      yield* this.drawAtXDist(58, this.vars.x, this.vars.distance);
    } else {
      yield* this.drawAtXDist(53, this.vars.x, this.vars.distance);
    }
  }

  *whenIReceiveRaycast() {
    yield* this.raycast();
  }

  *raycast() {
    this.vars.x = this.stage.vars.res / 2 - 240;
    if (this.stage.vars.res < 4) {
      this.vars.x = Math.round(this.vars.x);
    }
    this.vars.scanLines = 480 / this.stage.vars.res;
    for (let i = 0; i < this.vars.scanLines; i++) {
      this.direction =
        this.stage.vars.cameraDir +
        this.radToScratch(Math.atan(this.vars.x / this.stage.vars.dv));
      yield* this.singleRay();
      this.vars.x += this.stage.vars.res;
    }
  }

  *drawAtXDist(type, x2, dist) {
    while (
      !(this.stage.vars.drawDist[this.stage.vars.drawIdx - 1 - 1] > dist)
    ) {
      this.stage.vars.drawIdx += -1;
    }
    while (!(this.stage.vars.drawDist[this.stage.vars.drawIdx - 1] < dist)) {
      this.stage.vars.drawIdx += 1;
    }
    this.stage.vars.drawType.splice(this.stage.vars.drawIdx - 1, 0, type);
    this.stage.vars.drawX.splice(this.stage.vars.drawIdx - 1, 0, x2);
    this.stage.vars.drawDist.splice(this.stage.vars.drawIdx - 1, 0, dist);
  }

  *fastProximityRay() {
    while (true) {
      if (!this.touching(this.sprites["LevelPromimity"].andClones())) {
        this.move(10);
        while (!this.touching(this.sprites["LevelPromimity"].andClones())) {
          this.move(10);
        }
        this.move(-6);
      }
      for (let i = 0; i < 8; i++) {
        this.move(1);
        if (this.touching(this.sprites["Level"].andClones())) {
          return;
        }
      }
    }
  }
}
