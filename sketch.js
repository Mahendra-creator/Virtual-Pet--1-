var dog1,dog,happyDog,database,foodStock,foodS

function preload()
{
	dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database()

  dog = createSprite(250,250,50,50)
  dog.addImage(dog1)
  dog.scale = 0.4
  foodStock = database.ref('Food')
  foodStock.on('value',readStock)
}


function draw() {  
background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  foodS = foodS-1
  writeStock(foodS)
  dog.addImage(happyDog)
  dog.scale = 0.4
  console.log(foodS)
}

  drawSprites();
  fill("white")
  textSize(20)
  text("Press Up Arrow To feed Milk To the Dog",35,20)
  
  fill("white")
  textSize(20)
  text("foodStock:"+foodS,250,450)
  
}

function readStock(data){
  foodS = data.val()
  console.log(foodS)
}

function writeStock(x){

database.ref('/').update({

  Food:x
})



}



