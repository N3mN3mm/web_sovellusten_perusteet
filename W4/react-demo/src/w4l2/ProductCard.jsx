import React from 'react'

export default function ProductCard(props) {

    let stockInfo = "Yes"
    if(props.inStock == false){
        stockInfo = "No"
    }

    return (
    <article> 
        <h2>Product: {props.name}</h2>
        <p>Price: {props.price}€</p>
        <p>In stock: {stockInfo}</p>
        <p>In stock: {props.inStock ? "Yes" : "No"}</p>
        <p>Amount: {props.amount}</p>
    </article>
  )
}
