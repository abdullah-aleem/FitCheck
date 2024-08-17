import { useState } from 'react'
import addidaslogo from '../assets/Adidass.svg'
import { Link, useNavigate } from 'react-router-dom'


function Header() {
  const [showmenu, setShowMenu] = useState(false)
  const navigate=useNavigate()
  const handleClick=(x)=>{
    setShowMenu(false)
    navigate(x)
  }
  return (
    <>

      <div className='lg:hidden fixed flex justify-between items-center left-0 top-0 z-10 bg-white w-full h-16'>
        <div className='px-2'>
          <buton className="text-black cursor-pointer" onClick={() => { setShowMenu(true) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </buton>
        </div>
        <div>
          <Link to='/' className=''>
            <img src={addidaslogo} className='w-16 h-16 ' />
          </Link>
        </div>
        <div className='flex '>
          <Link className='rounded-full w-6 h-6 mx-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
          <Link className='rounded-full w-6 h-6 mx-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>


          </Link>
          <Link to='/cart' className='rounded-full w-6 h-6 mx-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>

          </Link>

        </div>

      </div>
      <div className='hidden lg:flex absolute left-0 top-0 h-18 w-full  flex-col bg-white'>
        <div className='bg-black w-full py-4 items-center flex justify-center'>
          <p className='text-white text-sm'>Discount on Shopping of more than $200</p>
        </div>
        <div className=' p-2 flex flex-row  justify-between  '>
          <Link to='/' className='lg:mr-16'>
            <img src={addidaslogo} className='w-24 h-24 ' />
          </Link>

          <div className='flex flex-row gap-2 lg:gap-4 text-sm lg:text-base items-end '>
            <Link onClick={()=>{handleClick("product/men")}} className='font-bold border-b-2 border-white hover:border-black '>
              MEN
            </Link>

            <Link to='/product/women' className='font-bold border-b-2 border-white hover:border-black'>
              WOMEN
            </Link>
            <Link to="/product/kids" className='font-bold border-b-2 border-white hover:border-black'>
              KIDS
            </Link>
            <Link to='/product/kids' className='font-bold border-b-2 border-white hover:border-black'>
              BACK TO SCHOOL
            </Link>
            <Link to='/' className='font-thin border-b-2 border-white hover:border-black'>
              SALE
            </Link>
            <Link to='/' className='font-thin border-b-2 border-white hover:border-black'>
              3 STRIPES LIFE
            </Link>
          </div>

          <div className='flex items-end mb-2 mr-8'>
            <div className="relative  ">
              <input
                type="text"
                className="w-full py-1 pr-10 pl-4 border bg-gray-200 text-sm focus:outline-none"
                placeholder="Search..."
              />

              <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

              </div>
            </div>
            <div className='flex h-full items-end mb-1'>
              <Link className='rounded-full w-6 h-6 mx-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </Link>
              <Link className='rounded-full w-6 h-6 mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>


              </Link>
              <Link to='/cart' className='rounded-full w-6 h-6 mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>

              </Link>


            </div>

          </div>

        </div>
      </div>

      <div className={`lg:hidden fixed top-0 left-0 z-10 h-full w-full bg-white transform transition-transform duration-300 ${showmenu ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className='border-b relative top-0 right-0 w-full h-16'>
          <button className='absolute right-0 top-0 p-4' onClick={() => { setShowMenu(false) }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          </button>
          <div className='w-full flex item justify-center'>
            <img src={addidaslogo} className='w-20 h-16 ' />
          </div>
        </div>
        <div className='flex flex-col gap-2 justify-start h-full'>
          <div className='flex flex-col border-b '>
            <div className='w-full py-4 px-8'>
              <button onClick={()=>{handleClick("product/men")}} className='font-bold text-lg '>MEN</button>

            </div>
            <div  className='w-full py-4 px-8'>

              <button onClick={()=>{handleClick("product/women")}} className='font-bold text-lg  '>WOMEN</button>
            </div>
            <div  className='w-full py-4 px-8'>
              <button onClick={()=>{handleClick("product/kids")}} className='font-bold text-lg '>KIDS</button>

            </div>
            <div  className='w-full py-4 px-8'>
              <button onClick={()=>{handleClick("product/backtoschool")}} className=' text-lg  '>BACK TO SCHOOL</button>

            </div>
            <div  className='w-full py-4 px-8'>
              <Link onClick={()=>{handleClick("product/sale")}} className=' text-lg '>SALE</Link>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Header