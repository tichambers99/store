import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../contexts/CartContext'

import axios from 'axios';
import clsx from 'clsx';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import AddIcon from '@material-ui/icons/Add';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import RestorePageOutlinedIcon from '@material-ui/icons/RestorePageOutlined';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

import useStyles from '../styles/viewProduct';
import commonStyles from '../styles/common';
import { makeStyles } from '@material-ui/core';

const overRideClass = makeStyles({
  root: {
    height: '450px',
    width: '450px',
  }
})

export default function ViewProduct(){
  const [item, setItem] = useState({});
  const [number, setNumber] = useState(1);
  const [productImg, setProductImg] = useState("");
  const cartContext = useContext(CartContext);
  let { id } = useParams();
  

  const classes = useStyles();
  const common = commonStyles();

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get(`https://805dq.sse.codesandbox.io/products?id=${id}`,);
      console.log(id);
      console.log(res.data);
      setItem(res.data[0]);
    }
    // axios.get(`https://805dq.sse.codesandbox.io/products?id=${id}`)
    // .then(response =>
    //   setItem(response.data[0])
    // )

    fetchData();
  })

  const decreaseNumber = () => {
    if(number > 1) setNumber(number - 1)
  }

  const increaseNumber = () => {
    setNumber(number + 1)
  }

  const onChangeNumber = (event) => {
    
    setNumber(event.target.value)
    console.log(typeof event.target.value)
  }

  return(
    <div>
      <Card className={clsx(common.card, classes.root)}>
        <div className={classes.media}>
          <CardMedia
            classes={{
              root: classes.root,
            }}
            className={classes.cover}
            image={item.imageURL[0]}
            title="Live from space album cover"
          />
          <div className={classes.meadia_list}>
            <CardMedia image={item.imageURL[0]} alt="product img" className={clsx(classes.media_item, classes.media_item_active)} />
            <CardMedia image={item.imageURL[0]} alt="product img" className={classes.media_item} />
            <CardMedia image={item.imageURL[0]} alt="product img" className={classes.media_item} />
            {/* {item.imageURL.map(img => <CardMedia image={img} alt="product img" className={classes.media_item} />)} */}
          </div>
        </div>
        <CardContent className={classes.content}>
          <div className={classes.head}>
            <Typography component="h5" variant="h5">
              {item.name}
            </Typography>
          </div>
          <div className={classes.infor}>
            <div className={classes.product}>
              <div className={classes.product_price}>
                <Typography component="h4" variant="h4">
                  {item.price}???
                </Typography>
                <div>
                  <img
                    height='20px'
                    width='40px'
                    src='https://salt.tikicdn.com/ts/upload/7b/17/f7/4860983e93ea3c264ae0d932c58ec4f7.png' alt='tiki cart'></img>
                  Ho??n ti???n t???i ??a 15% t???i ??a 600k/th??ng
                </div>
              </div>
              <div className={classes.product_groups}>
                <div>M??u s???c: <span><b>H???ng</b></span></div>
                <div className={classes.button_list}>
                  <button className={clsx(classes.color_button_active, classes.color_button)}>H???ng</button>
                  <button className={classes.color_button}>Xanh r??u</button>
                  <button className={classes.color_button}>Xanh d????ng</button>
                </div>
              </div>
              <div className={classes.product_groups}>
                <div><b>3 m?? gi???m gi??</b></div>
                <div className={classes.button_list}>
                  <button className={classes.voucher_button}>Gi???m 5k</button>
                  <button className={classes.voucher_button}>Gi???m 10k</button>
                  <button className={classes.voucher_button}>Gi???m 15k</button>
                  <KeyboardArrowRightOutlinedIcon />
                </div>
              </div>
              <div className={classes.controls}>
                <div>S??? l?????ng</div>
                {/* <div>
                  <button onClick={()=>decreaseNumber()}>-</button>
                  <input
                    type='number'
                    min="1"
                    value={number} 
                    onChange={(event)=>onChangeNumber(event)}  
                  />
                  <button onClick={()=>increaseNumber()}>+</button>
                </div> */}
                <div className={classes.controls}>
                  <table className={common.table}>
                    <tr>
                      <td className={common.td}><button className={common.buttonInput} onClick={()=>decreaseNumber()}>-</button></td>
                      <td className={common.td}>
                        <input 
                          className={common.buttonInput}
                          type='number'
                          min="1"
                          value={number} 
                          onChange={(event)=>onChangeNumber(event)} /></td>
                      <td className={common.td}><button className={common.buttonInput} onClick={()=>increaseNumber()}>+</button></td>
                    </tr>
                  </table>
                </div>
                <div>
                  <Button className={common.orderButton} onClick={()=>cartContext.addToCart(item, number)}>Ch???n mua</Button>
                </div>
              </div>
            </div>
            <div className={classes.shop}>
              <div className={classes.shop_head}>
                <CardHeader
                  avatar={
                    <Avatar alt="shop avatar" src={item.imageURL} className={classes.avatar}/>
                  }
                  title="Tiki Shop"
                />
              </div>
              <div className={classes.shop_action}>
                <button className={classes.shopButton}>
                  <StorefrontOutlinedIcon />
                  <span>Xem Shop</span>
                  </button>
                  <button className={classes.shopButton}>
                  <AddIcon />
                  <span>Theo d??i</span>
                </button>
              </div>
              <div className={classes.shop_footer}>
                <div className={classes.icon_box}>
                  <VerifiedUserOutlinedIcon />
                  <span className={classes.icon_box_text}>Ho??n ti???n 100%</span>
                </div>
                <div className={classes.icon_box}>
                  <CheckBoxOutlinedIcon />
                  <span className={classes.icon_box_text}>M??? h???p ki???m tra</span>
                </div>
                <div className={classes.icon_box}>
                  <RestorePageOutlinedIcon />
                  <span className={classes.icon_box_text}>?????i tr??? 30 ng??y</span>
                </div>
              </div>
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}