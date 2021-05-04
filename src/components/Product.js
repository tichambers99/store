import React, { useState, useEffect, useContext} from 'react';
import clsx from 'clsx';

import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';

import ViewProduct from './ViewProduct';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import commonStyles from '../styles/common';

const useStyles = makeStyles({
  container:{
    display: 'flex',
    flexFlow: 'row wrap',
  },

  root: {
    // flexGrow: 1,
    // padding: '50px',
    flex: '0 1 calc(20% - 0px)',
  },

  cardRoot: {
    maxWidth: 200,
    height: 350,
    padding: '15px',
  },
});

export default function Product() {
  const classes = useStyles();
  const common = commonStyles();
  const [products, setProducts] = useState([]);

  let match = useRouteMatch();

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get('https://805dq.sse.codesandbox.io/products');
      setProducts(res.data);
      console.log(res.data);
    }
    // axios.get('https://805dq.sse.codesandbox.io/products').then(response => {
    //   setProducts(response.data);
    //   {console.log(response.data)}
    // })

    fetchData();
  }, [])

  return (
    <div className={classes.root}>
      <Switch> 
        <Route exact path={match.path}>
          <h3>Gợi ý hôm nay</h3>
          
          <Grid className={classes.container} spacing={3}>
            {products.map( product => 
              <Grid item>
                  <Card className={clsx(classes.cardRoot, common.card)}>
                    <Link to={`${match.url}/${product.id}`} className={common.textDecoNone}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          height="200"
                          width="200"
                          image={product.imageURL[1]}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <div>
                            {product.name}
                          </div>
                        </CardContent>
                      </CardActionArea>
                        <CardActions>
                        <Button size="small" color="secondary">
                          {product.price}₫
                        </Button>
                      </CardActions>
                    </Link> 
                  </Card>
              </Grid>)
            }
          </Grid>
        </Route>
        <Route path={`${match.path}/:id`}>
            <ViewProduct />
        </Route>
      </Switch>
    </div>
  )
}