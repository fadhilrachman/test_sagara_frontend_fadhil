import {Link} from "react-router-dom";
import Logo from '../image/coding.png';



const Navbar = () => {
    return (
        <div className="navbar1">
                <h2>
                    <img src={Logo} alt="" />
                </h2>
               <div className="link">
                   <Link to='/Listnews'>News</Link>
                <Link to='/Login'>Login</Link>
               </div>
            </div>
    )
}

export default Navbar