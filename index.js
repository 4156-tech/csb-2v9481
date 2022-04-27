import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Level from "./Level/Level.js";
import LevelPromimity from "./LevelPromimity/LevelPromimity.js";
import Raycaster from "./Raycaster/Raycaster.js";
import LevelColor from "./LevelColor/LevelColor.js";
import Entities from "./Entities/Entities.js";
import Pen from "./Pen/Pen.js";
import Collectables from "./Collectables/Collectables.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Player: new Player({
    x: 82.19454858615161,
    y: -140.06986167140784,
    direction: -43.38000000000335,
    costumeNumber: 1,
    size: 150,
    visible: true
  }),
  Level: new Level({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  LevelPromimity: new LevelPromimity({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Raycaster: new Raycaster({
    x: 108.2226295454741,
    y: -52.871587596888645,
    direction: 16.62000000044246,
    costumeNumber: 1,
    size: 1.3888888888888888,
    visible: true
  }),
  LevelColor: new LevelColor({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Entities: new Entities({
    x: 43,
    y: -116,
    direction: 90,
    costumeNumber: 1,
    size: 300,
    visible: false
  }),
  Pen: new Pen({
    x: 208,
    y: -68.92444156436191,
    direction: 90,
    costumeNumber: 4,
    size: 17.654257053862555,
    visible: false
  }),
  Collectables: new Collectables({
    x: -16,
    y: -22,
    direction: 90,
    costumeNumber: 1,
    size: 125,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
