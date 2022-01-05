import "./Topbar.scss"
import {Person, Mail} from "@material-ui/icons"
import { blue } from "@material-ui/core/colors"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"Topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
            <a href="#intro" className="logo">PortFolio Site</a>
           
             <div className="itemContainer">
             <Person className="icon" />
             <span>
                 +234 817 502 4820
             </span>
             </div>

             <div className="itemContainer">
             < Mail className="icon" />
             <a href="faarijoye@gmail.com" target="_blank" alt="Gmail">{<span>faarijoye@gmail.com</span>}</a>

             </div>
             <div>
             <a href="https://www.twitter.com/faarijoye" target="_blank" alt="twitter">
                <img src="assets/twitter.png" style={{width:20, padding:10}}  alt="" />
                </a>
             </div>
             <div>
             <a href="https://www.linkedin.com/in/faari-joye-719855219" target="_blank" alt="linkedin">
                <img src="assets/linkedin.png" style={{width:20, padding:10}}  alt="" />
                </a>
             </div>
              

            </div>
            
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
