import React, { useContext, useEffect, useState } from 'react';

import CartContext from '../contexts/CartContext'

import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

import useStyles from '../styles/cart';
import commonStyles from '../styles/common';

export default function Cart(){
  const [total, setTotal] = useState(0);
  const cartContext = useContext(CartContext);
  const classes = useStyles();
  const common = commonStyles();
  
  useEffect(()=>{
    let price = 0;
    for(const cart of cartContext.carts){
      price = price + cart.price*cart.number;
    }
    console.log(price);
    setTotal(price);
  }, [cartContext.carts])

  return(
    <div className={classes.root}>
      <h3>GIỎ HÀNG <span>({cartContext.carts.length} sản phẩm)</span></h3>
      {
        cartContext.carts.length === 0 && 
        <div className={classes.noProduct}>
          <img
            src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
            alt="cart-none"
            height='160px'
            width='190px'
          />
          <div className={classes.noProductText}>Không có sản phẩm nào trong giỏ hàng của bạn</div>
          <Link to='/product' className={common.textDecoNone}>
            <Button className={common.Button}>Tiếp tục mua sắm</Button>
          </Link>
        </div>
      }
      {
        cartContext.carts.length !== 0 &&
          <div className={classes.container}>
            <Grid className={classes.gridRoot}>
              <Grid item xs={9}>
                <div className={classes.cartBox}>
                {cartContext.carts.map( cart => 
                  <Card className={clsx(classes.cartRoot, common.card)}>
                    <div className={classes.cardHeader}>
                      <Link to='/product' className={clsx(common.textDecoNone, classes.dFlex)}>
                        Tiki shop
                        <ChevronRightIcon />
                      </Link>
                    </div>
                    <div className={classes.contain}>
                      <CardMedia className={classes.media}
                        component='img'
                        alt="product img"
                        image={cart.imageURL}
                        height="150px"
                        width="150px"
                      />
                      <CardContent className={classes.content}>
                        <div>
                          <div className={classes.mb20}>
                            <Link to={`/product/${cart.id}`} className={common.textDecoNone}>
                              {cart.name}
                            </Link>
                          </div>
                          <button className={classes.button_non} onClick={()=>cartContext.deleteItem(cart)}>Xóa</button>
                          <button className={classes.button_non}>Để dành mua sau</button>
                        </div>
                        <div className={classes.detail}>
                          <div className={classes.detail_price}>{cart.price}₫</div>
                          <div className={common.controls}>
                            <table className={common.table}>
                              <tr>
                                <td className={common.td}><button className={common.buttonInput} onClick={()=>cartContext.decreaseNumber(cart)}>-</button></td>
                                <td className={common.td}><input className={common.buttonInput} value={cart.number}></input></td>
                                <td className={common.td}><button className={common.buttonInput} onClick={()=>cartContext.increaseNumber(cart)}>+</button></td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                    <div className={clsx(classes.cardFooter, classes.dFlex)}>
                      Mã khuyến mãi
                      <ExpandMoreIcon />
                    </div>
                </Card>)}
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.receipt}>
                <Card className={clsx(`${classes.mb20}`, common.card)}>
                  <CardContent>
                    <span >Tiki khuyến mãi</span>
                    <span>Có thể chọn 2<InfoOutlinedIcon /></span>
                  </CardContent>
                  <CardContent className={classes.dFlex}><ConfirmationNumberOutlinedIcon />Chọn hoặc nhập khuyến mãi</CardContent>
                </Card>
                <Card className={clsx(`${classes.mb20}`, common.card)}>
                  <CardContent>Tạm tính: {total}₫</CardContent>
                  <CardContent className={classes.top_border}>
                    <div>Thành tiền: <b>{total}₫</b></div>
                    <div>(Đã bao gồm VAT nếu có)</div>
                  </CardContent>
                </Card>
                <Button className={common.orderButton}>Tiến hành đặt hàng</Button>
              </div>
            </Grid>
          </Grid>
        </div>
    } 
      
    </div>
  )
}