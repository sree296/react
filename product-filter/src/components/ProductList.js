import React from 'react';

class ProductList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const _products = [];
        const searchText = this.props.searchText.toLowerCase();
        this.props.products.forEach((product) => {
              if (product.name.toLowerCase().indexOf(searchText) === -1) {
                return;
              }
              _products.push(
                <tr>
                    <td className="product-name">{product.name}</td>
                    <td>{product.price}</td>
                </tr>
              );
        });
        return (
              <div className="container">
                 <table className="table table-bordered mt-3">
                    <thead>
                       <th>Name</th>
                       <th>Price</th>
                    </thead>
                    <tbody>
                       {_products}
                    </tbody>
                 </table>            
              </div>
        );
     }

}
export default ProductList;