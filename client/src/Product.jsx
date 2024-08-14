import {useContext, useEffect,useState} from 'react'
import { UserContext } from './CartContext'
import { useLocation } from 'react-router-dom'


function Product() {
    const {cart,setCart}=useContext(UserContext)
    const [product,setProducts]=useState([])
    const location = useLocation();
    const pathname = location.pathname;
    const lastPart = pathname.substring(pathname.lastIndexOf('/') + 1);

  // const product={
  //   "id": 1,
  //   "name": "Samba Classic Shoes",
  //   "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg",
  //   "price": "$90",
  //   "subcategory": "Orignals",
    
  // }
  useEffect(()=>{
    window.scrollTo(0, 0)
    fetch("http://localhost:3000/getSingleProduct", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id:lastPart,
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
      setProducts(data)
    })
    .catch(error => {
      // Handle any errors that occur
      console.error("There was a problem with the fetch operation:", error);
    });
  },[cart])
  const handleClick=()=>{

    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].id, "====" ,product.id)
        if (cart[i].id === product.id) {
            let x=cart
            x[i].pieces += 1
            alert("Item added to cart")
            console.log(cart)
            setCart(x)
            return
        }
       

        
    }
    let y={"id":product.id,"name":product.name,"price":product.price,"pieces":1,"image":product.image}
    window.alert("Item added to cart")

    setCart((prev)=>[...prev,y])
  }
    return (
    <div>
        <div className="flex justify-center">
            <div className="w-1/2 h-custom  flex gap-1">
            <img className="object-contain h-full w-full" src={product.image} alt="Samba Classic Shoes" />
            <img className="object-contain h-full w-full" src={product.secondayImage} alt="Samba Classic Shoes" />
            </div>
            <div className="w-1/2 flex flex-col justify-around">
            <div className=" px-10">
            <h1 className="text-5xl">{product.name}</h1>
            <h1 className="text-xl text-gray-500">{product.subCategory}</h1>
            <h2 className="text-lg">${product.price}</h2>
            <h3>{product.subcategory}</h3>
            </div>
            <div className='px-10'>
            <button className="px-4 py-2 bg-yellow-400 inline-block " onClick={handleClick}>
                Add to Cart &rarr;
            </button>
            </div>
           
            </div>
        </div>
    </div>
  )
}

export default Product