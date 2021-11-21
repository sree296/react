import * as React from 'react';
import {Navbar, Container} from 'react-bootstrap';
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
      <div>
          <Navbar bg="dark" fixed="top" variant="dark">
            <Container>
              <Navbar.Brand href="#home">React Typescript Bootstrap</Navbar.Brand>
            </Container>
          </Navbar>
      </div>
  );
};

export default Header;
