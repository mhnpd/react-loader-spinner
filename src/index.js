import React from 'react';
import PropTypes from 'prop-types';
import {audio as Audio} from './svgCollection/audio';
import {ballTrangle as BallTrangle } from './svgCollection/ball-triangle';
import {bars as Bars} from './svgCollection/bars';
import {circles as Circles} from './svgCollection/circles';
import {grid as Grid } from './svgCollection/grid';
import {hearts as Hearts} from './svgCollection/hearts';
import {oval as Oval } from './svgCollection/oval';
import {puff as Puff} from './svgCollection/puff';
import {rings as Rings} from './svgCollection/rings';
import {tailSpin as TailSpin} from './svgCollection/tail-spin';
import {threeDots as ThreeDots } from './svgCollection/three-dots';
export default class Loader extends React.Component {
  static propTypes = {
      color: PropTypes.string,
      type:PropTypes.string,
      visible:PropTypes.boolean,
      height:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        ]),
      width:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        ]),
  };
  static defaultProps = {
    color:'blue',
    type:'audio',
    height:80,
    width:80,
    visible:true
  };
  svg =(type, visible)=> {
    if(type==="Audio" && visible){
      return(Audio(this.props));
    }
    else if(type==="Ball-Triangle" && visible){
      return(BallTrangle(this.props));
    }
    else if(type==="Bars" && visible){
      return(Bars(this.props));
    }
    else if(type==="Circles" && visible){
      return(Circles(this.props));
    }
    else if(type==="Grid" && visible){
      return(Grid(this.props));
    }
    else if(type==="Hearts" && visible){
      return(Hearts(this.props));
    }
    else if(type==="Oval" && visible){
      return(Oval(this.props));
    }
    else if(type==="Puff" && visible){
      return(Puff(this.props));
    }
    else if(type==="Rings" && visible){
      return(Rings(this.props));
    }
    else if(type==="TailSpin" && visible){
      return(TailSpin(this.props));
    }
    else if(type==="ThreeDots" && visible){
      return(ThreeDots(this.props));
    }
    else if(!visible){
      return null;
    }
    else {
      return(<div><p>Loading...Please Wait</p><small><i>Note:No specfic svg type exist</i></small></div>)
    }    
  }
  render() {
    const { color, type, height, width, visible} = this.props;
    const style = {
        fill:color,
        height,
        width 
    }
    return (<div>{this.svg(type, visible)}</div>);
  }
}


