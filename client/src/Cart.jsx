import { UserContext } from "./CartContext"
import { useContext } from 'react'

function Cart() {
    const {cart}=useContext(UserContext)

    return (
    <div className="">
        <h1 className="text-xl p-4 font-semibold">YOUR CART</h1>
        <div className="flex flex-col items-center justify-center">
        {cart.map((item)=>{
            return(
                <div key={item.id} className='flex justify-between items-center border-2 mx-4 h-40  p-4 border-gray-400 m-4 w-1/2'>
                    <div className='flex items-center'>
                        <img className="object-cover h-36" src={item.image}/>
                        <div className="flex flex-col">
                        <span className='font-bold ml-4'>{item.name}</span>
                        <span className='font-bold ml-4'>{item.price}</span>
                        <div>
                            <button className="bg-yellow-400 px-2 m-4">+</button>
                            <span>{item.pieces}</span>
                            <button className="bg-yellow-400 px-2 m-4 ">−</button>
                        </div>
                        </div>
                    </div>
                    <span className='font-bold'>{item.price}</span>
                    <span>Quantity: {item.pieces}</span>
                </div>
            )
        })}
        </div>

    </div>
  )
}

export default Cart