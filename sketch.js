var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1= createSprite (0,580,360,30)
block1.shapeColor ="red"
block2= createSprite (295,580,200,30)
block2.shapeColor = "green"
block3 = createSprite(515,580,200,30)
block3.shapeColor = "pink"
block4= createSprite(740,580,220,30)
block4.shapeColor = "yellow"

    //create box sprite and give velocity
box = createSprite(random(20,750),100,40,40)
box.shapeColor= "black"
box.velocityX= 4
box.velocityY= 9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites()
box.bounceOff(edges)
if (block1.isTouching(box) && box.bounceOff (block1)){
    box.shapeColor = "purple"
} 
if (block2.isTouching(box) && box.bounceOff (block2)){
    box.shapeColor = "grey"
    box.velocityX = 0
    box.velocityY = 0
}
if (block3.isTouching(box) && box.bounceOff (block3)){
    box.shapeColor = "purple"
}
if (block4.isTouching(box) && box.bounceOff (block4)){
    box.shapeColor = "brown"
}
    //add condition to check if box touching surface and make it box
    drawSprites()
}
