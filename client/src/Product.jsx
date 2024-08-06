import {useContext} from 'react'
import { UserContext } from './CartContext'


function Product() {
    const {cart,setCart}=useContext(UserContext)

  const product={
    "id": 1,
    "name": "Samba Classic Shoes",
    "price": "$90",
    "subcategory": "Orignals",
    
  }
  const handleClick=()=>{

    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].id, "====" ,product.id)
        if (cart[i].id === product.id) {
            let x=cart
            x[i].pieces += 1
            alert("Item added to cart")
            setCart(x)
            return
        }
       

        
    }
    let y={"id":product.id,"name":product.name,"price":product.price,"pieces":1}
    window.alert("Item added to cart")

    setCart((prev)=>[...prev,y])
  }
    return (
    <div>
        <div className="flex justify-center">
            <div className="w-1/2 h-custom  ">
            <img className="object-contain h-full w-full" src="https://assets.adidas.com/images/w_600,f_auto,q_auto/cc3416c01bff48249f77a7fd012dd9fd_9366/Samba_Classic_Shoes_White_772109_01_standard.jpg" alt="Samba Classic Shoes" />
            </div>
            <div className="w-1/2 flex flex-col justify-around">
            <div className="">
            <h1 className="text-5xl">{product.name}</h1>
            <h2 className="text-lg">{product.price}</h2>
            <h3>{product.subcategory}</h3>
            </div>
            <div>
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