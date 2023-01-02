import React, { useEffect, useState } from 'react'

function ProductGenerator() {
    const [products, setProducts] = useState()

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(data1 => setProducts(data1))
            .catch(error =>{
                console.error(error.message)
            })
    }, [])
console.log(products)
    return (
        <div className='flex justify-evenly flex-wrap bg-slate-300'>
            {
                products && products.map(product => (
                    <div key={product.id} className="bg-white p-3 m-3 rounded " >
                        <h3 className='text-lg font-bold'>{product.title.slice(0,15)}</h3>
                        <h4 className='text-base font-semibold'>Rating: {product.rating.rate}</h4>
                        <p >{product.description.slice(0,60)}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductGenerator