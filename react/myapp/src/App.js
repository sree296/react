import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters'
import Navbar from './components/navBar'

class App extends Component {

  constructor(){
    super();
    console.log(`1. Constructor will Call First`);
  }
      state = {
        counters : [
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0},
            {id:5, value: 0}
        ]
    }

    handleIncrement = (counter) =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters})
    };

    deleteHandler = (deleteId) => {
        const countersAfterDelete = this.state.counters.filter( counter => counter.id !== deleteId);
        this.setState({
            counters: countersAfterDelete
        });
    };

    
    render(){
      console.log(`2. render Method`);
    return(
      <div className="App">
       <Navbar totalItems = {this.state.counters.filter (counter => counter.value>0).length}/>
       <Counters
       onIncrement = {this.handleIncrement}
       onDelete = {this.deleteHandler}
       onCounters = {this.state.counters}
       />
      </div>
    );
    }
}
export default App;
