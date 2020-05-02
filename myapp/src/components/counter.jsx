import React, { Component } from 'react';

class Counter extends Component { 

  componentDidMount(){
    console.log(`3. componentDidMount Method - Uses for "Ajax" Calls`);
  };

  componentDidUpdate(prevProps, prevState){
    console.log({prevProps, prevState})
    console.log(`4. componentDidUpdate Method - After Component Has been updated`);
  };

  componentWillUnmount(){
    console.log(`5. componentWillUnmount Method - Done`); //when delete the component
  };


  render(){
    return(
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button 
            className="btn btn-danger m-2 btn-sm" 
            onClick={() =>this.props.onDelete(this.props.counter.id)}>Delete
        </button>
      </div>
    );
  }

  getBadgeClasses (){
    let classes = "badge m-2 badge-"
    classes += this.props.counter.value ===0 ? 'warning' : 'primary';
    return classes;
  }
  formatCount(){
    const {value} = this.props.counter;
    return value ===0 ? 'Zero' : value;
  }

}
export default Counter;
