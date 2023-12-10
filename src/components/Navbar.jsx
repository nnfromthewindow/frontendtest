import { useNavigate } from "react-router-dom"

const Navbar = () => {
  
    const navigate = useNavigate()
  
    return (
    <nav className="navbar">
        <div className="navbar-box">
            <div className="navbar-container">
                <img src="./public/logo.png" alt="logo" className="navbarlogo" onClick={()=>navigate('/')}/>
                <img src="./public/navbartext.png" alt="textlogo" className="textlogo" onClick={()=>navigate('/')}/>
            </div>
            <div className="menu">
                <h3 className="item" onClick={()=>navigate('/history')} >01. HISTORY</h3>
                <h3 className="item" onClick={()=>navigate('/team')}>02. TEAM</h3>
            </div>
        </div>
    </nav>
  )
}

export default Navbar