gridsize = [10,10];
direction = 'fffrfflfffbb' // direction string
directionArray = direction.split('');
//console.log(directionArray);
position = [0,0]; // [x,y]
x = position[0];
y = position[1];
face = 'N';

function rover(x,y){
  this.x = x;
  this.y = y;
  this.face = face;
}

rover.move = function() {
    for (i = 0; i < (directionArray.length + 1); i++) {
        var dir = direction[i];
        
        if (face === 'N'){
            switch(dir) {
                case 'r': face = 'E';
                break;
                case 'l': face = 'W';
                break;
                case 'f': y += 1;
                break;
                case 'b': y -= 1;
                break;
            }
        }
        else if (face === 'E'){
            switch(dir) {
                case 'r': face = 'S';
                break;
                case 'l': face = 'N';
                break;
                case 'f': x += 1;
                break;
                case 'b': x -= 1;
                break;
            }
        }
        else if (face === 'W'){
            switch(dir) {
                case 'r': face = 'N';
                break;
                case 'l': face = 'S';
                break;
                case 'f': x -= 1;
                break;
                case 'b': x += 1;
                break;
            }
        }
        else if (face === 'S'){
            switch(dir) {
                case 'r': face = 'W';
                break;
                case 'l': face = 'E';
                break;
                case 'f': y -= 1;
                break;
                case 'b': y += 1;
                break;
            }
        }
        else {
            console.log('Command not valid! Looks like your are tired, go back to earth!');
        }
    }
};

var grid = {
    x: gridsize[0],
    y: gridsize[1]
};

rover.checkGrid = function() {
    if (gridsize[1] < Math.abs(y)){
        y = (Math.abs(y) % (gridsize[1] / 2));
    }
    if (gridsize[0] < Math.abs(x)){
        x = (Math.abs(x) % (gridsize[0]/2));
    }
    else {
        console.log('Your end position is [' + [x,y] + ']');
        return true;
    }console.log('Your end position is [' + [x,y] + ']');
};

rover.move(position[0], position[1]);
rover.checkGrid();