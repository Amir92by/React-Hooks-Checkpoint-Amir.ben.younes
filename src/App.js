import './App.css';
import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
import Person from './component/person';

class App extends Component{

    state ={
      show:false,
    }

   

  handleClick =()=>{ this.setState({show:!this.state.show})}

  render(){
    return(
      <div className='App'>
        <Button className='myBtn2' variant="info" onClick={this.handleClick}>Toggle</Button>
        {this.state.show && <Person  />}
        
      </div>
    )
  }
}

export default App
