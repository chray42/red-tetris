import constants from '../constants';
const { block, tetriminos } = constants;

export const nextTetris = (state = {}, action) => {
    switch(action.type){
        case 'NEW':
            return {
                shape: tetriminos[action.randTetris1.shape],
                X: 90,
                Y: 0
            };
        default:
            return state;
    }
}