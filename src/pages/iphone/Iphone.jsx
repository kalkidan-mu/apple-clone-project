import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
  const [iphones, setIphone] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/iphones");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setIphone(data.product) 
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProduct();
  }, []);
// console.log(iphones)
  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="font-weight-bold text-center ">
                <br />
                <br />
                Iphones
              </h1>
              <div className=" text-center brief-description">
                Lots to Love. Less to spend
              </div>
            </div>
          </div>
          {iphones?.map((products, i) => {
            let productDiv = (
              <div
                key={products.product_url}
                className="row justify-content-center text-center"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    i % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <div className="product-title">{products.product_name}</div>
                  <div className="product-brife">
                    {products.product_brief_description}
                  </div>
                  <div className="starting-price">
                    starting at:{products.starting_price}
                  </div>
                  <div className="monthly-price">{products.price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${products.product_id}`}>
                          Learn More
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`col-sm-12 col-md-6 order-${
                    i % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="product-img">
                    <img src={products.product_img} alt="" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </>
  );
}

export default Iphone;
// The <Link> component is a part of React Router, a library that enables navigation between different components or pages in a React application without causing a full page reload.