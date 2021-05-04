import React, {useContext} from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';
import CartContext from '../contexts/CartContext'

import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from '../styles/topMenu'
import commonStyles from '../styles/common'

function TopMenu() {
  const cartContext = useContext(CartContext)
  const classes = useStyles();
  const common = commonStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={clsx(classes.toolBar, common.textDecoNone)}>
          <div className={classes.logoMenu}>
            <Link to="/" className={classes.logo}>
              <img
                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                alt="brand"
                height="40px"
                width="60px"
              />
            </Link>
            <Link to='/product' className={clsx(classes.menu, common.textDecoNone)} >
              <MenuIcon className={classes.icon}/>
              <div className={classes.menuText}>
                <div>Danh mục</div>
                <div>Sản phẩm</div>
              </div>
            </Link>
          </div>
          <div className={classes.searchBar}>
            <Input className={classes.inputSearch}
              placeholder="Tìm sản phẩm bạn mong muốn..."
            />
            <Button variant="contained" color="primary" className={classes.searchButton}>
              {/* <SearchIcon /> */}
              <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" height="20px" width="20px"></img>
              Tìm kiếm
            </Button>
          </div>
          <div className={classes.userCart}>
            <Link to='/' className={common.textDecoNone}>
              <div className={classes.user}>
                <PersonOutlineIcon className={classes.icon}/>
                <div>
                  <div>Đăng nhập/Đăng ký</div>
                  <div>Tài khoản</div>
                </div>
              </div>
            </Link>
            <Link to='/cart'>
              <Badge badgeContent={cartContext.carts.length} classes={{badge: classes.cartBadge}}>
                <AddShoppingCartIcon className={classes.icon}/>
              </Badge>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopMenu;