import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState} from "react"
function OtherProducts() {
    const [categories,setCategories]=useState([{name:""}])
    useEffect(()=>{
        fetch("http://localhost:3000/getCategories", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name:"",
            }),
          })
          .then(response => {
            // Check if the response is okay
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
          })
          .then(data => {
            // Here you can log the actual data returned from the server
            console.log("These are the products:", data);
            setCategories(data)
          })
          .catch(error => {
            // Handle any errors that occur
            console.error("There was a problem with the fetch operation:", error);
          });
    }
    ,[])
  const products = [
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
    {
        "id": 1,
        "name": "Samba Classic Shoes",
        "price": "$90",
        "subcategory": "Orignals",
        "gender": "male",
        "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg"
    },
]
  return (
    <div className="flex flex-col pt-4 w-5/6 m-auto ">
      <div className="pb-10">
        <p className="text-3xl italic font-thin">{categories[0].name}</p>
        <p className="text-base w-1/2 ">{categories[0].desc}</p>
      </div>
      <div className="border-2 grid grid-cols-1 md:grid-cols-5">
      {products.map((product, index) => {
                            return (

                                <div key={index} className=' w-80 border-2 border-white hover:border-black group transform hover:scale-105 duration-300 transition-transform hover:z-10'>
                                    <Link to={`/product/${product.id}`}>
                                        <div className='relative'>
                                        <img src={product.image} className='object-cover w-full' />
                                        <p className='absolute left-2 px-1 bottom-0 bg-white  group-hover:translate-y-[-0.25rem] transition-transform duration-950'> {product.price}</p>

                                        </div>
                                        <p className='text-md p-2 pb-1'>{product.name}</p>
                                        <p className='text-gray-400 text-sm p-2 pb-4'>{product.subcategory}</p>   
                                    </Link>
                                </div>
                            )

                        })}
      </div>
    </div>
  )
}

export default OtherProducts