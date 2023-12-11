import { useNavigate } from "react-router-dom"
import { useRef } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  
    const navigate = useNavigate()
  
    const menuRef = useRef()

    return (
    <nav className="navbar">
        <div className="navbar-box">
            <div className="navbar-container">
                <img src="logo.png" alt="logo" className="navbarlogo" onClick={()=>navigate('/')}/>
                <img src="navbartext.png" alt="textlogo" className="textlogo" onClick={()=>navigate('/')}/>
            </div>
            <div className="menu">
                <h3 className="item" onClick={()=>navigate('/history')} >01. HISTORY</h3>
                <h3 className="item" onClick={()=>navigate('/team')}>02. TEAM</h3>
            </div>
           
        </div>
        <div className="menu-container">
        <div className="menu-icon" >
                <IconButton  aria-label="menu" onClick={()=>{
                    menuRef.current.style.display='block'}}>
                    <MenuRoundedIcon />
                </IconButton> 
            </div>   
        <div className="menu-button" ref={menuRef}>
      
            <h3 className="item-menu" onClick={()=>{navigate('/history')
            menuRef.current.style.display='none'
        }} >01. HISTORY</h3>
            <h3 className="item-menu" onClick={()=>{navigate('/team')
        menuRef.current.style.display='none'}}>02. TEAM</h3>
        </div>
        
        </div>
        
</nav>
  )
}

export default Navbar