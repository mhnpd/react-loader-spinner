import React from 'react';
import PropTypes from 'prop-types';
import {audio as Audio} from './loading/audio';
import {ballTrangle as BallTrangle } from './loading/ball-triangle';
import {bars as Bars} from './loading/bars';
import {circles as Circles} from './loading/circles';
import {grid as Grid } from './loading/grid';
import {hearts as Hearts} from './loading/hearts';
import {oval as Oval } from './loading/oval';
import {puff as Puff} from './loading/puff';
import {rings as Rings} from './loading/rings';
import {tailSpin as TailSpin} from './loading/tail-spin';
import {threeDots as ThreeDots } from './loading/three-dots';
export default class Loader extends React.Component {
  static propTypes = {
      color: PropTypes.string,
      type:PropTypes.string,
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

  svgRenderer =(type)=> {
      switch (type) {
      case 'Audio':
          return (Audio(this.props)); 
      case 'Ball-Triangle':
          return (BallTrangle(this.props)); 
      case 'Bars':
          return (Bars(this.props)); 
      case 'Circles':
          return (Circles(this.props)); 
      case 'Grid':
          return (Grid(this.props)); 
      case 'Hearts':
          return (Hearts(this.props)); 
      case 'Oval':
          return (Oval(this.props)); 
      case 'Puff':
          return (Puff(this.props));  
      case 'Rings':
          return (Rings(this.props)); 
      case 'TailSpin':
          return (TailSpin(this.props));   
      case 'ThreeDots':
          return (ThreeDots(this.props));                
      default:
          return (<div><p>Loading...Please Wait</p><small><i>Note:No specfic svg type exist</i></small></div>)
      }
  }

  render() {
      const { color, type, height, width} = this.props;
      const style = {
          fill:color,
          height,
          width 
      }
      alert(color)
      return (<div>{this.svgRenderer(type)}</div>);
  }
}


