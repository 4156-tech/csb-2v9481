/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Collectables extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Hitbox2", "./Collectables/costumes/Hitbox2.png", {
        x: 4,
        y: 4
      })
    ];

    this.sounds = [
      new Sound("pop", "./Collectables/sounds/pop.wav"),
      new Sound("Collect", "./Collectables/sounds/Collect.wav"),
      new Sound("Glug", "./Collectables/sounds/Glug.wav")
    ];

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

    this.vars.vx2 = 9.725158901838412;
    this.vars.vy2 = 153.25822291312087;
    this.vars.type6 = 0;
  }

  *whenGreenFlagClicked() {
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    this.goto(53, 38);
    /* TODO: Implement sensing_setdragmode */ null;
    this.effects.ghost = 100;
    this.size = 125;
    this.effects.color = 0;
    this.stage.vars.stars = 0;
    yield* this.spawn(5, 4);
    yield* this.spawn(5, 5);
  }

  *whenIReceiveEntityTick() {
    this.vars.vx2 = this.x - this.sprites["Player"].x;
    this.vars.vy2 = this.y - this.sprites["Player"].y;
    yield* this.rotateView(this.vars.vx2, this.vars.vy2);
  }

  *rotateView(x7, y3) {
    this.vars.vx2 =
      x7 * Math.cos(this.scratchToRad(this.stage.vars.cameraDir)) -
      y3 * Math.sin(this.scratchToRad(this.stage.vars.cameraDir));
    this.vars.vy2 =
      x7 * Math.sin(this.scratchToRad(this.stage.vars.cameraDir)) +
      y3 * Math.cos(this.scratchToRad(this.stage.vars.cameraDir));
    if (this.vars.vy2 > 0) {
      yield* this.drawAtXDist(
        this.vars.type6,
        this.vars.vx2 * (this.stage.vars.dv / this.vars.vy2),
        this.vars.vy2
      );
    }
  }

  *drawAtXDist(type7, x8, dist3) {
    while (
      !(this.stage.vars.drawDist[this.stage.vars.drawIdx - 1 - 1] > dist3)
    ) {
      this.stage.vars.drawIdx += -1;
    }
    while (!(this.stage.vars.drawDist[this.stage.vars.drawIdx - 1] < dist3)) {
      this.stage.vars.drawIdx += 1;
    }
    this.stage.vars.drawType.splice(this.stage.vars.drawIdx - 1, 0, type7);
    this.stage.vars.drawX.splice(this.stage.vars.drawIdx - 1, 0, x8);
    this.stage.vars.drawDist.splice(this.stage.vars.drawIdx - 1, 0, dist3);
  }

  *spawn(count2, type8) {
    this.visible = true;
    this.vars.type6 = type8;
    for (let i = 0; i < count2; i++) {
      this.goto(this.random(-240, 240), this.random(-180, 180));
      while (
        !!(
          this.touching(this.sprites["Level"].andClones()) ||
          this.touching(this.sprites["Player"].andClones()) ||
            this.touching(this.sprites["Collectables"].andClones()) ||
              this.touching(this.sprites["Entities"].andClones())
        )
      ) {
        this.goto(this.random(-240, 240), this.random(-180, 180));
      }
      this.createClone();
    }
    this.vars.type6 = 0;
    this.visible = false;
  }

  *whenIReceiveToggleMap() {
    this.effects.ghost = this.stage.vars.mapGhost;
  }

  *startAsClone() {
    this.stage.vars.stars += 0;
    this.stage.vars.milk = 0;
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        if (this.vars.type6 == 4) {
          yield* this.startSound("Collect");
          this.stage.vars.stars += 1;
          this.deleteThisClone();
        } else {
          if (this.vars.type6 == 5) {
            yield* this.startSound("Glug");
            this.stage.vars.milk += 1;
            yield* this.playSoundUntilDone("Glug");
            this.deleteThisClone();
          }
        }
      }
      yield;
    }
  }

  *tryMove(dx3, dy3) {
    this.x += dx3;
    this.y += dy3;
    if (
      this.touching(this.sprites["Level"].andClones()) ||
      this.touching(this.sprites["Entities"].andClones())
    ) {
      this.x += 0 - dx3;
      this.y += 0 - dy3;
    }
  }

  *move(steps3) {
    yield* this.tryMove(
      steps3 * Math.sin(this.scratchToRad(this.direction)),
      0
    );
    yield* this.tryMove(
      0,
      steps3 * Math.cos(this.scratchToRad(this.direction))
    );
  }
}
