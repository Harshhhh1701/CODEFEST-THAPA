import './App.css';
import HeroSection from './components/HeroContent';
import Navbar from './components/Navbar';

function App() {
  return (
    <main className='relative w-full min-h-screen box-border bg-blue-50 font-sans'>
      <Navbar />
      <HeroSection />
    </main>
  );
}

export default App;
