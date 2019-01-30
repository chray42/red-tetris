import React from 'react';
import {board} from './style';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fill from '../../actions/fillGrid';


const dataBoard = ({data}) =>
{
  //console.log('dataBoard', data)
  return ( 
      <div style={board}>
        {
          data
        }
      </div>
  )
}


  const mapStateToProps = (state) => ({
    data: state.shape
  })

  const mapDispatchToProps = dispatch => {
    return {
      shape: bindActionCreators(fill, dispatch)
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(dataBoard);