 var player;

 var music;
 
 var scaryGruop, scary1, scary2, scary3, scary4, scary5, scary6, scary7, scary8, scary9, scary10, scary11, scary12, scary13;

function preload() {

    scary1img = loadImage("images/scary1.png");

    scary2img = loadImage("images/scary2.png");
   
    scary4img = loadImage("images/scary4.png");
   
    scary6img = loadImage("images/scary6.png");
   
    scary7img = loadImage("images/scary7.png");
   
    scary8img =loadImage("images/scary8.png");
   
    scary9img = loadImage("images/scary9.png");
   
    scary10img = loadImage("images/scary10.png");
   
    scary11img = loadImage("images/scary11.png");
   
    scary5img = loadImage("images/scary5.png");
   
    scary12img = loadImage("images/scary12.png");
   
    scary13img = loadImage("images/scary13.png");
   
    scary3img = loadImage("images/scary3.png");

    music = loadSound("sound/creepymusic.mp3");

}

function setup() {
    createCanvas(1165,500);

    music.play();

    player = createSprite(600,400);
    player.shapeColor = "yellow";
    player.scale = 0.5;

    // scary1 = createSprite();
    // scary1.addImage("scary1", scary1img);
    // scary1.lifetime = 150;
    // scary1.scale = 0.21;

    // scary2 = createSprite();
    // scary2.addImage("scary2", scary2img);
    // scary2.lifetime = 150;
    // scary2.scale = 0.21;

    // scary3 = createSprite();
    // scary3.addImage("scary3", scary3img);
    // scary3.lifetime = 150;
    // scary3.scale = 0.21;

    // scary4 = createSprite();
    // scary4.addImage("scary4", scary4img);
    // scary4.lifetime = 150;
    // scary4.scale = 0.21;

    // scary5 = createSprite();
    // scary5.addImage("scary5", scary5img);
    // scary5.lifetime = 150;
    // scary5.scale = 0.21;

    // scary6 = createSprite();
    // scary6.addImage("scary6", scary6img);
    // scary6.lifetime = 150;
    // scary6.scale = 0.21;

    // scary7 = createSprite();
    // scary7.addImage("scary7", scary7img);
    // scary7.lifetime = 150;
    // scary7.scale = 0.21;

    // scary8 = createSprite();
    // scary8.addImage("scary8", scary8img);
    // scary8.lifetime = 150;
    // scary8.scale = 0.21;

    // scary9 = createSprite();
    // scary9.addImage("scary9", scary9img);
    // scary9.lifetime = 150;
    // scary9.scale = 0.21;

    // scary10 = createSprite();
    // scary10.addImage("scary10", scary10img);
    // scary10.lifetime = 150;
    // scary10.scale = 0.21;

    // scary11 = createSprite();
    // scary11.addImage("scary11", scary11img);
    // scary11.lifetime = 150;
    // scary11.scale = 0.21;

    // scary12 = createSprite();
    // scary12.addImage("scary12", scary12img);
    // scary12.lifetime = 150;
    // scary12.scale = 0.21;

    // scary13 = createSprite();
    // scary13.addImage("scary13", scary13img);
    // scary13.lifetime = 150;
    // scary13.scale = 0.21;

    scaryGroup = new Group();


}


function draw() {
    background("black");

    if (frameCount % 60 === 0) {
      var scary = createSprite(500, 250, 10, 40);

      //generate random scary
       var rand = Math.round(random(1, 13));
       switch (rand) {
       
        case 1:
           scary1 = createSprite(350,150,10,10);
           scary1.addImage("scary1", scary1img);
           scary1.scale = 0.21;
           scary1.lifetime = 60
           break;
        case 2:
          scary2 = createSprite(700,150,10,10);
          scary2.addImage("scary2", scary2img);
          scary2.scale = 0.21;
          scary2.lifetime = 60
          break;
        case 3:
         scary3 = createSprite(500,150,10,10);
         scary3.addImage("scary3", scary3img);
         scary3.scale = 0.25;
         scary3.lifetime = 60
          break;
        case 4: 
         scary4 = createSprite(100,150,10,10); 
         scary4.addImage("scary4", scary4img);
         scary4.scale = 0.21;
         scary4.lifetime = 60
          break;
        case 5:
         scary5 = createSprite(900,150,10,10);
         scary5.addImage("scary5", scary5img);
         scary5.scale = 0.21;
         scary5.lifetime = 60
          break;
        case 6:
         scary6 = createSprite(500,300,10,10);
         scary6.addImage("scary6", scary6img);
         scary6.scale = 0.21;
         scary6.lifetime = 60
          break;
        case 7:
         scary7 = createSprite(900,300,10,10);
         scary7.addImage("scary7", scary7img);
         scary7.scale = 0.21;
         scary7.lifetime = 60
          break;
        case 8:
         scary8 = createSprite(700,300,10,10);
         scary8.addImage("scary8", scary8img);
         scary8.scale = 0.21;
         scary8.lifetime = 60
          break;
        case 9:
         scary9 = createSprite(100,300,10,10);
         scary9.addImage("scary9", scary9img);
         scary9.scale = 0.21;
         scary9.lifetime = 60
          break;
        case 10:
         scary10 = createSprite(350,300,10,10);
         scary10.addImage("scary10", scary10img);
         scary10.scale = 0.21;
         scary10.lifetime = 60
          break;
        case 11:
         scary11 = createSprite(200,300,10,10);
         scary11.addImage("scary11", scary11img);
         scary11.scale = 0.40;
         scary11.lifetime = 60
          break;
        case 12:
         scary12 = createSprite(500,250,10,10);
         scary12.addImage("scary12", scary12img);
         scary12.scale = 0.25;
         scary12.lifetime = 60
          break;
        case 13:
         scary13 = createSprite(1000,250,10,10);
         scary13.addImage("scary13", scary13img);
         scary13.scale = 0.11;
         scary13.lifetime = 60
          break;
        default:
          break;                 
      }

     //assign scale and lifetime to the scary
     scary.lifetime = 70;
     //add each scary to the group
     scaryGroup.add(scary);
 }

    drawSprites();
}

 //function spawnscary() {
    