var water
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16
var box1, box2, box3, box4, box5, box6
var ledge1, ledge2, ledge3, ledge4
var elevator, elevator2
var elevatorSwitch, elevatorSwitch2
var badblock1, badblock2, badblock3, badblock4, badblock5, badblock6
var alien, alienLeftRunner, alienRightRunner, alienImage, alienWalkingLeftImage, alienWalkingRightImage, alienJumpingLeftImage, alienJumpingRightImage
var backgroundImage, backgr0und, backgroundImage2, backgr0und2
var rocket, rocketImage, rocketGroup
var bomb, bombImage, bombGroup
var asteroid, asteroidImage, asteroidGroup
var asteroid2, asteroidImage2, asteroidGroup2
var portal, portalImage
var gameState
var gravity
var lives
var lives2
var level
var spikes, spikesImage
var spikesGroup

function preload() {
    backgroundImage = loadImage("Background.jpg");
    backgroundImage2 = loadImage("background2.jpg");
    //alienWalkingImage = loadAnimation();
    alienImage = loadImage("alien.png");
    alienWalkingLeftImage = loadAnimation("alienWalkLeft1.png", "alienWalkLeft2.png");
    alienWalkingRightImage = loadAnimation("alienWalkRight1.png", "alienWalkRight2.png");
    alienJumpingLeftImage = loadImage("alienJumpLeft.png");
    alienJumpingRightImage = loadImage("alienJumpRight.png");
    rocketImage = loadImage("Rocket.png");
    bombImage = loadImage("bomb.png");
    asteroidImage = loadImage("Asteroid.png");
    asteroidImage2 = loadImage("Asteroid.png");
    spikesImage = loadImage("spike.png");
    portalImage = loadImage("Portal.png");
}

function setup() {
    createCanvas(1200, 700)
    backgr0und = createSprite(600, 350, 1200, 700);
    backgr0und.addImage(backgroundImage)
    backgr0und.scale = 2.5

    backgr0und2 = createSprite(600, 1150, 1200, 700);
    backgr0und2.addImage(backgroundImage2)
    backgr0und2.scale = 2.2

    rocketGroup = createGroup();

    bombGroup = createGroup();

    asteroidGroup = createGroup();
    asteroidGroup2 = createGroup();

    block1 = createSprite(600, 700, 1500,20);
    block1.shapeColor = rgb(250, 50, 50)
    block2 = createSprite(500, 466, 1000, 20);
    block2.shapeColor = rgb(250, 50, 50)
    block3 = createSprite(800, 233, 1000,20);
    block3.shapeColor = rgb(250, 50, 50)
    block4 = createSprite(600, 0, 1500,20);
    block4.shapeColor = rgb(250, 50, 50)
    block5 = createSprite(0, 350, 20,700);
    block5.shapeColor = rgb(250, 50, 50)
    block6 = createSprite(1200, 350, 20,700);
    block6.shapeColor = rgb(250, 50, 50)
    block7 = createSprite(250, 655, 50, 75);
    block7.shapeColor = rgb(250, 50, 50)
    block8 = createSprite(460, 655, 50, 75);
    block8.shapeColor = rgb(250, 50, 50)
    block9 = createSprite(670, 655, 50, 75);
    block9.shapeColor = rgb(250, 50, 50)
    block10 = createSprite(880, 655, 50, 75);
    block10.shapeColor = rgb(250, 50, 50)
    block11 = createSprite(1115, 645, 150, 90);
    block11.shapeColor = rgb(250, 50, 50)
    block12 = createSprite(800, 370, 20, 20);
    block12.shapeColor = rgb(250, 50, 50)
    block13 = createSprite(650, 370, 20, 20);
    block13.shapeColor = rgb(250, 50, 50)
    block14 = createSprite(500, 370, 20, 20);
    block14.shapeColor = rgb(250, 50, 50)
    block15 = createSprite(350, 370, 20, 20);
    block15.shapeColor = rgb(250, 50, 50)
    block16 = createSprite(200, 370, 20, 20);
    block16.shapeColor = rgb(250, 50, 50)

    box1 = createSprite(600, 1500, 1500,20);
    box1.shapeColor = rgb(50, 150, 150);
    box2 = createSprite(600, 800, 1500,20);
    box2.shapeColor = rgb(50, 150, 150);
    box3 = createSprite(0, 1150, 20,700);
    box3.shapeColor = rgb(50, 150, 150);
    box4 = createSprite(1200, 1150, 20,700);
    box4.shapeColor = rgb(50, 150, 150);
    box5 = createSprite(300, 1200, 20,600);
    box5.shapeColor = rgb(50, 150, 150);
    box6 = createSprite(600, 1100, 20,600);
    box6.shapeColor = rgb(50, 150, 150);
    box7 = createSprite(900, 1200, 20,600);
    box7.shapeColor = rgb(50, 150, 150);

    ledge1 = createSprite(275, 1371, 50,10);
    ledge1.shapeColor = rgb(50, 150, 150);
    ledge2 = createSprite(25, 1249, 50,10);
    ledge2.shapeColor = rgb(50, 150, 150);
    ledge3 = createSprite(275, 1127, 50,10);
    ledge3.shapeColor = rgb(50, 150, 150);
    ledge4 = createSprite(25, 1005, 50,10);
    ledge4.shapeColor = rgb(50, 150, 150);

    elevator = createSprite(450, 950, 300,20);
    elevator.shapeColor = rgb(50, 150, 150);
    elevator2 = createSprite(750, 1480, 300,20);
    elevator2.shapeColor = rgb(50, 150, 150);

    badblock1 = createSprite(450, 203, 20, 40);
    badblock1.shapeColor = rgb(30, 200, 0);
    badblock2 = createSprite(675, 203, 20, 40);
    badblock2.shapeColor = rgb(30, 200, 0);
    badblock3 = createSprite(900, 203, 20, 40);
    badblock3.shapeColor = rgb(30, 200, 0);
    badblock4 = createSprite(450, 30, 20, 40);
    badblock4.shapeColor = rgb(30, 200, 0);
    badblock5 = createSprite(675, 30, 20, 40);
    badblock5.shapeColor = rgb(30, 200, 0);
    badblock6 = createSprite(900, 30, 20, 40);
    badblock6.shapeColor = rgb(30, 200, 0);

    spikesGroup = createGroup();

    for(i=40;i<880;i=i+55) {
        spikes = createSprite(i, 431, 110, 70);
        spikes.addImage(spikesImage);
        spikes.scale = 0.2
        //spikes.debug = true;
        spikes.setCollider("rectangle", 0, 50, 250, 200);
        spikesGroup.add(spikes);
    }

    gameState = "play"
    gravity = 1
    lives = 5
    lives2 = 5
    level = 1
    elevatorSwitch = "off"
    elevatorSwitch2 = "off"

    water = createSprite(1050, 1195, 280, 590);
    water.shapeColor = rgb(0, 210, 255);

    alien = createSprite(100, 650, 30, 50);
    //alien.addImage(alienImage);
    alien.scale = 0.6

    alienLeftRunner = createSprite(100, 6500, 30, 50);
    alienLeftRunner.scale = 0.6

    alienRightRunner = createSprite(100, 6500, 30, 50);
    alienRightRunner.scale = 0.6

    portal = createSprite(1080, 150, 50, 150);
    portal.addImage(portalImage);
    portal.scale = 0.6
}

function draw() {
    background(0);
    stroke("white");
    strokeWeight(4);
    fill("black");
    textSize(50);
    text("You Finished Level " + level, 2760, 300);
    text("For Next Level, Press E", 2730, 400)
    stroke("white");
    strokeWeight(4);
    fill("black");
    textSize(50);
    text("Game Over", 1700, 300);
    text("Press R to retry level", 1600, 400);
    if (gameState === "play") {
        spawnRocket();
        spawnBomb();
        alien.addImage(alienImage);
        alienLeftRunner.addAnimation("cat", alienWalkingLeftImage);
        alienRightRunner.addAnimation("cat2", alienWalkingRightImage);
        alien.velocityY = alien.velocityY+1

        if (keyDown(LEFT_ARROW)) {
            alien.x = alien.x - 7
            alienLeftRunner.x = alien.x
            alienLeftRunner.y = alien.y
        }

        if (keyWentUp(LEFT_ARROW)) {
            alienLeftRunner.x = 100
            alienLeftRunner.y = 6500
        }

        if (keyDown(RIGHT_ARROW)) {
            alien.x = alien.x + 7
            alienRightRunner.x = alien.x
            alienRightRunner.y = alien.y
        }

        if (keyWentUp(RIGHT_ARROW)) {
            alienRightRunner.x = 100
            alienRightRunner.y = 6500
        }

        if (keyDown(UP_ARROW)) {
            alien.velocityY = -12 + gravity
            //alien.addImage(alienJumpingImage);
            gravity = gravity + 0.5
            if (alien.isTouching(block1) && alien.y < 700) {
                gravity = 1
            }
            if (alien.isTouching(block2) && alien.y < 466) {
                gravity = 1
            }
            if (alien.isTouching(block3) && alien.y < 233) {
                gravity = 1
            }
            if (alien.isTouching(block7) && alien.y < 650) {
                gravity = 1
            }
            if (alien.isTouching(block8) && alien.y < 650) {
                gravity = 1
            }
            if (alien.isTouching(block9) && alien.y < 650) {
                gravity = 1
            }
            if (alien.isTouching(block10) && alien.y < 650) {
                gravity = 1
            }
            if (alien.isTouching(block11) && alien.y < 650) {
                gravity = 1
            }
            if (alien.isTouching(block12) && alien.y < 350) {
                gravity = 1
            }
            if (alien.isTouching(block13) && alien.y < 350) {
                gravity = 1
            }
            if (alien.isTouching(block14) && alien.y < 350) {
                gravity = 1
            }
            if (alien.isTouching(block15) && alien.y < 350) {
                gravity = 1
            }
            if (alien.isTouching(block16) && alien.y < 350) {
                gravity = 1
            }
            if (alien.isTouching(box1) && alien.y < 1500) {
                gravity = 1
            }
            if (alien.isTouching(box5) && alien.y < 890) {
                gravity = 1
            }
            if (alien.isTouching(box7) && alien.y < 890) {
                gravity = 1
            }
            if (alien.isTouching(ledge1) && alien.y < 1356) {
                gravity = 1
            }
            if (alien.isTouching(ledge2) && alien.y < 1234) {
                gravity = 1
            }
            if (alien.isTouching(ledge3) && alien.y < 1112) {
                gravity = 1
            }
            if (alien.isTouching(ledge4) && alien.y < 990) {
                gravity = 1
            }
            if (alien.isTouching(elevator)) {
                gravity = 1
            }
            if (alien.isTouching(elevator2)) {
                gravity = 1
            }
            if (alien.isTouching(water)) {
                gravity = 0
            }
            if (alien.isTouching(block2) && alien.y > 466) {
                gravity = gravity + 10
            }
            if (alien.isTouching(block3) && alien.y > 233) {
                gravity = gravity + 10
            }
            if (alien.isTouching(block4)) {
                gravity = gravity + 10
            }
            if (keyDown(LEFT_ARROW)) {
                alien.addImage(alienJumpingLeftImage);
            }
            if (keyDown(RIGHT_ARROW)) {
                alien.addImage(alienJumpingRightImage);
            }
        }
        if (keyWentUp(UP_ARROW)) {
            alien.velocityY = 0
        }

        if (alien.isTouching(rocketGroup)) {
            lives = lives - 1
            alien.x = 100
            alien.y = 650
            rocketGroup.destroyEach();
        }

        if (alien.isTouching(spikesGroup)) {
            lives = lives - 1
            alien.x = 950
            alien.y = 450
            rocketGroup.destroyEach();
        }

        if (alien.isTouching(badblock1) || alien.isTouching(badblock2) || alien.isTouching(badblock3) || alien.isTouching(badblock4) || alien.isTouching(badblock5) || alien.isTouching(badblock6)) {
            lives = lives - 1
            alien.x = 370
            alien.y = 180
            rocketGroup.destroyEach();
        }

        if (lives === 0) {
            gameState = "end"
        }

        if (alien.isTouching(bombGroup)) {
            lives2 = lives2 - 1
            alien.x = 100
            alien.y = 1450
            bombGroup.destroyEach();
        }

        if (alien.isTouching(asteroidGroup)) {
            lives2 = lives2 - 1
            alien.x = 300
            alien.y = 850
            elevatorSwitch = "off"
            elevator.velocityY = 0
            elevator.shapeColor = rgb(50, 150, 150);
            box5.height = 600
            box5.y = 1200
            elevator.y = 950
            asteroidGroup.destroyEach();
        }

        if (alien.isTouching(asteroidGroup2)) {
            lives2 = lives2 - 1
            alien.x = 450
            alien.y = 1450
            elevatorSwitch2 = "off"
            elevator2.velocityY = 0
            elevator2.shapeColor = rgb(50, 150, 150);
            box6.height = 600
            box6.y = 1100
            elevator2.y = 1480
            asteroidGroup2.destroyEach();
        }

        if (lives2 === 0) {
            gameState = "end2"
        }

        if (alien.isTouching(portal)) {
            gameState = "transition"
        }

        if (elevatorSwitch === "off" && alien.isTouching(elevator) && alien.y < 1440) {
            elevatorSwitch = "on"
        }

        if (elevatorSwitch2 === "off" && alien.x > 630 && alien.x < 870 && alien.y > 800) {
            elevatorSwitch2 = "on"
        }

        if (elevatorSwitch === "on") {
            elevator.velocityY = 1
            elevator.shapeColor = rgb(50, 200, 200);
            box5.height = 700
            box5.y = 1150
            spawnAsteroid();
        }

        if (elevatorSwitch2 === "on") {
            elevator2.velocityY = -1
            elevator2.shapeColor = rgb(50, 200, 200);
            box6.height = 700
            box6.y = 1150
            spawnAsteroid2();
        }

        if (elevator.y > 1479) {
            elevator.velocityY = 0
            elevator.shapeColor = rgb(50, 150, 150);
            elevatorSwitch = "off"
        }

        if (elevator2.y < 950) {
            elevator2.velocityY = 0
            elevator2.shapeColor = rgb(50, 150, 150);
            elevatorSwitch2 = "off"
        }

        alien.collide(block1);
        alien.collide(block2);
        alien.collide(block3);
        alien.collide(block4);
        alien.collide(block5);
        alien.collide(block6);
        alien.collide(block7);
        alien.collide(block8);
        alien.collide(block9);
        alien.collide(block10);
        alien.collide(block11);
        alien.collide(block12);
        alien.collide(block13);
        alien.collide(block14);
        alien.collide(block15);
        alien.collide(block16);

        alien.collide(box1);
        alien.collide(box2);
        alien.collide(box3);
        alien.collide(box4);
        alien.collide(box5);
        alien.collide(box6);
        alien.collide(box7);

        alien.collide(ledge1);
        alien.collide(ledge2);
        alien.collide(ledge3);
        alien.collide(ledge4);

        alien.collide(elevator);
        alien.collide(elevator2);

        alien.collide(badblock1);
        alien.collide(badblock2);
        alien.collide(badblock3);
        alien.collide(badblock4);
        alien.collide(badblock5);
        alien.collide(badblock6);

        drawSprites();

        fill("black");
        textSize(50);
        text("Lives left: " + lives, 50, 70)
        text("Lives left: " + lives2, 850, 870)
    }

    if (gameState === "end") {
        camera.position.x = 1800;
        camera.position.y = 350
        rocketGroup.setVelocityXEach(0);
        alienLeftRunner.x = 100
        alienLeftRunner.y = 6500
        alienRightRunner.x = 100
        alienRightRunner.y = 6500

        if (keyDown("r")) {
            camera.position.x = 600;
            reset();
        }
    }

    if (gameState === "end2") {
        camera.position.x = 1800;
        camera.position.y = 350
        rocketGroup.setVelocityXEach(0);
        alienLeftRunner.x = 100
        alienLeftRunner.y = 6500
        alienRightRunner.x = 100
        alienRightRunner.y = 6500

        if (keyDown("r")) {
            camera.position.x = 600;
            camera.position.y = 1150;
            reset2();
        }
    }

    if (gameState === "transition") {
        camera.position.x = 3000
        camera.position.y = 350
   
        rocketGroup.setVelocityXEach(0);
        
        alienLeftRunner.x = 100
        alienLeftRunner.y = 6500 
        alienRightRunner.x = 100
        alienRightRunner.y = 6500

        if (keyDown("E")) {
            alien.x = 50
            alien.y = 1450
            camera.position.x = 600
            camera.position.y = 1150
            portal.y = 1415
            level = 2
            gameState = "play"
        }
    }
}

function spawnRocket() {
    if (frameCount % 100 === 0 || frameCount<2) {
        rocket = createSprite(1250, 545, 50, 40);
        rocket.velocityX = -15;
        rocket.addImage(rocketImage);
        rocket.scale = 0.5
        rocket.lifetime=300
        rocket.setCollider("rectangle", 0, 0, 450, 180);
        rocketGroup.add(rocket);
        rocketGroup.depth = rocketGroup.depth+10
    }
}

function spawnBomb() {
    if (frameCount % 80 === 0) {
        bomb = createSprite(150, 750, 50, 50);
        bomb.velocityY = 10;
        bomb.addImage(bombImage);
        bomb.scale = 0.5
        bomb.lifetime=80
        bomb.setCollider("circle", 0, 30, 85);
        //bomb.debug = true;
        bombGroup.add(bomb);
        bombGroup.depth = bombGroup.depth+10
    }
}

function spawnAsteroid() {
    if (frameCount % 60 === 0) {
        var rand = random(350, 550);
        asteroid = createSprite(rand, 750, 50, 50);
        asteroid.velocityY = 11;
        asteroid.addImage(asteroidImage);
        asteroid.scale = 0.5
        asteroid.lifetime=80
        asteroid.setCollider("circle", -5, 50, 70);
        asteroid.debug = true;
        asteroidGroup.add(asteroid);
        asteroidGroup.depth = asteroidGroup.depth+10
    }
}

function spawnAsteroid2() {
    if (frameCount % 60 === 0) {
        var rand = random(650, 850);
        asteroid2 = createSprite(rand, 750, 50, 50);
        asteroid2.velocityY = 11;
        asteroid2.addImage(asteroidImage2);
        asteroid2.scale = 0.5
        asteroid2.lifetime=80
        asteroid2.setCollider("circle", -5, 50, 70);
        asteroid2.debug = true;
        asteroidGroup2.add(asteroid2);
        asteroidGroup2.depth = asteroidGroup2.depth+10
    }
}

function reset() {
    rocketGroup.destroyEach();
    rocketGroup.setVelocityXEach(-15);
    gameState = "play"
    lives = 5
    alien.x = 100
    alien.y = 650
}

function reset2() {
    bombGroup.destroyEach();
    bombGroup.setVelocityYEach(10);
    gameState = "play"
    lives2 = 5
    alien.x = 50
    alien.y = 1450
}