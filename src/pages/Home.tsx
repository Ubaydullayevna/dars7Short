import React from "react";
import './Home.css'

function Home() {
  return  <div>
  <div className="hero">
    <div className="hero__container container">
       <div className="hero__info">
           <h1 className="hero__title">
               More than just shorter links
           </h1>
           <p className="hero__des">
               Build your brand’s recognition and get detailed insights on how your links are performing.
           </p>
           <button className="hero__button button">
               Get started
           </button>
       </div>
       <div className="hero__img">
           <img 
           src="./images/png/hero-img.png" 
           alt="work with computer"
           width="733"
           height="482"
           />
       </div>
  </div>
   </div>
   {/* <!-- FORM --> */}
   <form className="form__container container" action="https://eco.htmlacademy.ru">
       <div className="form__link">
           <input type="text" placeholder="Shorten a link here..."/>
           <a href="#" className="form__btn">Shorten It!</a>
       </div>
       <div className="shorten-links container">
           <div className="shorten__link">
               <a href="https://www.frontendmentor.io">https://www.frontendmentor.io</a>
                <div>
                   <a  href="https://rel.ink/k4lKyk" className="shorten__section">https://rel.ink/k4lKyk</a>
               <button className="shorten__btn">Copy</button>
                </div>
           </div>
           <div className="shorten__link">
               <a href="https://www.frontendmentor.io">https://www.frontendmentor.io</a>
              <div>
               <a  href="https://rel.ink/k4lKyk" className="shorten__section">https://rel.ink/k4lKyk</a>
               <button className="shorten__btn base">Copied</button>
              </div>
           </div>
           <div className="shorten__link">
               <a href="ttps://www.frontendmentor.io">https://www.frontendmentor.io</a>
              <div>
               <a  href="https://rel.ink/k4lKyk" className="shorten__section">https://rel.ink/k4lKyk</a>
               <button className="shorten__btn">Copy</button>
              </div>
           </div>
       </div>
   </form>
       {/* <!-- FEATURES --> */}
   <div className="features">
       <div className="features__info ">
           <h2 className="features__title">Advanced Statistics</h2>
           <p className="features-des">Track how your links are performing across the web with our advanced statistics dashboard.</p>
       </div>
       {/* <!-- FEATURES-CARD --> */}
       <div className="features__section">
       <div className="container">
           <ul className="feauter-list">
               <div className="card card1">
                   <img 
                   className="card-img" 
                   src="./images/svg/card-img1.svg" 
                   alt="features icon"
                   width="60"
                   height="60"/>
                   <h4 className="card__title">Brand Recognition</h4>
                   <p className="card__des">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
               </div>
               <div className="card  card2">
                   <img 
                   className="card-img" 
                   src="./images/svg/card-img2.svg" 
                   alt="features icon"
                   width="60"
                   height="60"/>
                   <h4 className="card__title">Detailed Records</h4>
                   <p className="card__des">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
               </div>
               <div className="card  card3">
                   <img 
                   className="card-img" 
                   src="./images/svg/card-img3.svg" 
                   alt="features icon"
                   width="60"
                   height="60"/>
                   <h4 className="card__title">Fully Customizable</h4>
                   <p className="card__des">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p> 
               </div> 
           </ul>
       </div>
       
       </div>
   </div>
 <div className="final">
   <div className="final__top">
       <h2 className="final__title">Boost your links today</h2>
       <a className="final__btn button" href="#">Get started</a>
   </div>
 </div>
</div>
  
}

export default Home;
