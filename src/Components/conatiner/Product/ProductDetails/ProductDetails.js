import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProduct , removeProduct} from '../../../redux/Action/ProductAction'

function ProductDetails() {
    let { id } = useParams()
    console.log(id)

    let product = useSelector((state) => state.singleProduct)
    console.log("single", product)
    const dispatch = useDispatch()

    let fetchingSinglProduct = async () => {
        try {
            let { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
            dispatch(selectProduct(data))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id && id !== "") {
            fetchingSinglProduct()
        }
        return () =>{
            dispatch(removeProduct())
        }
    }, [id])

    return (
        <div>
            <div className="card mb-3 mt-4" style={{maxWidth: "50rem"}}>
                <div className="row g-0 py-5">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">$ {product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
