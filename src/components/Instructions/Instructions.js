//import React, {Component} from 'react';
import React from 'react';
import  './Instructions.css';
import emoji from './emoji.svg'
//export default class Instructions extends Component{
export default function Instructions (){
    
    /*render(){*/
        return(
            <div className="instructions">
                <img alt="laughing crying emoji" src={emoji} />
                <p>Click num emoji para visualizar seu apelido.</p>
            </div>
          )
    /*}*/
}
