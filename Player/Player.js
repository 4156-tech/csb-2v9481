/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Player", "./Player/costumes/Player.svg", {
        x: 4.7812896125771545,
        y: 3.7292458918209093
      }),
      new Costume("Hitbox", "./Player/costumes/Hitbox.png", { x: 4, y: 4 })
    ];

    this.sounds = [new Sound("Meow", "./Player/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Toggle Map" },
        this.whenIReceiveToggleMap
      )
    ];

    this.vars.tick30 = 3221.73;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.framesMissed = 0;
    this.stage.vars.fov = 60;
    this.stage.vars.res = 8;
    this.stage.vars.health = 100;
    this.stage.vars.delta = 1;
    this.vars.tick30 = 0;
    this.size = 150;
    this.goto(0, 0);
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
    this.direction = 45;
    this.costume = "Player";
    this.effects.ghost = 100;
    while (true) {
      yield* this.fps(this.vars.tick30);
      yield* this.playerTick();
      yield* this.initialiseRaycaster();
      this.broadcast("Raycast");
      this.broadcast("Entity Tick");
      this.broadcast("Paint");
      yield;
    }
  }

  *move(steps) {
    this.costume = "Hitbox";
    this.rotationStyle = Sprite.RotationStyle.DONT_ROTATE;
    yield* this.tryMove(steps * Math.sin(this.scratchToRad(this.direction)), 0);
    yield* this.tryMove(0, steps * Math.cos(this.scratchToRad(this.direction)));
    this.costume = "Player";
    this.rotationStyle = Sprite.RotationStyle.ALL_AROUND;
  }

  *tryMove(dx, dy) {
    this.x += dx;
    this.y += dy;
    if (this.touching(this.sprites["Level"].andClones())) {
      this.x += 0 - dx;
      this.y += 0 - dy;
    }
  }

  *playerTick() {
    if (this.keyPressed("left arrow")) {
      this.direction -= 3 * this.stage.vars.delta;
    }
    if (this.keyPressed("right arrow")) {
      this.direction += 3 * this.stage.vars.delta;
    }
    if (this.keyPressed("up arrow") || this.keyPressed("w")) {
      yield* this.move(2 * this.stage.vars.delta);
    }
    if (this.keyPressed("down arrow") || this.keyPressed("s")) {
      yield* this.move(-2 * this.stage.vars.delta);
    }
    if (this.keyPressed("a")) {
      this.direction -= 90;
      yield* this.move(2 * this.stage.vars.delta);
      this.direction += 90;
    }
    if (this.keyPressed("d")) {
      this.direction += 90;
      yield* this.move(2 * this.stage.vars.delta);
      this.direction -= 90;
    }
    if (this.touching(this.sprites["Entities"].andClones())) {
      yield* this.wait(1);
      this.stage.vars.health += -1;
    }
  }

  *initialiseRaycaster() {
    this.stage.vars.cameraDir = this.direction;
    this.stage.vars.dv =
      240 / Math.tan(this.scratchToRad(this.stage.vars.fov / 2));
    this.stage.vars.drawDist = [];
    this.stage.vars.drawType = [];
    this.stage.vars.drawX = [];
    this.stage.vars.drawDist.push(999999);
    this.stage.vars.drawType.push(0);
    this.stage.vars.drawX.push(0);
    this.stage.vars.drawIdx = 2;
  }

  *whenIReceiveToggleMap() {
    this.effects.ghost = this.stage.vars.mapGhost;
  }

  *fps(lastTick30) {
    this.vars.tick30 = this.timer * 30;
    this.stage.vars.delta = this.vars.tick30 - lastTick30;
    this.stage.vars.fps = Math.round(30 / this.stage.vars.delta);
    if (this.stage.vars.res > 2) {
      if (this.stage.vars.fps < 28) {
        this.stage.vars.framesMissed += 30 - this.stage.vars.fps;
      }
    } else {
      if (this.stage.vars.fps < 15) {
        this.stage.vars.framesMissed += 30 - this.stage.vars.fps;
      }
    }
  }
}
