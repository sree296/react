// Import Packages
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Import Styles
import './Header.scss';

const Header = () => {
  const pages = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-between">
          <Typography component="div">
            <h6 className="tracking-wider">
              GATTU
            </h6>
          </Typography>
          <List className="flex justify-between">
            {pages.map((page) => (
              <ListItem key={page}>
                <Typography component="a" textAlign="center">{page}</Typography>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;