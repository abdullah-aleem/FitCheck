
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useEffect,useState } from 'react';
function Products() {
  const location = useLocation();
  const pathname = location.pathname;
  const lastPart = pathname.substring(pathname.lastIndexOf('/') + 1);

  const categories={"men":{
    mainImage:"https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/promo_fw24_bts_50_off_bh_d_60a60c9be4.mp4",
    subcategories:[{name:"SNEAKERS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/87230f49c8554e09a7149063590c89ca_9366/sambae-shoes.jpg"},{name:"TOPS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e9c3b5e60e9d4c0086406fb28e069c36_9366/marvel-graphic-tee.jpg"},{name:"HOODIES & SWEATSHIRTS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f4d908c6409a45f7888819b03e132a4d_9366/trefoil-essentials-hoodie.jpg"},{name:"PANTS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/98e90ef91aff468b91d363d2366c7279_9366/tiro-24-training-pants.jpg"}],
    subPages:[{name:"SAMBA",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og_ss24_aug_samba_tc_m_d_f50fe2ead0.jpg",description:"One shoe,countless looks."},{name:"DISCOVER THE NEW ADDIDAS ATHLETE PACK",image:"https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/specialtysports_SS_24_olympics_flame_collection_launch_GLPM_teaser_carousel_portrait_d_a415913119.mp4",description:"Made to unite all athletes who share a burning passion to make any moment shine."},{name:"BACK TO SCHOOL STYLES",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_ss24_bts_tcc_m_d_9364d9280a.jpg",description:"Make your entrance with iconic tracksuits, sneakers, and more essentials."},{name:"ADICOLOR",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/orig_fw24_adicolor_august_tcc_m_d_539a2657fa.jpg",description:"Celebrating the iconic 3 stripes."}],
    description:"As a creator, you look for ways to excel and express yourself when and where you can, from reaching for that last rep to evolving your streetwear style. Log miles or tear down the baseline in men's shoes with responsive cushioning. Rep an athletic style off the field in lifestyle apparel born of sport heritage. From athletes to streetwear enthusiasts, adidas men’s clothing and shoes exist to let you go harder, dig deeper, and get the most out of yourself, from the pitch to the street to the road less traveled.",
    last:[["Men's Clothing",
        "T-shirts",
        "Hoodies",
        "Jackets",
        "Shorts",
        "Pants & Joggers"],
        ["Men's Shoes",
    "School Shoes",
    "High Top Sneakers",
    "Classic Sneakers",
    "Slip On Sneakers",
    "All White Sneakers"],[
        "Men's Accessories",
    "Men's School Backpacks",
    "Men's Duffle Bags",
    "Men's Socks",
    "Men's Hats",
    "Men's Headphones"
    ],[
        "Men's Collections",
    "Men's Running",
    "Men's Soccer",
    "Men's Loungewear",
    "Men's Training & Gym",
    "Men's Originals"
    ]]    
  },"women":{
    mainImage:"https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/promo_fw24_bts_50_off_bh_d_60a60c9be4.mp4",
    subcategories:[{name:"SNEAKERS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/87230f49c8554e09a7149063590c89ca_9366/sambae-shoes.jpg"},{name:"TOPS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/b8fe696e6b8a400ba16ddb9a383a3af1_9366/adicolor-neuclassics-tee.jpg"},{name:"PANTS & TIGHTS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/ee6098bb8e8f40b58fbd4e562b6357d5_9366/adicolor-neuclassics-track-pants.jpg"},{name:"MATCHING SETS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/79d4bc7b2149435e8bb742f1ef68a613_9366/adicolor-classics-sst-track-jacket-plus-size.jpg"}],
    subPages:[{name:"SAMBA",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/og_ss24_aug_samba_tc_w_d_06cf97ba66.jpg",description:"One shoe,countless looks."},{name:"DISCOVER THE NEW ADDIDAS ATHLETE PACK",image:"https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/specialtysports_SS_24_olympics_flame_collection_launch_GLPW_teaser_carousel_portrait_d_769ffdd444.mp4",description:"Made to unite all athletes who share a burning passion to make any moment shine."},{name:"BACK TO SCHOOL STYLES",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/xcat_ss24_bts_tcc_w_d_625e627782.jpg",description:"Make your entrance with iconic tracksuits, sneakers, and more essentials."},{name:"ADICOLOR",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/orig_fw24_adicolor_august_tcc_w_d_2d5cd5a917.jpg",description:"Celebrating the iconic 3 stripes."}],
    description:"In sport and in life, creators aren’t content on the sidelines. adidas women’s shoes and apparel are made for those who understand that rules can be negotiated; expectations, evolved. Reach for a new personal best in apparel made of specialized performance fabrics. Accentuate your personal style in sport-inspired sneakers for your day-to-day. Whether sport is your life or you’re an athleisure fashionista, women’s clothing and footwear from adidas exist to help you redefine what’s possible.",
    last:[["Women's Clothing",
        "Sports Bras",
        "Tops",
        "Hoodies",
        "Shorts",
        "Tights & Leggings"],[
            "Women's Shoes",

    "Casual Sneakers",
    "All White Sneakers",
    "Slip On Sneakers",
    "Classic Sneakers",
    "High Top Sneakers",
        ],[
            "Women's Accessories",
            "Women's School Bags",
            "Women's Backpacks",
            "Women's Hats",
            "Women's Headphones",
            "Women's Socks"
        ],[
            "Women's Collections",
            "Plus Size",
            "Yoga & Barre",
            "Running",
            "Training & Gym",
            "Loungewear",  
        ]]    
  },"kids":{
    mainImage:"https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_1920,w_1920/promo_fw24_bts_50_off_bh_d_60a60c9be4.mp4",
    subcategories:[{name:"YOUTH AND TEENS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/12758b08b2a74dc987c7aba4004f2dd7_9366/gazelle-shoes.jpg"},{name:"CHILDREN",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/0f68a77715994273855dce2d2a0c3e19_9366/racer-tr23-shoes-kids.jpg"},{name:"INFANT AND TODLERS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/e5119b00a0324dc28a95c1e559ffc467_9366/gazelle-comfort-closure-elastic-laces-shoes-kids.jpg"},{name:"ALL KINDS",image:"https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d32327918ae146278ba98035a704ecf3_9366/samba-og-shoes-kids.jpg"}],
    subPages:[{name:"NEW ARRIVALS",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/house_of_tiro_ss24_t_1dc7e3c6b3.jpg",description:""},{name:"LIFESTYLE",image:"https://brand.assets.adidas.com/video/upload/f_auto:video,q_auto/if_w_gt_400,w_400/specialtysports_SS_24_olympics_flame_collection_launch_GLPW_teaser_carousel_portrait_d_769ffdd444.mp4",description:""},{name:"SHOES",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kglp_footwear_3_d_cbd260a3df.jpg",description:""},{name:"FAMILY MATCHING",image:"https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/kglp_minime_4_d_87051c824d.jpg",description:""}],
    description:"Whether they’re big kids playing in a weekend tournament or little ones mastering the monkey bars, being a young creator is all about having fun while playing hard. Find girls’ and boys’ shoes to support both their game and their style. Boys’ and girls’ clothing and shoes from adidas are built to give kids of every age and stage comfort and confidence for everything from first steps to personal bests.",
    last:[[
        "BACK TO SCHOOL",
    "Kids' School Clothing",
    "Kids' School Shoes",
    "School Backpacks",
    "Boys' Back to School",
    "Girls' Back to School"
    ],[
        "KIDS' SHOES",
    "Casual Sneakers",
    "High Top Sneakers",
    "Slides & Sandals",
    "Cleats",
    "Boots"
    ],[
        "KIDS' ACCESSORIES",
    "Socks",
    "Hats",
    "Gloves",
    "Backpacks & Bags",
    "Sunglasses"
    ],[
        "KIDS' CLOTHING",
    "T-shirts",
    "Hoodies & Sweatshirts",
    "Jackets & Coats",
    "Pants & Sweats",
    "Track Suits"
    ]]    
  }}  


  const [detail,setDetail]=useState(categories["men"])


  useEffect(() => {
    console.log(lastPart)   
    if(lastPart==="men"){
        setDetail(categories['men'])
    }else if(lastPart==="women"){
        console.log("howww")
        setDetail(categories["women"])
    }else if(lastPart==="kids"){
        setDetail(categories["kids"])
    }
  },[lastPart]);

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
            <video 
        src={detail.mainImage} // Replace with the correct video path
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
                        <button className='bg-white px-3 py-1 border-black border hover:text-gray-500'> SHOP MEN  &rarr;</button>
                        <button className='bg-white px-3 py-1 border-black border hover:text-gray-500'> SHOP WOMEN  &rarr;</button>
                        <button className='bg-white px-3 py-1 border-black border hover:text-gray-500'> SHOP KIDS  &rarr;</button>
                    </div>
                </div>
            </div>
            <div className='flex  gap-6 justify-center pt-16 pb-8'>
                <div className=' bg-custom-white flex justify-center items-center w-1/5  flex-col    '>
                    <img className="object-contain h-52 " src={detail.subcategories[0].image} />
                    <p className='underline py-4 text-sm'>
                        {detail.subcategories[0].name}
                    </p>
                </div>
                <div className=' bg-custom-white flex justify-center items-center w-1/5  flex-col    '>
                    <img className="object-contain h-52 " src={detail.subcategories[1].image} />
                    <p className='underline py-4 text-sm'>
                        {detail.subcategories[1].name}
                    </p>
                </div>
                <div className=' bg-custom-white flex justify-center items-center w-1/5  flex-col    '>
                    <img className="object-contain h-52 " src={detail.subcategories[2].image} />
                    <p className='underline py-4 text-sm'>
                        {detail.subcategories[2].name}
                    </p>
                </div>
                <div className=' bg-custom-white flex justify-center items-center w-1/5  flex-col    '>
                    <img className="object-contain h-52 " src={detail.subcategories[3].image} />
                    <p className='underline py-4 text-sm'>
                        {detail.subcategories[3].name}
                    </p>
                </div>
               
            </div>
            <div className='flex gap-2 justify-center py-2  '>
                <div className='   w-1/5     '>
                    <img className="w-full" src={detail.subPages[0].image} />
                    
                    <p className='py-2'>{detail.subPages[0].name}</p>
                    <p className='text-sm pb-2'>{detail.subPages[0].description}</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
                <div className='   w-1/5     '>
                <video 
        src={detail.subPages[1].image} // Replace with the correct video path
        className=" w-full"
        autoPlay 
        loop 
        muted 
        playsInline // Ensures the video plays inline on mobile devices
      />
                    <p className='py-2'>{detail.subPages[1].name}</p>
                    <p className='text-sm pb-2'>{detail.subPages[1].description}</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
                <div className='   w-1/5     '>
                    <img className="w-full" src={detail.subPages[2].image} />
                    
                    <p className='py-2'>{detail.subPages[2].name}</p>
                    <p className='text-sm pb-2'>{detail.subPages[2].description}</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
                <div className='   w-1/5     '>
                    <img className="w-full" src={detail.subPages[3].image} />
                    
                    <p className='py-2'>{detail.subPages[3].name}</p>
                    <p className='text-sm pb-2'>{detail.subPages[3].description}</p>
                    <Link className='underline '>Shop Now</Link>
                </div>
               
            </div>
            <div className=''>
                <p className='text-4xl  py-10 px-4'>Top Picks For You...</p>
                <div className="overflow-x-auto mb-5 hide-scrollbar ">
                    <div className='grid  grid-flow-col gap-1 px-2 py-4'>
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