import ProductCard from './ProductCard.tsx'; 
import {items} from './items';

// creat my shop element
// new div
// create map over products
// for each items use product card component to display product 


export default function ProductList () {
    
return (
    <div>
        <h1>My Shop</h1>
        <div className='product-list'>
        {items.map(item => (
            <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.image}
            />
        ))}
        </div>
    </div>
)
}