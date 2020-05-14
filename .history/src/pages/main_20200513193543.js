import React, { Component } from 'react';
import {Link} from "react-router-dom";
import '../styleSheets/main.scss';


//import NextPage from "./testLoader";

class main extends Component {

    handleClick(){
        //alert("Hello Hello Hello");
       // return (<NavLink to="/testpage"/>)

    }
    
  render(){
    
    return (
      <div className="App">
      <section class="cards">
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
      </picture>
      <p class="category category__01">Level 1</p>
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__02" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg" alt="" />
      </picture>
      <p class="category category__02">Level 2</p>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__03" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/list-1.svg" alt="" />
      </picture>
      <p class="category category__03">Level 3</p>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__04" src="https://abbeyjfitzgerald.com/wp-content/uploads/2017/10/browser-icon-01.svg" alt="" />
      </picture>
      <p class="category category__04">Product Management</p>
     
    </article>
  
    <article class="card">
      <picture class="thumbnail">
           <img class="category__02" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/camera-1.svg" alt="" />
      </picture>
      <p class="category category__02">Photo Technology</p>
     
    </article>
   
    <article class="card">
      <picture class="thumbnail">
           <img class="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg" alt="" />
      </picture>
      <button ><Link to="/testpage"><p class="category category__01">Cloud Storage</p></Link></button>
      
    </article>
  </section>
  
      </div>
    );
  }
}


export default main;
