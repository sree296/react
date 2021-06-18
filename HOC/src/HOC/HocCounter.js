import React from 'react';

const HocCounter = (OriginalComponet) => {
    class NewComponent extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }
        counterHandler = () => {
            this.setState( prevState => {
                return {
                    count : prevState.count + 1
                }
            })
        }

        render(){
            return <OriginalComponet 
                    count = {this.state.count} 
                    counterHandler = {this.counterHandler}
                    /> 
        }
    }
    return NewComponent;
}
export default HocCounter;