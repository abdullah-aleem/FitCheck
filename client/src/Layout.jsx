
import { Outlet} from 'react-router-dom'
import Header from './components/Header'
function Layout() {
  return (
    <>
    <Header/>
    <div className='mt-32 '>
    <Outlet/>
    </div>
    
    </>
  )
}

export default Layout