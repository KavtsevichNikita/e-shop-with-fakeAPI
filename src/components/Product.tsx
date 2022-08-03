import React, { useState } from 'react'
import { IProduct } from '../models';
interface ProductProps {
    product: IProduct
}
const Product = ({product}: ProductProps) => {

    const [details, setDetails] = useState(false);

    const btnClassName = details ? 'bg-blue-400' : 'bg-yellow-400'
    const classes = `py-2 px-4 border ${btnClassName}`

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} alt= {product.title} className="w-1/6" />
            <p>{product.title}</p>
            <span className='font-bold'> $ {product.price}</span>
            <button
            className={classes}
            onClick={() => setDetails(prev => !prev)}
            >
                
            {details ? 'Hide details' : 'Show details' }
            
            </button>
            
            { details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    );
};

export default Product;