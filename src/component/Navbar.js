import React , {useState ,useEffect} from 'react';

//icons 
import { FaTimes , FaBars  } from 'react-icons/fa';
import { IoFingerPrintSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons/lib';

//libs
import { Link } from 'react-router-dom';

//conponents
import { Button } from './Button';
//styles
import './Navbar.css';

const Navbar = ()=> {
    const [click ,setClick] = useState(false);
    const [button ,setButton] = useState(true);

    const handleClick = ()=> setClick( !click );
    const closeMobileMenu = ()=> setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true)
        }
    }
 
    window.addEventListener('resize' , showButton)
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
    }, []);

    return (
        <IconContext.Provider value={{color: "#fff"}}>
        <nav className="navbar">
            <div className="navbar-container container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <IoFingerPrintSharp className="navbar-icon"/>
                    MiladFattah
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    { click ?  <FaTimes/> : <FaBars />  }
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu} >
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ?(
                            <Link to="/sign-up" className="btn-link">
                                <Button buttonStyle="btn--outline" >SING UP</Button>
                            </Link>
                        ) : (
                            <Link to="/sign-up" className="btn-link">
                                <Button 
                                    buttonStyle="btn--outline" 
                                    buttonSize="btn--mobile"
                                    onClick={closeMobileMenu}
                                >
                                    SING UP
                                </Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
        </IconContext.Provider>
    )
}

export default Navbar;