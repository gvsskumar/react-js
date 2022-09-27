import {React,useState} from "react";
import Marquee from "react-fast-marquee";

export function MouseEventsDemo(){
    const [banner,setBanner] = useState('slide.png');
    function StopMarquee(e){
        e.target.start();
    }
    function StartMarquee(e){
        e.target.start();
    }
    function SetImage1(){
        setBanner('slide3.png');
    }
    function SetImage2(){
        setBanner('slide1.png');
    }
    return(
        <div className="container-fluid">
            <header>
                <img onMouseOver={SetImage1} onMouseOut={SetImage2} className="w-100 d-block" alt="" />
            </header>
            <h2>Mouse Events</h2>
            <Marquee   scrollAmount="15" onMouseOver={StopMarquee} onMouseOut={StartMarquee} >
                <img src="speaker.jpg" width="100" height="100" />
                <img src="shoe.jpg" width="100" height="100" />
                <img src="jacket.jpg" width="100" height="100" />
            </Marquee>
        </div>
    )
}