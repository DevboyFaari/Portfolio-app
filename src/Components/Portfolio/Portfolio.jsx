import {useEffect, useState} from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
// import {
//     featuredPortfolio,
//     webPortfolio,
//     mobilePortfolio,
//     designPortfolio,
//     contentPortfolio,
//   } from "../../data";


export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData]=useState([]);
    const list = [
        {
            id:"featured",
            title:"Featured",
        },
        {
                id:"design",
                title:"Design",
            },
        {
            id:"web",
            title:"Web",
        },]
        // {
        //     id:"mobile",
        //     title:"Mobile",
        // },
        // {
        //     id:"content",
        //     title:"Content",
        // },
        // ];
        
        
    return (
        <div className="Portfolio" id="Portfolio">
        <h1>Portfolio</h1>
        <ul>
        {list.map((item) => (
            <PortfolioList
            title = {item.title} 
            active={ selected === item.id} 
            setSelected={setSelected}
            id={item.id}
            />
        ))}
            </ul>
       <div className= "container">
           <div className="item">
               <img
                src="assets/Banking app.png"
                 alt="" />
               <h3>UI/UX interface</h3>
           </div>
           <div className="item">
               <img
                src="assets/bank1.png"
                 alt="" />
               <h3>Music app</h3>
           </div>
           <div className="item">
               <img
                src="https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"
                 alt="" />
               <h3>Hero Web design</h3>
           </div>
           <div className="item">
               <img
                src="https://cdn.dribbble.com/users/4095861/screenshots/15467417/media/d6a15c416626f12b31fa5ca1db192572.png?compress=1&resize=1200x900"
                 alt="" />
               <h3>Crypto Wallet App</h3>
           </div>
           <div className="item">
               <img
                src="https://cdn.dribbble.com/users/702789/screenshots/15054318/media/4ea5d492b7b07eebc9528ff960794879.png?compress=1&resize=1200x900" 
                 alt="" />
               <h3>Featured Designs</h3>
           </div>
           <div className="item">
               <img
                src="https://cdn.dribbble.com/users/1387827/screenshots/15466426/media/deb2dca6762cd3610321c98bfccb0b72.png?compress=1&resize=1200x900" 
                 alt="" />
               <h3>Banking App</h3>
           </div>
       </div>
        </div>
    )
}
