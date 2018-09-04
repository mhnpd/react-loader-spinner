import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import  Loader  from '../src/index.js'
storiesOf('Loader', module)
    .add('Audio', () => <Loader width={200} height={200} type="Audio" visible="false"/>)
    .add('Ball Triangle', () => <Loader width={200} heigth={300} color={'#cef442'} type="Ball-Triangle"/>)
    .add('Bars', () => <Loader width={200} heigth={200}  color="green" type="Bars"/>)
    .add('Circles', () => <Loader color="green" width={200} heigth={200}  type="Circles"/>)
    .add('Grid', () => <Loader color="green" width={200} heigth={200}  type="Grid"/>) 
    .add('Hearts', () => <Loader color="green" width={200} heigth={200}  type="Hearts"/>) 
    .add('Oval', () => <Loader color="green" width={200} heigth={200}  type="Oval"/>) 
    .add('Puff', () => <Loader color="green" width={200} heigth={200}  type="Puff"/>) 
    .add('Rings', () => <Loader color="green"width={200} heigth={200}  type="Rings"/>) 
    .add('TailSpin', () =>(<div> <Loader color="#00BFFF" width={200} heigth={200}  type="TailSpin"/> <Loader type="TailSpin" color="#939248" height="100" width="100" /> </div>)) 
    .add('ThreeDots', () => <Loader color="green" width={200} heigth={200}  type="ThreeDots"/>); 


