// cartItems
import ProductList from "./ProductList";
import type {Products} from "./items"
import { useState } from "react";

type CartItem = Products;

// access cartItem  use set function to access carItem => check in item id matches product id => change the value of cartItem to add new item 

// data types 
// strings, numbers, booleans, ["red", "orange", "blue"], {red: "value"}
// "red",    12,     true/false,    array,                  object


// pseudocode
// allow the cart to select the previous item that was in the cart and add a new item to the cart using the setCartItem function

export default function Shop() {
    const [cartItem, setCartItem] = useState<CartItem[]>([])
        // declaring a variable or initializing a variable 
        // item = paramenter => placeholder for arguments passed in
        const addToCart = (item: CartItem) => { 
            // cartItem.find(item => item.id === products.id)
            setCartItem(previousCartItem => ([...previousCartItem, item]));
        } 
        const itemPrice = cartItem.reduce((total, item) => total + item.price, 0);
        return (
            <>
            {/* showing all products */}
            <ProductList fuckThis = {addToCart} />
            
            {/* create the cart */}
            <h2>My Cart</h2>
            {cartItem.map((item, index) => (
                <div key={index}> 
                    <p>{item.name}</p>
                    <p>{item.price}</p> 
                </div>
            ))}
            <h3>Total:{itemPrice}</h3>
            </>
        )
}
