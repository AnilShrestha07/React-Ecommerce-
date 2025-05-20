import headphone from "../../assets/images/headphone.webp"
export default function Card(props: Readonly<{productname: string}>){
    return(
        <>
         <div className=" rounded-md mb-4">
              <img src={headphone} alt="Product" className="w-full h-50 object-cover rounded"/>
              <h2 className="mt-2 font-medium text-lg text-teal-700">{props.productname}</h2>
              <p className="text-sm">this is a test ptoduct</p>

              <p className="text-sm text-gray-500 mt-2">Rs 3999</p>
              <button className="mt-2 bg-teal-500 text-white px-3 py-1 rounded hover:bg-teal-600">
                Buy Now
              </button>
            </div>
        </>
    )
}