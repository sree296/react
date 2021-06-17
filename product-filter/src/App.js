import React from "react";
import Nav from './components/Nav';
import Search from './components/Search';
import ProductList from './components/ProductList';
import './App.css';

class App extends React.Component {  
   constructor(props){
      super(props);
      this.state = {
         searchText : ''
      }
      this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
   }
   handleSearchTextChange(_newVal){
      this.setState({
         searchText : _newVal
      });
   };

   render() {
      return (
         <section>
            <Nav />
            <div className="container">
               <Search 
                  searchText = {this.state.searchText}
                  onSearchTextChange = {this.handleSearchTextChange}
               />
               <ProductList 
               products={this.props.products}
               searchText = {this.state.searchText}
               />
            </div>

         </section>
      );
   }
}
export default App;