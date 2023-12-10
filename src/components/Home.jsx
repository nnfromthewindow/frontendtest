import { useNavigate } from "react-router-dom"
import { useRef } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from "@mui/material/IconButton";

const Home = () =>{

    const navigate = useNavigate()

    const menuRef = useRef()

    return <>
  <div className="home">
  <nav className="navhome">
        <div className="homebar-container">
            <img src="./public/logo.png" alt="logo" />
            <div className="menu">
                <h3 className="item" onClick={()=>navigate('/history')} >01. HISTORY</h3>
                <h3 className="item" onClick={()=>navigate('/team')}>02. TEAM</h3>
            </div>
           
        </div>      
    </nav>
    <div className="home-menu">
            <div className="home-menu__icon">
                <IconButton aria-label="menu" onClick={()=>{
                    menuRef.current.style.display='block'}}>
                    <MenuRoundedIcon sx={{color:'white'}}/>
                </IconButton> 
            </div>
        <div className="home-menu__button" ref={menuRef}>
                <h3 className="item-menu" onClick={()=>navigate('/history')} >01. HISTORY</h3>
                <h3 className="item-menu" onClick={()=>navigate('/team')}>02. TEAM</h3>
            </div>
    </div>
  
  </div>
    
    
    
    
    
    </>
}

export default Home