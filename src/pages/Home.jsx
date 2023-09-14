import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Slider from '../components/Slider';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='Home'>
    <Header />
    <Welcome />
    <Slider />
    <ContactForm />
    <Footer />
    </div>
  )
}
