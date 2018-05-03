var matrix = [];
var p = 50;
var m = 50;
var r_side = 40;
var xotArr = [];
var EatGrassArr = [];
var PredatorArr = [];
var HunterArr = [];

function setup() {
  for (var i = 0; i < p; i++) {
        matrix[i] = [];
        for (var j = 0; j < m; j++) {
            matrix[i][j] = Math.round(random(0, 4));;
          }
    }
    console.log(matrix);

    frameRate(2);
    createCanvas(p * r_side, m * r_side);
    background('#acacac');
    for(var i = 0; i < matrix.length; i++){
      for(var j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] == 1){
          var xotik  = new Grass(j, i, 1);
          xotArr.push(xotik);
        }
        if (matrix[i][j] == 2){
          var xotaker = new EatGrass(j, i, 2);
          EatGrassArr.push(xotaker);
          
        }
        if (matrix[i][j] == 3){
          var predator = new Predator(j, i, 3);
          PredatorArr.push(predator);
        }
        if (matrix[i][j] == 4){
          var hunter = new Hunter(j, i, 4);
          HunterArr.push(hunter);
        }
      }
    }    
  }
function draw() {
     background('#acacac');

    for(var i in xotArr){
       xotArr[i].mul();
  }

  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 1){
        fill("green");
        rect(j * r_side, i * r_side, r_side, r_side);
      }
      if(matrix[i][j] == 2)
      {

        fill("red");
        rect(j * r_side, i * r_side, r_side, r_side);
      }
      if(matrix[i][j] == 3)
      {

        fill("black");
        rect(j * r_side, i * r_side, r_side, r_side);
      }

      if(matrix[i][j] == 4)
      {

        fill("purple");
        rect(j * r_side, i * r_side, r_side, r_side);
      }

    }
  }
    for(var i in EatGrassArr){
      EatGrassArr[i].eat();
  }

   for (var i in PredatorArr  ){
    PredatorArr[i].eat();
   }

   for (var i in HunterArr  ){
    HunterArr[i].eat();
   }
}

