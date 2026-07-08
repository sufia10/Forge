import Hero from '../../components/Hero/Hero'; 
import Navbar from '../../components/layout/Navbar';
import Marquee from '../../components/Marquee/Marquee';
import Statscards from '../../components/Statscards/statscards';
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
        </div>
        
        </div>
    );
}

export default Home;