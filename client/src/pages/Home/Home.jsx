import Hero from '../../components/Hero/Hero'; 
import Navbar from '../../components/layout/Navbar';
import Marquee from '../../components/Marquee/Marquee';
import Statscards from '../../components/Statscards/statscards';
import Featuredprojects from '../../components/Projects/FeaturedProjects/Featuredprojects';
import HowItWorks from '../../components/HowItWork/Howitworks';
import './home.css'

function Home(){
    return (
        <div className='home'>
            <div className='hero-background'>
            <Navbar />
            <Hero />
        </div>

        <div>
             <Marquee />
             <Statscards />
             <Featuredprojects />
             <HowItWorks />
        </div>
        
        </div>
    );
}

export default Home;