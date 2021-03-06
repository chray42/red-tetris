const computeOffset = require('./colision');
const rotate = require('./rotation');

const gridMaker = (field) =>{
    const grid = []
    for (let i=0; i<22; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<22; i++) {
        for(let j=0; j<12; j++) { //game width 10 blocs
            if (i==0 || j==0 || i==21 || j==11){
                grid[i].push(1);
            }
            else if (field[i][j] > 2) {
                grid[i].push(field[i][j]);
            }
            else {
                grid[i].push(0);
            }
        }
    }
    return grid;
}


const finish = (field, id) => {
   let i, j;
    for ( i=0; i<22; i++) {
        for( j=0; j<12; j++) {
            if (field[i][j] == 2){
                field[i][j] = id+3;
            }
        }
    }
    return field;
}


const moveLeft = (field, id) => {
     console.log('left',field)
     const grid = gridMaker(field);
    let i, j;
    const offsetDown = computeOffset(field, "left");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                console.log('trouvé')
                if (field[i][j-1] > 2 || field[i][j-1] == 1){
                    console.log(offsetDown)
                    return {
                        type: 'LEFT',
                        field: finish(field, id),
                        grounded: true
                    }
                } else {
                    // console.log('trouvé')
                    grid[i][j-1] = 2;
                }
            }
        }
    }
    return {
        type: 'LEFT',
        field: grid,
    }
}

const moveRight = (field, id) => {
    const grid = gridMaker(field);
    // console.log('right',grid)
    let i, j;
    const offsetDown = computeOffset(field, "right");
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i][j + offsetDown-1] > 2 || field[i][j + offsetDown-1] == 1){
                    return {
                        type: 'RIGHT',
                        field: finish(field, id),
                        grounded: true
                    }
                } else { grid[i][j+1] = 2; }
            }
        }
    }
    return {
        type: 'RIGHT',
        field: grid,
    }
}
const moveDown = (field, id) => {
    const grid = gridMaker(field);
    let i, j;
    let offsetDown = computeOffset(field, "down");
    offsetDown = offsetDown == 1 ? 2 : offsetDown;
    for ( i=0; i<21; i++) {
        for( j=1; j<11; j++) {
            if ((field[i][j] == 2) && (i < 21)){
                if (field[i + offsetDown-1][j] > 2 || field[i + offsetDown-1][j] == 1){
                    return {
                        type: 'DROPDOWN',
                        field: finish(field, id),
                        grounded: true
                    }
                } else { grid[i+1][j] = 2; }
            }
        }
    }
    return {
        type: 'DROPDOWN',
        field: grid,
        grounded: false
    }
}
const mover = (data) => {
    return (
        data.key == 40 ? moveDown(data.field, data.id) :
            data.key == 39 ? moveRight(data.field, data.id) :
                 moveLeft(data.field, data.id)    
    )
    //console.log(data.key)
    // switch(data.key){
    //     case 40:
    //         return moveDown(data.field, data.id);
    //     case 39:
    //         return moveRight(data.field, data.id);
    //     case 37:
    //         return moveLeft(data.field, data.id);
    //     default:
    //         break;
    // }
}

module.exports = mover;