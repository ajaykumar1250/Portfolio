import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"StarWars React Project",
        img:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
        desc:"A react Application that fetches your favourite star wars characters along with their details from a Rest API.",
        link: "https://github.com/ajaykumar1250/ReactProjectStarWars",
    },
    {
        id:2,
        title:"Movie Land React Project",
        img:"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"A react application that works as a online movie library, showing results for matching movie names based on our search.",
        link: "https://github.com/ajaykumar1250/MovieLandReactJS",
    },
    {
        id:3,
        title:"Social Media Django Application",
        img:"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"A social media application with User login, media upload, like and follow functionality using Django.",
        link: "https://github.com/ajaykumar1250/django-201",
    },
    {
        id:4,
        title:"StarWars JQuery Application",
        img:"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"A Jquery application that fetches random star wars characters from rawcdn API with their information and picture.",
        link: "https://github.com/ajaykumar1250/JQueryProject_StarWars",
    },
    {
        id:5,
        title:"AWS End to End Pipeline Project",
        img:"https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"Deployed a flaskapp on AWS with login functionality and word counter functionality.",
        link: "https://github.com/ajaykumar1250/CloudComputingAssignment2",
    },
    {
        id:6,
        title:"SE Landing Page Clone",
        img:"https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc:"A replica of Schneider Electric's landing Page using HTML and CSS.",
        link: "https://github.com/ajaykumar1250/ShopClone",
    },
]

const Single = ({item}) => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({ 
        target : ref, 
    })

    const y = useTransform(scrollYProgress, [0,1], [-300,300])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>  
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <button>See More</button>
                        </a>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({ 
        target : ref, 
        offset:["end end", "start start"],
    })
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="portfolio" ref = {ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
}

export default Portfolio;
