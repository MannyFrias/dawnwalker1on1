// cartItems
import ProductList from "./ProductList";
import type {Products} from "./items"
import { useState } from "react";

type CartItem = Products

export default function Shop(products : Products) {
    const [cartItem, setCartItem] = useState<CartItem[]>([])
        cartItem.find(item => item.id === products.id)
        }


}