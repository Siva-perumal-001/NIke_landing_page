import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from './Sections/Nav.jsx';
import Hero from './Sections/Hero.jsx';
import PopularProducts from './Sections/PopularProducts.jsx';
import SuperQuality from './Sections/SuperQuality';
import Services from './Sections/Services';
import SpecialOffer from './Sections/SpecialOffer';
import CustomerReview from './Sections/CustomerReview';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,   // animation triggers only once
      offset: 100,  // better reveal
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);

  }, []);

  return (
    <main className='relative overflow-x-hidden'>
      <Nav/>

      <section className='xl:padding-l wide:padding-r padding-b' data-aos="fade-up">
        <Hero/>
      </section>

      <section className='padding' data-aos="fade-up">
        <PopularProducts/>
      </section>

      <section className='padding' data-aos="fade-up">
        <SuperQuality/>
      </section>

      <section className='padding-x py-10' data-aos="fade-right">
       <Services/>
      </section>

      <section className='padding' data-aos="fade-left">
        <SpecialOffer/>
      </section>

      <section className='bg-pale-blue padding' data-aos="zoom-in">
        <CustomerReview/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full' data-aos="fade-up">
        <Subscribe/>
      </section>

      <section className='bg-black padding-x padding-t pb-8' data-aos="fade-up">
        <Footer/>
      </section>
    </main>
  );
}

export default App;
