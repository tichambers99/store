import React, {useContext} from 'react';

import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgb(1, 127, 255)'
  },

  toolBar:{
    display: "flex",
    justifyContent: 'space-between'
  },
  searchBar: {
    
  },
  cartBadge: {
    backgroundColor: 'rgb(253 216 53)'
  }
}));

function TopMenu() {
  const cartContext = useContext(CartContext)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolBar}>
          <div>
            <Link to="/">
              <img
                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                alt="brand"
                height="30px"
                width="50px"
              />
            </Link>
            <Link to='/product'>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Link>
          </div>
          <div>
            <input
              placeholder="Tìm sản phẩm bạn mong muốn..."
            />
            <button variant="contained" color="primary">
              Search
            </button>
          </div>
          <Link to='/cart'>
            <IconButton color="inherit">
              <Badge badgeContent={cartContext.carts.length} color="secondary">
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopMenu;