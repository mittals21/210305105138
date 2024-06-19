import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import productImage from "../assets/iphone.jpeg"

const Product = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [pageData, setPageData] = useState()

  useEffect(() => {
    setPageData(location?.state?.productData)
  }, [location])

  return (
    <div className="h-screen my-10">
      <p
        onClick={() => navigate(-1)}
        className="cursor-pointer text-5xl absolute hover:text-6xl transition-all duration-100 ease-linear"
      >
        &larr;
      </p>
      <p className="text-center font-bold text-4xl tracking-widest">
        {pageData?.productName}
      </p>
      <div className="flex justify-center items-center">
      <div className="flex flex-col gap-20 mt-20 items-center justify-center mx-10 bg-slate-300 p-8 rounded-lg max-w-fit ">
        <img className="w-[300px] border-black border-[2px] rounded-lg " src={productImage} alt="" />
        <div className="tracking-wider font-semibold text-xl">
          <p>Price: ₹{pageData?.price}</p>
          <p>Rated: {pageData?.rating}/5.0</p>
          <p>Product By: {pageData?.company}</p>
          <p>Provided Discount: ₹{pageData?.discount}</p>
          <p
            className={`${
              pageData?.availability === "yes"
                ? " text-emerald-700"
                : "text-rose-700"
            }`}
          >
            {pageData?.availability}
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Product