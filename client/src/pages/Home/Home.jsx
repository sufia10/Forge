import Hero from '../../components/Hero/Hero';
import Marquee from '../../components/Marquee/Marquee';
import Statscards from '../../components/Statscards/statscards';
import Featuredprojects from '../../components/Projects/FeaturedProjects/Featuredprojects';
import HowItWorks from '../../components/HowItWork/Howitworks';
import Shipmainpage from '../../components/ShipMainpage/Shipmainpage';
import ShipCTA from '../../components/ShipCTA/Shipcta';
import Navbar from '../../components/Global/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './home.css';

function Home() {
    return (
        <div className="home">
    <div className="hero-background">
         <Navbar />
        <Hero />
    </div>

    <div>
        <Marquee />
        <Statscards />
        <Featuredprojects />
        <HowItWorks />
        <Shipmainpage />
        <ShipCTA />
        <Footer />
    </div>
</div>
    );
}

export default Home;