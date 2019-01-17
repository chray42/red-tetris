import React from 'react';
import PropTypes from 'prop-types';
import { Rect, Group } from 'react-konva';
import constants from '../../constants';
import actions from '../../actions';

import { Shape } from 'konva';
import { connect } from 'react-redux';

const { block } = constants;



const Shapes = (xs, ys, color) => {
    const shap = [];
    for (let i=0; i<xs.length; i++) {
    const shap = [];
        shap.push(<Rect key={i} width={block} height={block}
                            x={xs[i]} y={ys[i]} fill={color}
                            stroke="black" strokeWidth={4} /> );
    }
    return shap;
}

const Tetrimino = ({ shape, X, Y, color }) => {
    console.log('ici', shape, X, Y, color)
    const location = localization(shape);
    const xs = location.map((coord) => (coord.x * block) + X);
    const ys = location.map((coord) => (coord.y * block) + Y);
    return (
        <Group>
            {Shapes(xs, ys, color)}
        </Group>
    );
}

const localization = (shape) => {
    const location = [];
    for (let i=0; i<shape.length; i++) {
        for (let j=0; j<shape[i].length; j++) {
            if (shape[i][j]) {
                location.push({ x: j, y: i})
            }
        }
    }
    return location;
}


Tetrimino.propTypes = {
	shape: PropTypes.object,
	X: PropTypes.number,
	Y: PropTypes.number,
	color: PropTypes.string,
};

export default connect(null)(Tetrimino);