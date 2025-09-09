import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar/>
            <div className='wrapper'>
                <motion.span 
                initial={{opacity:0,scale:0.5}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:0.5}}
                >Ajay Kumar Kodaikal</motion.span>
                <div className="social">
                    <a href='https://www.facebook.com/ajayk1250'><img src="/facebook.png" alt="" /></a>
                    <a href='https://www.instagram.com/ajay.1250/?hl=en'><img src="/instagram.png" alt="" /></a>
                    <a href='https://www.youtube.com/@kodaikalajaykumar3334'><img src="/youtube.png" alt="" /></a>
                    <a href='https://www.linkedin.com/in/ajay-kumar-kodaikal/'><img src="/linkedin.png" alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
