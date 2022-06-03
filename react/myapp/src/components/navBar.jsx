import React from 'react';

const Navbar = (props) => {
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="#" className="navbar-brand">
                    Total items with Value : {props.totalItems}
                </a>
            </nav>
        )
}
export default Navbar;