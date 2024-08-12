import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Slider from "react-slick";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  let { addProductToCart } = useContext(CartContext);
  let { id } = useParams();

  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [productDetails, setProductDetails] = useState(null);
  const [products, setproducts] = useState([]);
  async function getDetails(productId) {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}`
    );

    setProductDetails(data.data);
    let api2 = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products?category=${data.data.category?._id}`
    );
    setproducts(api2.data.data);
  }

  function scrollUp() {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    getDetails(id);
  }, [id]);

  return (
    <>
      {productDetails ? (
        <>
          <div className="grid my-8 grid-cols-1 gap-8  md:grid-cols-3 md:items-center md:align-middle md:justify-items-center">
            <div className="imgs md:w-2/3 md:justify-self-end">
              <Slider {...settings}>
                {productDetails.images?.map((image, index) => (
                  <img
                    key={index}
                    className="w-full mb-6"
                    src={image}
                    alt={productDetails.title}
                  />
                ))}
              </Slider>
            </div>
            <div className="info md:w-3/4 md:ps-4 md:col-span-2 md:justify-self-start">
              <div>
                <h2>{productDetails.title}</h2>
                <p className="my-3 text-gray-500">
                  {productDetails.description}
                </p>
                <h3>{productDetails.category?.name}</h3>
                <div className="flex justify-between items-center my-3">
                  <h3>{productDetails.prise}EGP</h3>
                  <span>
                    <i className="fa-solid fa-star rating-color"></i>
                    {productDetails.ratingsAverage}
                  </span>
                </div>
                <button
                  onClick={() => addProductToCart(productDetails.id)}
                  className="bg-green-500 btn w-full p-2 rounded text-white btn"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-3xl py-6">Realted Projects</h2>
          {products.length > 0 && (
            <div className="products">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="product duration-500 cursor-pointer flex flex-col justify-between"
                  >
                    <Link to={`/details/${product.id}`}>
                      <div onClick={() => scrollUp()}>
                        <div>
                          <img
                            src={product.imageCover}
                            className="w-full block"
                            alt={product.title}
                          />
                        </div>
                        <div className="p-2">
                          <h2 className="text-green-600">
                            {product.category.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {product.description
                              .split(" ")
                              .slice(0, 3)
                              .join(" ")}
                          </p>
                          <div className="rating flex justify-between items-center my-2 ">
                            <span>{product.price}EGP</span>
                            <span>
                              <i className="fa-solid fa-star rating-color"></i>
                              {product.ratingsAverage}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <div className="p-2 pt-0">
                      <button
                        onClick={() => addProductToCart(product.id)}
                        className="bg-green-500 w-full p-2 rounded text-white btn"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
