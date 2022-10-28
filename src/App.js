import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';

function App() {
  return (
    <main className=''>
      <Navbar />
      <section className='md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
