import React, { useState, useEffect, useContext} from 'react';

import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';

import CartContext from '../contexts/CartContext';
import ViewProduct from './ViewProduct';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: '50px',
  },

  cardRoot: {
    maxWidth: 250,
    height: 350,
  },
});

export default function Product() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const cart = useContext(CartContext);

  let match = useRouteMatch();
  console.log(match);

  useEffect(()=>{
    axios.get('https://805dq.sse.codesandbox.io/products').then(response => {
      setProducts(response.data);
    })
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products.map( product => 
          <Grid item xs={3}>
            <Link to={`${match.url}/${product.id}`}>
              <Card className={classes.cardRoot}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={product.imageURL}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom>
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => {cart.addToCart(product)}}>
                    Add to cart
                  </Button>
                  <Button size="small" color="secondary">
                    ${product.price}
                  </Button>
                </CardActions>
              </Card>
            </Link>  
          </Grid>)
        }
      </Grid>

      <Switch> 
        <Route exact path={match.path}>
        </Route>
        <Route exact path={`${match.path}/:id`}>
            <ViewProduct />
        </Route>
      </Switch>
    </div>
  )
}