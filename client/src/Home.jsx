import home from './assets/home.png'
function Home() {
  return (
    <div className="w-full flex flex-col">
        <div className='object-contain relative'>
            <img src={home} className='object-cover w-full'/>
            <div className='absolute left-4 top-4'>

            </div>
        </div>
    </div>
  )
}

export default Home