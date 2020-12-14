var Ground;
polygon = bodies,circle(50,200,20);
World.add(world,polygon);

slingShot = new slingShot(this.polygon,{x:100,y:200});
function setup(){
    ground = new Ground(600,height,1200,20);
    block1 = new block(330,235,30,40);
    block2 = new block(360,235,30,40);
    block3 = new block(390,235,30,40);
    block4 = new block(420,235,30,40);
    block5 = new block(450,195,30,40);
    block6 = new block(480,195,30,40);
    block7 = new block(520,195,30,40);
    block8 = new block(550,195,30,40);
    block9 = new block(580,155,30,40);
    block10 = new block(610,155,30,40);
    block11 = new block(640,155,30,40);
    block12 = new block(670,155,30,40);
    block13 = new block(700,115,30,40);
    block14 = new block(730,115,30,40);
    block15 = new block(760,115,30,40);
    block16 = new block(790,115,30,40);

}
function draw() {
    ground.display();
}
