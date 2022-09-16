//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import React,{useState} from 'react';

import data from '../data';



//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';

//import { useNavigate } from 'react-router-dom';
//import './pay.css';

function PaymentOpt() {

      
      //const[model, setModel]= useState(false);
      const[tempData,setTempData]=useState([])

  const getData=(img,title,desc,event) =>{
   
    let tempData=[img,title,desc];
    
    setTempData(item =>[1,...tempData]);
    localStorage.setItem("item",tempData[2])
    window.location.assign('/Fpay' );
    event.preventDefault();
    
  }
  //const navigate= useNavigate();
  //const  handleSubmit =(event) =>{
    // event.preventDefault ();
    // navigate('/Fpay');

  //}*/
  return (
  
        <section className='py-4 py-lg-5 container'>
          <div className='col-justify-content-center align-items-center '>
          {data.cardData.map((item,index)=>{
            return(
              <div className='row-11 col-md-6 col-lg-3 mx-0 mb-0' key={index}>
              <div className="card p-0 overflow-hidden h-100 shadow " >
              <img src={item.imgsrc} className="card-img-top" alt='...' />
              <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <button  className="btn btn-primary" onClick={()=> getData(item.imgsrc,item.title,item.desc)}>Buy Now</button>
           </div>
       </div>
     </div>
  )
   })}

         </div>
        </section>
        
    
   
  
    
   
  );
}
  


export default PaymentOpt;