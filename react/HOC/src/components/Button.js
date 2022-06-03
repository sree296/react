import React from 'react';
import HocCounter from '../HOC/HocCounter';

class Button extends React.Component {
    render(){
        const {count, counterHandler} = this.props;
        return(
            <button className="btn btn-primary mt-3" onClick={counterHandler}>
                Clicked {count} Times
            </button>
        )
    }
}
export default HocCounter(Button);