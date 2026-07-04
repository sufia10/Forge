import './hero.css'

function Hero(){
    return(
        <section className = "hero">
        <div className ='hero-content'>
            <div className="hero-para">
                <p> 12,847 projects and counting</p>
            </div>
            
            <div className = "hero-main"> 
                <h1> Discover Projects Built by Developers

                </h1>

               <p className="h-paragraph"> 
                The developer community for discovering, 
                sharing, and showcasing software projects.
                 Find inspiration, get feedback, 
                 and connect with builders who ship.
               </p>
            <div className = "hero-btn">
                <button> Submit Your Project </button>
                <button> Explore Projects </button>
             </div>

            <div className = "hero-stats"> 
                <p> 8,392 developers</p>
                <p> 340+ tech stacks</p>
                <p> 1.2M total upvotes </p>
            
            </div>
            </div>
                
           </div>
        </section>
     
    );
}


export default Hero;