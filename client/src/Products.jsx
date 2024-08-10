
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
                        <button className='bg-white px-3 py-1 border-black border hover:text-gray-500'> SHOP MEN  &rarr;</button>
                        <button className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP WOMEN  &rarr;</button>
                        <button className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP KIDS  &rarr;</button>
                    </div>
                </div>
            </div>
            <div className='flex  gap-6 justify-center pt-16 pb-8'>
                <div className=' bg-custom-white flex justify-center items-center w-1/5  flex-col    '>
                    <img className="object-contain h-52 " src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3deab9d8554c4fd8897c5c2243ff398f_9366/trefoil-essentials-hoodie.jpg" />
                    <p className='underline py-4 text-sm'>
                        SNEAKERS
                    </p>
                </div>
                <div className='bg-custom-white flex justify-center items-center w-1/5  flex-col   '>
                    <img className="object-contain  h-52" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3deab9d8554c4fd8897c5c2243ff398f_9366/trefoil-essentials-hoodie.jpg" />
                    <p  className='underline py-4 text-sm'>
                        TOPS
                    </p>
                </div>
                <div className='bg-custom-white flex justify-center items-center w-1/5  flex-col   '>

                    <img className="object-contain h-52" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3deab9d8554c4fd8897c5c2243ff398f_9366/trefoil-essentials-hoodie.jpg" />
                    <p  className='underline py-4 text-sm'>
                        HOODIES
                    </p>
                </div>
                <div className='bg-custom-white flex justify-center items-center w-1/5  flex-col   '>
                    <img className="object-contain h-52" src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/3deab9d8554c4fd8897c5c2243ff398f_9366/trefoil-essentials-hoodie.jpg" />
                    <p  className='underline py-4 text-sm'>
                        PANTS
                    </p>
                </div>
               
            </div>
            <div className='flex gap-2 justify-center py-2  '>
                <div className='   w-1/5     '>
                    <img className="w-full" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og_ss24_aug_samba_tc_m_d_f50fe2ead0.jpg" />
                    
                    <p className='py-2'>SAMBA</p>
                    <p className='text-sm pb-2'>One show countless looks</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
                <div className='   w-1/5     '>
                    <img className="w-full" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og_ss24_aug_samba_tc_m_d_f50fe2ead0.jpg" />
                    
                    <p className='py-2'>SAMBA</p>
                    <p className='text-sm pb-2'>One show countless looks</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
                <div className='   w-1/5     '>
                    <img className="w-full" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og_ss24_aug_samba_tc_m_d_f50fe2ead0.jpg" />
                    
                    <p className='py-2'>SAMBA</p>
                    <p className='text-sm pb-2'>One show countless looks</p>
                    <Link to={'/product/men/samba'} className="underline">Shop Now</Link>
                </div>
                <div className='   w-1/5     '>
                    <img className="w-full" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og_ss24_aug_samba_tc_m_d_f50fe2ead0.jpg" />
                    
                    <p className='py-2'>SAMBA</p>
                    <p className='text-sm pb-2'>One show countless looks</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
               
            </div>
            <div className=''>
                <p className='text-4xl  py-10 px-4'>Top Picks For You...</p>
                <div className="overflow-x-auto mb-5 hide-scrollbar">
                    <div className='grid  grid-flow-col gap-1 px-2'>
                        {products.map((product, index) => {
                            return (

                                <div key={index} className=' w-80 border-2 border-white hover:border-black group'>
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
            </div>
            <div className='flex justify-center items-center flex-col w-1/2 m-auto text-center'>
                        <p className='text-4xl font-semibold py-4'>
                        MEN’S CLOTHING & SHOES
                        </p>
                        <p className='py-4'>
                        As a creator, you look for ways to excel and express yourself when and where you can, from reaching for that last rep to evolving your streetwear style. Log miles or tear down the baseline in men&apos;s shoes with responsive cushioning. Rep an athletic style off the field in lifestyle apparel born of sport heritage. From athletes to streetwear enthusiasts, adidas men’s clothing and shoes exist to let you go harder, dig deeper, and get the most out of yourself, from the pitch to the street to the road less traveled.
                        </p>
            </div>
          <div className='grid grid-cols-4 m-auto gap-60 p-20'>
                        <div><h1 className='font-semibold mb-4 text-lg '>MEN&apos; CLOTHING</h1>
                        
                        <ul>
                            <li className="hover:underline">T-shirts</li>
                            <li className="hover:underline">Hoodies</li>
                            <li className="hover:underline">Jackets</li>
                            <li className="hover:underline">Shorts</li>
                            <li className="hover:underline">Pants & Joggers</li>
                        </ul>
                        </div>
                        <div> <h1 className='font-semibold mb-4 text-lg '>MEN&apos; SHOES</h1>
                        <ul>
                            <li className="hover:underline">T-shirts</li>
                            <li className="hover:underline">Hoodies</li>
                            <li className="hover:underline">Jackets</li>
                            <li className="hover:underline">Shorts</li>
                            <li className="hover:underline">Pants & Joggers</li>
                        </ul>
                        </div>
                        <div><h1 className='font-semibold mb-4 text-lg '>MEN&apos; ACCESSORIES</h1>
                        <ul>
                            <li className="hover:underline">T-shirts</li>
                            <li className="hover:underline">Hoodies</li>
                            <li className="hover:underline">Jackets</li>
                            <li className="hover:underline">Shorts</li>
                            <li className="hover:underline">Pants & Joggers</li>
                        </ul></div>
                        <div><h1 className='font-semibold mb-4 text-lg '>MEN&apos; COLLECTIONS</h1><ul>
                            <li className="hover:underline">T-shirts</li>
                            <li className="hover:underline">Hoodies</li>
                            <li className="hover:underline">Jackets</li>
                            <li className="hover:underline">Shorts</li>
                            <li className="hover:underline">Pants & Joggers</li>
                        </ul></div>
          </div>

          </div>
  )
}

export default Products