import Navbar from './component/Navbar';
import Project from './component/Project/Project';
import Workspace from './component/WorkSpace/Workspace';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer';
import Hero from './component/Hero/Hero';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Project/>
      <Workspace/>
      <Blog/>      
      <Footer />
    </div>
  );
}

export default App; 