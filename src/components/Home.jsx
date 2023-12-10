import { useNavigate } from "react-router-dom"

const Home = () =>{

    const navigate = useNavigate()

    return <>
  
    <nav className="navhome">
        <div className="homebar-container">
        <img src="./public/logo.png" alt="logo" />
        <div className="menu">
        <h3 className="item" onClick={()=>navigate('/history')} >01. HISTORY</h3>
        <h3 className="item" onClick={()=>navigate('/team')}>02. TEAM</h3>
        </div>
       
        </div>
        
    </nav>
    <div className="hero">
        <img src="./public/home.jpg" alt="" />
    </div>
    
    
    
    
    </>
}

export default Home