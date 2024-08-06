import home from './assets/home.png'
function Home() {
    const products=[
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"Samba.avif"
        },
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"Samba.avif"
        },
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"Samba.avif"
        },
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"Samba.avif"
        },
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"Samba.avif"
        },
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"Samba.avif"
        },
        {
            "name":"Samba Classic Shoes",
            "price":"$90",
            "subcategory":"Orignals",
            "gender":"male",
            "image":"../assets/Samba.avif"
        },
    ]
  return (
    <div className="w-full flex flex-col">
        <div className='object-contain relative'>
            <img src={home} className='object-cover w-full'/>
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
            <p className='text-3xl font-semibold'>Still Interested?</p>
            <div className='grid  grid-flow-col gap-1'>
                {products.map((product,index)=>{
                    return(
                        <div key={index} className='bg-gray-100'>
                        <img src={product.image} className='object-cover w-full'/>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.subcategory}</p>
                    </div>  
                    )
                                  
                        })}
            </div>
        </div>
    </div>
  )
}

export default Home