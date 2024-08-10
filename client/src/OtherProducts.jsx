import { Link } from "react-router-dom"

function OtherProducts() {
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
        <p className="text-3xl italic font-thin">SAMBA SHOES</p>
        <p className="text-base w-1/2 ">On the turf. In the pedals. Rolling from the skatepark to the city. Men&apos;s adidas Samba shoes dance between sports, defying categories and defining street style.</p>
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