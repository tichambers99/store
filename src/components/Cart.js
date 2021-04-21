import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../contexts/CartContext'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirections: 'row',
  },
  cartBox:{
    flexGrow: 1
  },
  receipt:{
    flexGrow: 1
  },
  root: {
    maxHeight: 150,
    maxWidth: 750,
    margin: 20,
    display: 'flex',

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  media:{
    maxWidth: 150,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Cart(){
  const [total, setTotal] = useState(0);
  const cartContext = useContext(CartContext);
  const classes = useStyles();
  const theme = useTheme();
  
  useEffect(()=>{
    let price = 0;
    for(const cart of cartContext.carts){
      price = price + cart.price*cart.number;
    }
    setTotal(price);
  })

  return(
    <div>
      <h3>GIỎ HÀNG</h3>
      {
        cartContext.carts.length === 0 && 
        <div>
          <Link to='/product'>
            <button>Shop now</button>
          </Link>
        </div>
      }
      {
        cartContext.carts.length !== 0 &&
        <div className={classes.container}>
        <div className={classes.cartBox}>
        {cartContext.carts.map( cart => 
          <Card className={classes.root}>
            <CardMedia className={classes.media}
            component="img"
            alt="Contemplative Reptile"
            image={cart.imageURL}
            title="Contemplative Reptile"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography>
                  {cart.name}
                </Typography>
              </CardContent>
              <div>
                <button
                  onClick={()=>cartContext.deleteItem(cart)}
                >Xóa</button>
                <button>Để dành mua sau</button>
              </div>
            </div>
            <div>
              <h2>${cart.price*cart.number}</h2>
              <div className={classes.controls}>
                <button onClick={()=>cartContext.decreaseNumber(cart)}>-</button>
                <input value={cart.number}></input>
                <button onClick={()=>cartContext.increaseNumber(cart)}>+</button>
              </div>
            </div>
        </Card>)}
        </div>
        <div className={classes.receipt}>
          <Card>
            <CardContent>Tạm tính: ${total}</CardContent>
            <CardContent>
              <div>Thành tiền: ${total}</div>
              <div>(Đã bao gồm VAT nếu có)</div>
            </CardContent>
          </Card>
          <button>Tiến hành đặt hàng</button>
        </div>
      </div>
    } 
      
    </div>
  )
}