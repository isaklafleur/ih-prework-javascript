gridsize = [20,20]; // size of grid the rover can travel in
direction = 'fffrfflfffbbfffffffffffffffffflrlrffffff' // direction string
directionArray = direction.split('');
// console.log(directionArray);
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
    for (i = 0; i <= directionArray.length; i++) {
        var dir = direction[i];

        // wraps from one edge of the grid to another
        // ex. with a gridsize of 10x10 => (0,1,2,3,4,5,6,7,8,9,10,0,1,2,.,.)

        if (face === 'N'){
            switch(dir) {
                case 'r': face = 'E';
                break;
                case 'l': face = 'W';
                break;
                case 'f': y === gridsize[1] ? y = 0 : y += 1;
                break;
                case 'b': y === 0 ? y = gridsize[1] : y -= 1;
                break;
            }
        }
        else if (face === 'E'){
            switch(dir) {
                case 'r': face = 'S';
                break;
                case 'l': face = 'N';
                break;
                case 'f': x === gridsize[0] ? x = 0 : x += 1;
                break;
                case 'b': x === 0 ? x = gridsize[0] : x -= 1;
                break;
            }
        }
        else if (face === 'W'){
            switch(dir) {
                case 'r': face = 'N';
                break;
                case 'l': face = 'S';
                break;
                case 'f': x === 0 ? x = gridsize[0] : x -= 1;
                break;
                case 'b': x === gridsize[0] ? x = 0 : x += 1;
                break;
            }
        }
        else if (face === 'S'){
            switch(dir) {
                case 'r': face = 'W';
                break;
                case 'l': face = 'E';
                break;
                case 'f': y === 0 ? y = gridsize[1] : y -= 1;
                break;
                case 'b': y === gridsize[1] ? y = 0 : y += 1;
                break;
            }
        }
    }
};

rover.move(position[0], position[1]);
console.log('Your end position is [' + [x,y] + ']');