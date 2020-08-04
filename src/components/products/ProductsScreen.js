import React from 'react'
import { CardContain } from './card'
import { useSelector } from 'react-redux';

export const ProductsScreen = () => {
    const { products } = useSelector(state => state.products)
    return (
        <div className="container">
            <div className="products__grid">
                {
                    products.map((product) => {
                        return (
                            <CardContain key={product.id} {...product} />
                        )
                    })
                }
            </div>
        </div>
    )
}
