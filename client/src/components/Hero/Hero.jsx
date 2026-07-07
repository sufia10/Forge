import './hero.css'
import {Plus, Flame, ArrowRight, CircleCheck} from "lucide-react";

function Hero(){
    return(
        <section className = "hero">

        <div className ='hero-content'>
            
            <div className="hero-para">
                <p>
                    <Flame size={18} />
                    12,847 projects and counting
                </p>
            </div>
            
            <div className = "hero-main"> 
                <h1 className="heading-highlight"> Discover Projects <span>Built by Developers</span>

                </h1>

               <p className="h-paragraph"> 
                The developer community for discovering, 
                sharing, and showcasing software projects.
                 Find inspiration, get feedback, 
                 and connect with builders who ship.
               </p>

            <div className = "hero-btn">
                <button className="cta-btn"> 
                    <Plus size={18} />
                    Submit Your Project 
                </button>

                <button className= "sec-btn"> 
                    Explore Projects
                    <ArrowRight size={18} />
                </button>
             </div>

            <div className = "hero-stats"> 

                <div className="stats-one">
                <CircleCheck size={17} />
                <p> 8,392 developers</p>
                </div>

                <div className="stats-two">
                <CircleCheck size={17} />
                <p> 340+ tech stacks</p>
                </div>

                <div className="stats-three">
                <CircleCheck size={17} />
                <p> 1.2M total upvotes </p>
                </div>
            
            </div>
            </div>
                </div>
            
           
        </section>
     
    );
}


export default Hero;