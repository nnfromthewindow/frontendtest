import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const HomeLayout = () =>{
    return(
        
        <section className='home_layout'>
   
            <div className="outlet">
                <Outlet/>
            </div>
            <Footer/>
        </section>
        
        )
}
export default HomeLayout