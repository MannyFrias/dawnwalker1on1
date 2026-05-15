import './App.css'
import React, {useState} from "react"

// function ProductCard2 (price) {
//   return price = price * 2; 
// }
type Props = { image: string, name: string, price: number, category: string, fuckThis: () => void}

function ProductCard({image, name, price, category, fuckThis }: Props): React.JSX.Element{
  // id, name , price, category
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='product-card'>
			<img className='item-image' src={image} alt={name} />
			<h1 className='item-name'>{name}</h1>
			<p className='item-category'><strong>{category}</strong></p>
			<p className='item-price'>{price}</p>
			<div className='item-quantity'>
				<button onClick={() => setQuantity(Q => Math.max(1, Q - 1))}>-</button>
				<span>{quantity}</span>
				<button onClick={() => setQuantity(Q => Q + 1)}>+</button>
			</div>
			<button onClick = {() => fuckThis()} className='add-to-cart'>Add to cart</button>
    </div>
  )
}

export default ProductCard
