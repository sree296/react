import React from 'react';
import Counter from './counter'
const Counters = (props) => {
        const {onIncrement, onDelete } = props; //DeStructruing
        return(
            <React.Fragment>
                {props.onCounters.map(counter => 
                <Counter 
                    onIncrement = {onIncrement}
                    onDelete={onDelete} 
                    key={counter.id} 
                    counter={counter}/>)}
            </React.Fragment>
        )
    }
export default Counters;