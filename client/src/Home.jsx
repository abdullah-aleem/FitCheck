
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/getProducts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
            setProduct(data)
        })
        .catch(error => {
            // Handle any errors that occur
            console.error("There was a problem with the fetch operation:", error);
        });
    },[])
   
    return (
        <div className="w-full flex flex-col">
            <div className='object-contain relative'>
            <video 
        src="https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/promo_fw24_bts_50_off_bh_d_60a60c9be4.mp4" // Replace with the correct video path
        className="object-cover w-full"
        autoPlay 
        loop 
        muted 
        playsInline // Ensures the video plays inline on mobile devices
      />
                <div className='absolute left-12 bottom-12'>
                    <h1 className='text-4xl font-bold text-white mb-8'>BACK TO SCHOOL</h1>
                    <p className='text-white mb-8'>From shoes to tees to backpacks,these <br /> these styles are ready for your first day back.</p>
                    <div className='flex gap-2'>
                        <Link to="/product/men" className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP MEN  &rarr;</Link>
                        <Link to="/product/women" className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP WOMEN  &rarr;</Link>
                        <Link to="/product/kids" className='bg-white px-3 py-1 border-black border-2 hover:text-gray-500'> SHOP KIDS  &rarr;</Link>
                    </div>
                </div>
            </div>
            <div className=''>
                <p className='text-4xl font-semibold py-10 px-2'>Still Interested?</p>
                <div className="overflow-x-auto overflow-y-visible mb-5 hide-scrollbar py-4">
                    <div className='grid  grid-flow-col gap-1 auto-cols-max  px-2'>
                        {product.map((product, index) => {
                            return (
                                <div key={index} className='w-80 border-2 border-white hover:border-black group transform hover:scale-105 duration-300 transition-transform hover:z-10'>
                                <Link to={`/product/${product._id}`}>
                                    <div className='relative'>
                                    <img src={product.image} className='object-cover w-full' />
                                    <p className='absolute left-2 px-1 bottom-0 bg-white  group-hover:translate-y-[-0.25rem] transition-transform duration-950'> ${product.price}</p>

                                    </div>
                                    <p className='text-md p-2 pb-1'>{product.name}</p>
                                    <p className='text-gray-400 text-sm p-2 pb-4'>{product.subCategory}</p>   
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