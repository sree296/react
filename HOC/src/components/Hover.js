import React from 'react';
import HocCounter from '../HOC/HocCounter';

class Hover extends React.Component {
    render(){
        const {count, counterHandler} = this.props;
        return(
            <h1 className="text-primary mt-5 inline border-primary border-primary p-3 border border-3 rounded" onMouseOver={counterHandler}>
                Hover {count} Times
            </h1>
        )
    }
}
export default HocCounter(Hover);