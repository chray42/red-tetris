const updateArray = (array, gap, newArray, size) => {
    let i = 0;
    let update = [];
    for (i=0; i<size; i++) {
        update[i] = ret[i].slice(gap).concat(update);
    }
}

const processRotation = () => {
    const { start, current } = getState();
    const tmp = current.shape;
    const new =[[],[],[],[]];
    const size = tmp.length;
    let test = 10;
    for (let i=0; i<size; i++){
        // for(let j=0; j<size; j++){
        //     new[i][j] = tmp[size - j-1][i];
        //     test = new[i][j] ? Math.min(j, test) : test;
        // }
    }
    const renderCase = new Array(test).fill(0);
    for(let i=0; i<size; i++){
        new[i] = updateArray //  
    }
    
}

const rotate = (shape) => ({
    type: 'ROTATE',
    shape
});

export default rotate;