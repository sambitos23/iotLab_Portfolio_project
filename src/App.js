import About from './component/About';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Project from './component/Project/Project';
import Workspace from './component/WorkSpace/Workspace';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Header />
      <About/>
      <Project/>
      <Workspace/>
      <Blog/>      
      <Footer />
    </div>
  );
}

export default App; 