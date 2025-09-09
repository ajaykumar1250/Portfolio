import "./services.scss"
import {animate, motion, useInView} from "framer-motion"
import {useRef} from "react"

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y:0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})

    return (
        <motion.div 
        className="services" 
        variants={variants} 
        initial= "initial" 
        // animate= "animate"
        // whileInView="animate"
        ref={ref}
        animate={"animate"}
        >
            <motion.div className="textContainer" variants={variants}> 
                <p>I focus on creating efficient 
                    <br /> and user friendly websites.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Brand
                    </h1>
                    <a href="https://github.com/ajaykumar1250?tab=repositories" target="_blank" rel="noopener noreferrer">
                            <button>WHAT WE DO?</button>
                        </a>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Branding</h2>
                    <p>
                        Helping your brand reach its branding goals through innovative designs.
                    </p>
                    {/* <button>Contact at Bottom</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>UI Design</h2>
                    <p>
                        Building UI with latest animations and cutting edge designs.
                    </p>
                    {/* <button>Contact at Bottom</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>WebApps</h2>
                    <p>
                        Building single page WebApps using ReactJS and Django.
                    </p>
                    {/* <button>Contact at Bottom</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Portfolios</h2>
                    <p>
                        Helping you create your personalized portfolios to make you stand out.
                    </p>
                    {/* <button>Contact at Bottom</button> */}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Services;
