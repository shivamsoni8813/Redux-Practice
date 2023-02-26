import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setProduct } from '../../redux/Action/ProductAction'
function Product() {


    const dispacth = useDispatch()
    const product = useSelector((state) => state.allproduct.product)

    let fetchProduct = async () => {
        try {
            let { data } = await axios.get("https://fakestoreapi.com/products")
            dispacth(setProduct(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    console.log("mainPro", product)
    return (
        <div>
            <div className="productContainer">
                <div className="row">
                    {
                        product?.map((item, i) => {
                            return (

                                <div className="col-sm-3">
                                    <Link to={`/Products/${item.id}`}>
x
                                        <div className="card " key={item.id} style={{ width: "18rem" }}>
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <p className="card-text">{item.title}</p>
                                                <p className="card-text">$ {item.price}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
