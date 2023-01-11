import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {productLoad} from '../actions'

function ProductGenerator(props) {
    const [products, setProducts] = useState()

    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(data1 => setProducts(data1))
            .catch(error =>{
                console.error(error.message)
            })
    }, [])

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
            <button onClick={props.loadProduct} >Load More Product</button>
        </div>
    )
}

// it is a function which return an object that have these fucnction
const mapStateToProps = ({ isloding, products, error }) => ({
    isloding,
    products,
    error,
})


const mapDispatchToProps = dispatch => ({
    loadProduct: () => dispatch(productLoad()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductGenerator)