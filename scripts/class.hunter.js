








class Hunter{
	constructor(x,y,ind){
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

newDirections(){
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
			
		];
	}


	getDirections(t){
		this.newDirections();
		var found = [];

		for(var i in this.directions){
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t){
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}



	move(){
		var datark = this.getDirections(0);
		var cord = random(datark);
		if(cord){
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 4;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 
			for (var i in xotArr)
			{
				if(xotArr[i].x == x && xotArr[i].y == y){
				 xotArr.splice(i, 1);
				}
			}

			for (var i in EatGrassArr)
			{
				if(EatGrassArr[i].x == x && EatGrassArr[i].y == y){
				 EatGrassArr.splice(i, 1);
				}
			}

			for (var i in PredatorArr)
			{
				if(PredatorArr[i].x == x && PredatorArr[i].y == y){
				 PredatorArr.splice(i, 1);
				}
			}



			
			}
			
		}

eat(){

		var datark1 = this.getDirections(1);
		var datark2 = this.getDirections(2);
		var datark3 = this.getDirections(3);
		var datarkner = datark1.concat(datark2, datark3);
		var cord = random(datarkner);
		if(cord){
			var x = cord[0];
			var y = cord[1];
			matrix[y][x] = 4;
			matrix[this.y][this.x]=0

			this.x=x;
			this.y=y; 

			if(matrix[y][x] == 1){
				for (var i in xotArr)
				{
					if(xotArr[i].x == x && xotArr[i].y == y){
					xotArr.splice(i, 1);
					}
				}
			}

			else if(matrix[y][x] == 2){
				for (var i in EatGrassArr)
			{
				if(EatGrassArr[i].x == x && EatGrassArr[i].y == y){
				 EatGrassArr.splice(i, 1);
				}
			}

		}
		
		else if(matrix[y][x] == 3){
				for (var i in PredatorArr)
			{
				if(PredatorArr[i].x == x && PredatorArr[i].y == y){
				 PredatorArr.splice(i, 1);
				}
			}
			
	  }	
	}
	else {
			this.move();
		}
	}




}
