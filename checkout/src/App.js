import React from 'react';
import Cart from './Components/Pages/Cart';
import Billing from './Components/Pages/Billing';
import Footer from './Components/Pages/Footer';
import Payment from './Components/Pages/Payment';
export default function App() {
  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>CHECKOUT FORM</h2>
      </div>
      <div className="row">
        <Cart />
        <Billing />
      </div>
      <Payment/>
      <Footer />
    </div>
  );
}

