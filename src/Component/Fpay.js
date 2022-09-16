//import logo from './logo.svg';
//import './App.css';
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);




function Fpay() {


  const itemCost=localStorage.getItem("item")

  const publishableKey =
    'pk_test_51LY4YZEnA0PWnQn4HyivL3OFcZPtADLLrMbq4BZ2PKcHCcmUnlkZvPREh0ubyQl54ktKtyhRkpVXA6WfSEucsDoq005HNfM5ja';
  const [product] = useState({
    name: 'hp Laptop',
  
     //itemCost,
      price: '15',
 });
  //const itemCost=localStorage.getItem("item")
  

  const priceForStripe = product.price* 100;

  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful ',
      
    });
  };
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:5000/payment',
        method: 'post',
        data: {
          amount: product.price * 100,
          token,
        },
      });
      
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };
   //  const itemCost=localStorage.getItem("item")

  

  return (
    <div className="container">
      <h2>Complete React & Stripe payment integration</h2>
      <p>
        <span>Product: </span>
        {product.name}
      </p>
      <p>
        <span>Price: </span>{itemCost}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        description={`Your total is ${itemCost}`}
        token={payNow} 
      />
    </div>
  );
}

export default Fpay;