
import { Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
function Layout() {
  return (
   <>
    <Header/>
    <div className='mt-16 lg:mt-40 '>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout