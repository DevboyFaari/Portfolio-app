import "./Intro.scss"
import { init } from 'ityped'
import {useEffect, useRef} from "react";


export default function Intro() {

    const textRef=useRef();
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            strings:["MERN stack Developer", "Designer", "Content Creator"],
        });
    }, []);

    return (
        <div className="Intro" id="Intro">
        <div className='left'>
        <div className ='imgContainer'>
        <img src="assets/spiral_globe-removebg-preview.png" alt=""/>    
        </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi there! I am</h2>
                <h1>Faari!</h1>
                <h3>I'm a freelance <span ref={textRef}>Developer</span></h3>
            </div>
            <a href ="#Portfolio">
            <img src="assets/down33-removebg-preview.png" alt="" className="img"/>
            </a>
        </div>
        </div>
    )
}
