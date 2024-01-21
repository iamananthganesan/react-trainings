import React, { Component } from 'react'
import axios from 'axios'
import './Products.css'
class HttpRequests extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then((resposne) => {
                this.setState({
                    products: resposne.data
                })
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }
    render() {
        const { products } = this.state
        return (
            <div className='productList-container'>
                <h1>Fetch Data</h1>
                <div className='productList-wrapper'>
                    {
                        products.map((product, index) => {
                            return (
                                <div className='product-item' key={product.id}>
                                    <figure>
                                        <img src={product.image} alt={product.title} title={product.title} />
                                    </figure>
                                    <div className='product-details'>
                                        <h2>{product.title}</h2>
                                        <p>{product.description}</p>
                                        <div className='priceDetails'>
                                        <span><strong>Category</strong>:{product.category}</span>
                                        <span>Price:{product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>

        )
    }
}

export default HttpRequests
