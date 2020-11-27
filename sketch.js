var player;

var wall1 ,wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;

var wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20;

var wall21 ,wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30;

var wall31 ,wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40;

var wall41 ,wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49, wall50;

var wall51 ,wall52, wall53, wall54, wall55, wall56, wall57, wall58, wall59, wall60;

var wall61 ,wall62, wall63, wall64, wall65, wall66, wall67, wall68, wall69, wall70;

var wall71 ,wall72, wall73, wall74, wall75, wall76, wall77, wall78, wall79, wall80;

var wall81 ,wall82, wall83, wall84, wall85, wall86, wall87, wall88, wall89, wall90;

var wall91 ,wal92, wall93, wall94, wall95, wall96, wall97, wall98, wall99, wall100;

var virus1, virus1IMG, 


function preload() {

  virus1IMG = loadImage("greenVirus.jpg");

}

function setup() {

  createCanvas(600,600);

  console.log(600/22);

  console.log(600/22);

  virus1 = createSprite(27,27,10,10);
  virus1.addImage(virus1IMG);

  player = createSprite(10,158,10,10);

  wall1 = createSprite(10,77,10,135);

  wall2 = createSprite(10,374,10,405);

  wall3 = createSprite(37,91,10,108);

  wall4 = createSprite(64,104,10,81);

  wall5 = createSprite(64,37,54,10);
  
  wall6 = createSprite(91,64,10,54);

  wall7 = createSprite(171,91,162,10);

  wall8 = createSprite(158,37,81,10);

  wall9 = createSprite(118,50,10,27);

  wall10 = createSprite(145,64,54,10);

  wall11 = createSprite(172,118,216,10);

  wall12 = createSprite(212,64,27,10);

  wall13 = createSprite(226,50,10,27);

  wall14 = createSprite(253,64,10,54);

  wall15 = createSprite(280,77,10,27);

  wall16 = createSprite(293,37,81,10);

  wall17 = createSprite(293,64,27,10);

  wall18 = createSprite(293,91,27,10);

  wall19 = createSprite(306,118,10,54);

  wall20 = createSprite(333,91,10,108);

  wall21 = createSprite(360,145,54,10);

  wall22 = createSprite(360,78,10,81);

  wall23 = createSprite(387,91,10,108);

  wall24 = createSprite(387,91,10,108);

  wall25 = createSprite(468,37,162,10);

  wall26 = createSprite(468,64,108,10);

  wall27 = createSprite(468,91,54,10);

  wall28 = createSprite(455,118,27,10);

  wall29 = createSprite(442,105,10,27);

  wall30 = createSprite(415,105,10,81);

  wall31 = createSprite(469,132,10,27);

  wall32 = createSprite(442,145,54,10);

  wall33 = createSprite(550,293,10,513);

  wall34 = createSprite(523,212,10,297);

  wall35 = createSprite(496,212,10,243);

  wall36 = createSprite(496,212,10,243);

  wall37 = createSprite(104,145,27,10);

  wall38 = createSprite(50,172,81,10);

  wall39 = createSprite(91,185,10,27);

  wall40 = createSprite(63,198,54,10);

  wall41 = createSprite(118,185,10,81);

  wall42 = createSprite(76,225,81,10);

  wall43 = createSprite(37,292,10,135);

  wall44 = createSprite(145,198,10,108);

  wall45 = createSprite(172,211,10,135);

  wall46 = createSprite(199,224,10,162);

  wall47 = createSprite(226,237,10,135);

  wall48 = createSprite(253,250,10,162);

  wall49 = createSprite(253,145,108,10);

  wall50 = createSprite(361,172,216,10);

  wall51 = createSprite(469,266,10,189);

  wall52 = createSprite(104,252,81,10);

  wall53 = createSprite(117,279,108,10);

  wall54 = createSprite(144,306,108,10);

  wall55 = createSprite(158,333,189,10);

  wall56 = createSprite(64,306,10,54);

  wall57 = createSprite(158,360,243,10);

  wall58 = createSprite(280,277,10,162);

  wall59 = createSprite(361,199,162,10);

  wall60 = createSprite(442,306,10,216);

  wall61 = createSprite(171,387,270,10);

  wall62 = createSprite(307,304,10,162);

  wall63 = createSprite(361,226,108,10);

  wall64 = createSprite(415,319,10,189);

  wall65 = createSprite(496,361,54,10);

  wall66 = createSprite(496,388,54,10);

  wall67 = createSprite(483,415,81,10);

  wall68 = createSprite(388,346,10,135);

  wall69 = createSprite(361,333,10,162);

  wall70 = createSprite(375,415,27,10);

  wall71 = createSprite(375,253,27,10);

  wall72 = createSprite(334,333,10,162);

  wall73 = createSprite(184,414,297,10);

  wall74 = createSprite(280,427,10,27);

  wall75 = createSprite(388,440,216,10);

  wall76 = createSprite(523,440,10,54);

  wall77 = createSprite(185,440,135,10);

  wall78 = createSprite(253,454,10,27);

  wall79 = createSprite(77,440,27,10);

  wall80 = createSprite(91,480,10,81);

  wall81 = createSprite(64,480,10,81);

  wall82 = createSprite(37,480,10,135);

  wall83 = createSprite(118,480,10,81);

  wall84 = createSprite(145,480,10,27);

  wall85 = createSprite(212,493,135,10);

  wall86 = createSprite(387,493,162,10);

  wall87 = createSprite(508,493,27,10);

  wall88 = createSprite(334,466,378,10);

  wall89 = createSprite(521,506,10,27);

  wall90 = createSprite(467,506,10,27);

  wall91 = createSprite(306,506,10,27);

  wall92 = createSprite(280,520,324,10);

  wall93 = createSprite(495,520,54,10);

  wall94 = createSprite(441,533,10,27);

  wall95 = createSprite(495,546,108,10);

  wall96 = createSprite(212,546,351,10);

  wall97 = createSprite(294,10,569,10);

  wall98 = createSprite(294,579,569,10);

  wall99 = createSprite(579,145,10,270);

  wall100 = createSprite(579,442,10,270);
}

function draw() {
  background("green");

  virus1.addImage(virus1IMG);

  if(keyDown === UP_ARROW){
    player.velocityY = -2;
  }

  if(keyDown === DOWN_ARROW){
    player.velocityY = 2;
  }

  if(keyDown === LEFT_ARROW){
    player.velocityX = -2;
  }

  if(keyDown === RIGHT_ARROW){
    player.velocityX = 2;
  }

  drawSprites();
}