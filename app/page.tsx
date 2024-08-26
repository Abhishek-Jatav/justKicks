import HeroSection from './components/HeroSection';
import Products from './components/Products';
import Partner from "./components/Partner";

export default function Home() {
  return <div>Home
    {/* Hero section */}
    <HeroSection />
    
    {/* Products */}
    <Products/>
    
    {/* Partner section */}
    <Partner/>
  </div>;
}
