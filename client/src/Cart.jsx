import { UserContext } from "./CartContext"
import { useContext, useEffect, useState } from 'react'

function Cart() {
    const {cart,setCart}=useContext(UserContext)
    const [total,setTotal]=useState(0)
   
    
    useEffect(()=>{
        let sum=0;
        cart.map(x=>{
            sum=sum+parseFloat(x.price.substring(1))*parseFloat(x.pieces)
        })
        setTotal(sum)
    },[cart])
    
    function addPiece(item){
        let temp=cart.map(x=>{
            console.log(item ,"===",cart)
            if (item==x){
                console.log("hello")
                x.pieces=x.pieces+1;
                return x
            }else{
                return x
            }
             
        })
        setCart(temp)
        console.log(temp)
    }
    return (
    <div className=" flex ">
        
        <div className="flex flex-col items-center justify-center w-2/3">
        <h1 className="text-3xl p-4 font-semibold  w-3/4">YOUR BAG</h1>

        {cart.map((item)=>{
            return(
                <div key={item.id} className='flex justify-between items-center border-2 mx-4 h-60 w-3/4  p-4 border-gray-400 m-4 '>
                    <div className='flex items-center '>
                        <div className="w-1/2 h-60">
                        <img className=" h-full w-full object-contain" src={item.image}/>

                        </div>
                        <div className="flex flex-col">
                        <span className='font-bold ml-4'>{item.name}</span>
                        <span className='font-bold ml-4'>{item.price}</span>
                        <div>
                            <button className="bg-yellow-400 px-2 m-4" onClick={()=>(
                                
                                addPiece(item))}>+</button>
                            <span>{item.pieces}</span>
                            <button className="bg-yellow-400 px-2 m-4 ">−</button>
                        </div>
                        </div>
                    </div>
                    
                </div>
            )
        })}
        </div>
        <div className="flex flex-col items center  w-1/2 justify-around">
            <div className="">
                <p className="text-4xl py-4 font-semibold">YOUR BILL</p>
                <p className="text-xl py-2">Total:</p>
                
                
            </div>
            <div>
            {cart.map(x=>{
                    return(
                        <div key={x.id}>
                        
                        <pre>{x.name}     {x.price} * {x.pieces} =   ${parseFloat(x.price.substring(1) )*parseFloat(x.pieces)}</pre>
                      
                    </div>
                    )
                    
                })}
            <pre>Amount to pay : { total}</pre>
            </div>
            <div>
            <button className="relative px-12 py-3 font-bold text-white bg-yellow-400 border-2 border-yello-400 ">
                    <span className="absolute inset-0 w-full h-full border-2 bg-transparent  border-yellow-400 transform translate-x-2 translate-y-2"></span>
                    <span className="relative  hover:text-gray-500 text-black">CHECKOUT &rarr;</span>
                </button>
            </div>
            </div>
            
        
    </div>
  )
}

export default Cart