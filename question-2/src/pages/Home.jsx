import React, { useState } from "react"
import productImage from "../assets/iphone.jpeg"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const [company, setCompany] = useState("AMZ")
  const [category, setCategory] = useState("Phone")
  const [rating, setRating] = useState(null)
  const [range, setRange] = useState({ min: 1, max: 10000 })
  const [available, setAvailable] = useState(null)

  const productsForFiltering = [
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      discount: 50,
      company: company,
      availability: "out-of-stock",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.0,
      company: company,
      discount: 50,
      availability: "out-of-stock",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      discount: 50,
      company: company,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      company: company,
      discount: 50,
      availability: "out-of-stock",
    },
    {
      productName: category,
      price: 2253,
      company: company,
      rating: 4.6,
      discount: 50,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 1.1,
      discount: 50,
      availability: "yes",
      company: company,
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      discount: 50,
      company: company,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      company: company,
      discount: 50,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.9,
      discount: 50,
      company: company,
      availability: "out-of-stock",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      discount: 50,
      company: company,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      discount: 50,
      company: company,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 2.8,
      company: company,
      discount: 50,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      company: company,
      rating: 4.6,
      discount: 50,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 4.6,
      company: company,
      discount: 50,
      availability: "out-of-stock",
    },
    {
      productName: category,
      price: 2253,
      rating: 0.5,
      company: company,
      discount: 50,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 2.7,
      discount: 50,
      company: company,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 1.2,
      company: company,
      discount: 50,
      availability: "yes",
    },
    {
      productName: category,
      price: 2253,
      rating: 3.0,
      company: company,
      discount: 50,
      availability: "out-of-stock",
    },
    {
      productName: category,
      price: 2253,
      rating: 1.6,
      company: company,
      discount: 50,
      availability: "yes",
    },
  ]

  const [data, setData] = useState(productsForFiltering)

  const categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ]

  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"]

  const filterData = async () => {
    let finalResponse

    finalResponse = Array.from(productsForFiltering)?.filter(
      (prods) =>
        prods?.price >= Number(range?.min) && prods?.price <= Number(range?.max)
    )

    finalResponse = finalResponse?.map((fr) => {
      return {
        ...fr,
        productName: category,
        company: company,
      }
    })

    if (rating !== null) {
      finalResponse = finalResponse?.filter(
        (prods) => prods?.rating === Number(rating)
      )
    }

    if (available !== null) {
      finalResponse = finalResponse?.filter(
        (prods) => prods?.availability === available
      )
    }

    setData(finalResponse)
  }

  return (
    <div className="py-10">
      <div className="px-10 pb-10">
        <p className="font-bold text-3xl my-5">Filter based on COMPANIES</p>
        <div className="px-5 flex justify-center items-center flex-wrap gap-x-10 gap-y-3">
          {companies?.map((c) => (
            <div key={c} onClick={() => setCompany(c)}>
              <input
                checked={c === company}
                type="radio"
                name="company"
                id={c}
              />
              <label htmlFor={c}>{c}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 pb-10">
        <p className="font-bold text-3xl my-5">Filter based on CATEGORIES</p>
        <div className="px-5 flex justify-center items-center flex-wrap gap-x-10 gap-y-3">
          {categories?.map((c) => (
            <div key={c} onClick={() => setCategory(c)}>
              <input
                checked={c === category}
                type="radio"
                name="categories"
                id={c}
              />
              <label htmlFor={c}>{c}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 pb-10 flex items-center justify-center gap-10">
        <p className="font-bold text-3xl my-5">Filter based on RATING</p>
        <input
          type="number"
          className="border border-black"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>

      <div className="px-10 pb-10 flex items-center justify-center gap-10">
        <p className="font-bold text-3xl my-5">Filter based on PRICE RANGE</p>
        <input
          type="number"
          className="border border-black"
          placeholder="min"
          value={range?.min}
          onChange={(e) =>
            setRange((prev) => ({ ...prev, min: e.target.value }))
          }
        />
        <input
          type="number"
          className="border border-black"
          placeholder="max"
          value={range?.max}
          onChange={(e) =>
            setRange((prev) => ({ ...prev, max: e.target.value }))
          }
        />
      </div>

      <div className="px-10 pb-10 flex items-center justify-center gap-10">
        <p className="font-bold text-3xl my-5">Filter based on AVAILABILITY</p>
        <div onClick={() => setAvailable("yes")}>
          <input type="radio" name="AVAILABILITY" id="available" />
          <label htmlFor="available">available</label>
        </div>
        <div onClick={() => setAvailable("out-of-stock")}>
          <input type="radio" name="AVAILABILITY" id="not_available" />
          <label htmlFor="not_available">not_available</label>
        </div>
      </div>

      <button onClick={filterData}>APPLY FILTERS</button>

      <div className="flex h-screen items-center justify-center flex-wrap gap-20">
        {data?.length === 0 ? (
          <div>No Products Available</div>
        ) : (
          data?.map((d, index) => (
            <div
              onClick={() =>
                navigate(`/${d?.productName}`, { state: { productData: d } })
              }
              key={index}
              className="border rounded-xl shadow-xl p-10 cursor-pointer transition-all duration-200 ease-linear hover:scale-110"
            >
              <div className="relative">
                <img
                  className="rounded-md shadow-md w-[200px]"
                  src={productImage}
                  alt=""
                />
                <p className="absolute bg-[#000000d7] text-white rounded-lg font-semibold tracking-widest text-xs px-3 py-2 -top-4 -right-8">
                  ₹{d?.discount}/- off
                </p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <p className="capitalize font-semibold tracking-wider text-2xl">
                  {d?.productName} {index + 1}
                </p>
                <p className="text-lg tracking-wide font-semibold">
                  ₹{d?.price}
                </p>
              </div>
              <p className="text-sm mt-2">Company: {d?.company}</p>
              <p className="text-sm mt-2">Rated: {d?.rating}/5.0</p>
              <p
                className={`text-lg mt-5 ${
                  d?.availability === "yes"
                    ? "text-emerald-600"
                    : "text-rose-600"
                }`}
              >
                {d?.availability === "yes" ? "Available" : "Out of stock"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home