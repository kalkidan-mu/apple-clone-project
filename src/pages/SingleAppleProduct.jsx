import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Four04 from "./Four04/Four04";
function SingleAppleProduct() {
    const [product,setProduct]=useState([])
    const {productID}=useParams()
    // console.log(productID)
    useEffect(()=>{
        fetch("http://localhost:3000/iphones")
        .then(res=>res.json())
        .then(data=>{

            const productList=data.product
            console.log(data.product)
            const singleProduct=productList.find(
                (product)=>product.product_id===   parseInt(productID)
            )
            console.log("found product:",singleProduct)
            setProduct(singleProduct)
        })
        .catch(err=>console.log(err.message))
    },[productID])
    if(!product){
        return <Four04/>;
    }
    
  return (
    <>
    <br /><br />
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <h1 className="font-weight-bold">{product.product_name}</h1>
              <p className="brief-description">
                {product.product_brief_description}
              </p>
            </div>

            <div className="col-sm-12 col-md-6 my-auto">
              <div className="product-title">{product.product_name}</div>
              <div className="product-brife">
                {product.product_brief_description}
              </div>
              <div className="starting-price">
                Starting at: {product.starting_price}
              </div>
              <div className="monthly-price">{product.price_range}</div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="product-img">
                <img
                  src={product.product_img}
                  alt={product.product_name}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleAppleProduct
