import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom'

export default function ViewProduct(){
  let { id } = useParams();
  return(
    <div>
      <h1>this is {id}</h1>
    </div>
  )
}