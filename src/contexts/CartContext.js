import React, { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider(props){
  const [carts, setCarts] = useState([]);

  // if(localStorage.getItem('carts')){
  //   //get carts from local storage
  //   let newArr = JSON.parse(localStorage.getItem('carts'));
  //   setCarts(newArr);
  // }

  const addToCart = (product, number) => {
    let check = false;
    let newArr = [];
    for(let cart of carts){
      if(cart.id === product.id){
        check = true;
        // if click add to cart more time, it increase number of product
        cart.number = cart.number + number;
      }
      
      newArr.push(cart);
    }
    if(check === true){
      setCarts(newArr)
    }else setCarts([...carts, {...product, number: number}])
    alert('Đạt hàng thành công');
    console.log(carts);
  }

  const deleteItem = (product) => {
    let newArr = carts.filter(cart => cart.id !== product.id);
    setCarts(newArr);
  }

  const increaseNumber = (product) => {
    let newArr = [];
    for(let cart of carts){
      if(cart.id === product.id){
        cart.number = cart.number + 1;
      }

      newArr.push(cart)
    }
    setCarts(newArr);
  }

  const decreaseNumber = (product) => {
    let newArr = [];
    for(let cart of carts){
      if(cart.id === product.id){
        if(cart.number > 1){
          cart.number = cart.number - 1;
        }
      }

      newArr.push(cart)
    }
    setCarts(newArr);
  }
  return(
    <CartContext.Provider
      value={{
        carts: carts,
        addToCart: addToCart,
        deleteItem: deleteItem,
        increaseNumber: increaseNumber,
        decreaseNumber: decreaseNumber
      }}
      >
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext;