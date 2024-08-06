import { UserContext } from "./CartContext"
import { useContext } from 'react'

function Cart() {
    const {cart}=useContext(UserContext)

    return (
    <div>
        {cart.map((item)=>{
            return(
                <div key={item.id} className='flex justify-between items-center border-b-2 border-gray-200 p-4'>
                    <div className='flex items-center'>
                      
                        <span className='font-bold ml-4'>{item.name}</span>
                    </div>
                    <span className='font-bold'>{item.price}</span>
                    <span>Quantity: {item.pieces}</span>
                </div>
            )
        })}

    </div>
  )
}

export default Cart