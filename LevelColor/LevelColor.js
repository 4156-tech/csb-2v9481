/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class LevelColor extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./LevelColor/costumes/costume1.svg", {
        x: 266.504385,
        y: 191.021025
      })
    ];

    this.sounds = [new Sound("pop", "./LevelColor/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.effects.ghost = 100;
  }
}
