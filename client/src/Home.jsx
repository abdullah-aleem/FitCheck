import home from './assets/home.png'
import { Link } from 'react-router-dom'
function Home() {
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
                <img src={home} className='object-cover w-full' />
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
            <div className='w-full h-custom bg-black text-center flex flex-col justify-center items-center gap-8 '>
                <h1 className='text-2xl text-white w-1/2 pt-4' >A leader in athletic performance since 1949</h1>
                <p className='text-white w-1/2'>
                    We&apos;re inspired by athletes. From the very first track spikes Adi Dassler made in his workshop, creating the best gear for the athlete is what drives us to pursue technological breakthroughs and design innovations. Our sneakers and apparel are worn by world-record holders and medal winners, but it&apos;s just as important that road runners, weekend hikers, recreational soccer players, fitness enthusiasts and yogis look to adidas for gear that helps them find their personal best. From adidas Boost, the game-changing cushioning technology, to the world-beating design of Adizero Adios Pro running shoes to Terrex outdoor gear to soccer cleats with unbeatable touch, we&apos;re always iterating, innovating and improving with athletes in mind.

                </p>
                
                <p className='text-white w-1/2 pb-4'>
                    The drive to create the best products for the athlete is why we went back to the drawing board to build the best sports bras in the business. Reimagined and redesigned, our sports bras keep female athletes comfortable and supported, whatever their sport. It&apos;s why we developed period-proof technology to encourage more women to stay in the game. It&apos;s why we partner with designers like Stella McCartney who blur the lines between sport and high fashion, with sportswear that ensures that athletes look and feel great in and out of the gym. Our sneakers and workout clothes are designed to get people moving, so they can live life to the fullest.
                </p>

            </div>
        </div>
    )
}

export default Home