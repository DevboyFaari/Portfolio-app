import "./Works.scss";
import { useState } from "react";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        {
            id: "1",
            icon:"assets/mobile.png",
            title:"Designing",
            desc:"I can translate wireframes to visually compelling websites that is scalable.",
            img:"assets/Neon globe.jpg",
        },
        {
           
            id: "2",
            icon:"assets/mobile.png",
            title:"Backend web Development",
            desc:"Building and maintaining technology that powers components which enable the client side to exist.",
            img:"assets/ee.jpg",
        },
        {
            
            id: "3",
            icon:"assets/mobile.png",
            title:"Front end development",
            desc:"Client side web development with knowledge of HTML, CSS, SaaS, Javascript, as well as frameworks like ReactJS, Bootstrap and GruntJS",
            img:"assets/spiral globe.jpg",
        }
    ]

    const handleClick = (way) =>{
        way === "left"
        ? setCurrentSlide(currentSlide > 0? currentSlide -1 : 2)
        :setCurrentSlide(currentSlide < data.length - 1? currentSlide + 1 : 0);
    };
    return (
        <div className="Works" id="Works">
        <div className="slider" style={{ transform:`translateX(-${currentSlide*100}vw)`}}>
        
            {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
        <img src="assets/arrowb.png"  className="arrow left"  alt="" onClick={()=>handleClick("left")}/>
        <img src="assets/arrowb.png"  className="arrow right"  alt="" onClick={()=>handleClick()}/>
        </div>
    )
}

