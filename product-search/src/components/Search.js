import React from 'react';

class Search extends React.Component{

   constructor(props){
       super(props);
       this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
   }

   handleSearchTextChange(e){
    this.props.onSearchTextChange(e.target.value);
   }
   
    render(){
        return(
            <form>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="search for a product..."
                    value = {this.props.searchText}
                    onChange = {this.handleSearchTextChange}
                />
            </form>
            
        );
    }
}
export default Search;