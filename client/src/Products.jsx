
import { useLocation } from 'react-router-dom';
import men from './assets/menadidas.avif'
import women from './assets/women.avif'
import { Link } from 'react-router-dom'
function Products() {
  const location = useLocation();
  const pathname = location.pathname;
  const lastPart = pathname.substring(pathname.lastIndexOf('/') + 1);
  
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
    <div className="w-full flex flex-col">
            <div className='object-contain relative'>
                <img src={lastPart==="men"?men:women} className='object-cover w-full' />
                <div className='absolute left-12 bottom-12'>
                    <h1 className='text-4xl font-bold text-white mb-8'>BACK TO SCHOOL</h1>
                    <p className='text-white mb-8'>From shoes to tees to backpacks,these <br /> these styles are ready for your first day back.</p>
                    <div className='flex gap-2'>
                        <button className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP MEN  &rarr;</button>
                        <button className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP WOMEN  &rarr;</button>
                        <button className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP KIDS  &rarr;</button>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-4xl font-semibold py-10'>Still Interested?</p>
                <div className="overflow-x-auto mb-5 hide-scrollbar">
                    <div className='grid  grid-flow-col gap-1 '>
                        {products.map((product, index) => {
                            return (

                                <div key={index} className='bg-gray-100 w-80'>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.image} className='object-cover w-full' />
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                        <p>{product.subcategory}</p>
                                    </Link>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>
          

          </div>
  )
}

export default Products