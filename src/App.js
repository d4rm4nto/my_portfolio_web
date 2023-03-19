import BannerSection from './components/BannerSection';
import NavigationBar from './components/NavigationBar'
import './App.css';
import '../src/components/style/landingpage.css'
import AboutMe from './components/AboutMe';
import MyPortfolio from './components/MyPortfolio';
import Skill from './components/Skill';
import Blog from './components/Blog';
import KontakSaya from './components/KontakSaya';
import Footer from './components/Footer';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  return (
    // home
    <div className="bg-slate-900">
      <div className="intro">
        <NavigationBar />
        <BannerSection />
      </div>
      <div className='tentang'>
        <AboutMe />
      </div>
      <div className='bg-slate-800'>
        <MyPortfolio />
      </div>
      <div className=''>
        <Skill />
      </div>
      <div className=''>
        <Blog />
      </div>
      <div className='bg-slate-800'>
        <KontakSaya />
      </div>
      <div className=''>
        <Footer />
      </div>
      {/* home */}

    </div>
  );
}

export default App;
