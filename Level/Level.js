/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Level/costumes/costume1.svg", {
        x: 265.44408500000003,
        y: 191.021065
      })
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Toggle Map" },
        this.whenIReceiveToggleMap
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.effects.ghost = 100;
  }

  *whenIReceiveToggleMap() {
    this.effects.ghost = this.stage.vars.mapGhost;
  }
}
