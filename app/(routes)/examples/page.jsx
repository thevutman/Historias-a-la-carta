import React from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import ScrollToPlugin from 'gsap/ScrollToPlugin';
// import ScrollSmoother from 'gsap/ScrollSmoother';
// import SplitText from 'gsap/SplitText';
import First from './_components/first';


// gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);
// gsap.registerPlugin(SplitText);
// gsap.registerPlugin(ScrollSmoother);
function Examples() {
  return (
    <div>
      <First></First>
      {/* <div className='h-screen'></div>
      <div className='h-screen'></div>
      <div className='h-screen'></div> */}
    </div>
    // <div id="smooth-wrapper">
    //     <div class="stage text-stone-950" id="smooth-content">
    //         <header class="header fixed left-10 top-6 z-50 flex md:block md:left-6">
    //             <div class="logo text-2xl tracking-tighter">Duda</div>
    //             <a href="#" class="nav-btn w-14 h-7 block -mt-1 mb-14 md:mt-4 md:-mr-1">
    //                 <svg class="nav-btn__svg w-14 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 30">
    //                     <rect class="nav-rect" width="40" height="2" x="8" y="8" fill="#242423" />
    //                     <rect class="nav-rect" width="40" height="2" x="8" y="14" fill="#242423" />
    //                     <rect width="40" height="2" x="8" y="20" fill="#242423" />
    //                 </svg>
    //             </a>
    //         </header>

    //         <section class="intro slide--0 h-screen relative p-8 bg-indigo-100 overflow-hidden" id="slide-0">
    //             <div class="intro__content absolute right-10 bottom-16 z-30 md:right-auto">
    //                 <h1 class="intro__title text-7xl overflow-hidden -tracking-wider pr-6 md:mb-7">Duda</h1>
    //                 <p class="intro__txt max-w-screen-sm ml-12 md:max-w-screen-md md:ml-6">Duda is going from strength to strength. Whether it’s in the prestigious gallery in the new World Trade Centre in New York or at an international art fair in Chicago or Hong Kong, people recognize the original response to life in Duda’s work, and go away feeling animated and energized by his vibrant creations.</p>
    //             </div>
    //             <img class="intro__img intro__img--1 absolute w-1/3 max-w-96 h-auto md:w-2/3 z-20 left-8 bottom-16 md:left-1/2 md:bottom-1/2" src="https://assets.codepen.io/61488/duda-intro-1.jpg" />
    //             <img class="intro__img intro__img--2 absolute w-1/3 max-w-96 h-auto md:w-2/3 z-10 left-10 bottom-20 md:left-3/4 md:bottom-2/3" src="https://assets.codepen.io/61488/duda-intro-2.jpg" />
    //         </section>

    //         <section class="slide slide--1" id="slide-1">
    //             <div class="col col--1">
    //                 <div class="col__content col__content--1">
    //                     <h2 class="col__content-title"><span class="line__inner">Mono</span><br /><span class="line__inner">No. 1</span></h2>
    //                     <div class="col__content-wrap">
    //                         <p class="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
    //                         <a href="#" class="slide-link">
    //                             <div class="slide-link__circ"></div>
    //                             <div class="slide-link__line"></div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="#slide-2" class="slide__scroll-link">
    //                     <div class="slide__scroll-line"></div>
    //                 </a>
    //             </div>
    //             <div class="col col--2">
    //                 <div class="col__image-wrap">
    //                     <img class="img img--1" src="https://assets.codepen.io/61488/duda-1.jpg" />
    //                 </div>
    //             </div>
    //         </section>

    //         <section class="slide slide--2" id="slide-2">
    //             <div class="col col--1">
    //                 <div class="col__content col__content--2">
    //                     <h2 class="col__content-title"><span class="line__inner">Look</span><br /><span class="line__inner">No. 2</span></h2>
    //                     <div class="col__content-wrap">
    //                         <p class="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
    //                         <a href="#" class="slide-link">
    //                             <div class="slide-link__circ"></div>
    //                             <div class="slide-link__line"></div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="#slide-3" class="slide__scroll-link">
    //                     <div class="slide__scroll-line"></div>
    //                 </a>
    //             </div>
    //             <div class="col col--2">
    //                 <div class="col__image-wrap">
    //                     <img class="img img--1" src="https://assets.codepen.io/61488/duda-2.jpg" />
    //                 </div>
    //             </div>
    //         </section>

    //         <section class="slide slide--3" id="slide-3">
    //             <div class="col col--1">
    //                 <div class="col__content col__content--3">
    //                     <h2 class="col__content-title"><span class="line__inner">Zombie</span><br /><span class="line__inner">No. 3</span></h2>
    //                     <div class="col__content-wrap">
    //                         <p class="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
    //                         <a href="#" class="slide-link">
    //                             <div class="slide-link__circ"></div>
    //                             <div class="slide-link__line"></div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="#slide-4" class="slide__scroll-link">
    //                     <div class="slide__scroll-line"></div>
    //                 </a>
    //             </div>
    //             <div class="col col--2">
    //                 <div class="col__image-wrap">
    //                     <img class="img img--1" src="https://assets.codepen.io/61488/duda-3.jpg" />
    //                 </div>
    //             </div>
    //         </section>

    //         <section class="slide slide--4" id="slide-4">
    //             <div class="col col--1">
    //                 <div class="col__content col__content--4">
    //                     <h2 class="col__content-title"><span class="line__inner">Jimi</span><br /><span class="line__inner">No. 4</span></h2>
    //                     <div class="col__content-wrap">
    //                         <p class="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
    //                         <a href="#" class="slide-link">
    //                             <div class="slide-link__circ"></div>
    //                             <div class="slide-link__line"></div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="#slide-5" class="slide__scroll-link">
    //                     <div class="slide__scroll-line"></div>
    //                 </a>
    //             </div>
    //             <div class="col col--2">
    //                 <div class="col__image-wrap">
    //                     <img class="img img--1" src="https://assets.codepen.io/61488/duda-4.jpg" />
    //                 </div>
    //             </div>
    //         </section>

    //         <section class="slide slide--5" id="slide-5">
    //             <div class="col col--1">
    //                 <div class="col__content col__content--5">
    //                     <h2 class="col__content-title"><span class="line__inner">Exit</span><br /><span class="line__inner">No. 5</span></h2>
    //                     <div class="col__content-wrap">
    //                         <p class="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
    //                         <a href="#" class="slide-link">
    //                             <div class="slide-link__circ"></div>
    //                             <div class="slide-link__line"></div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="#slide-6" class="slide__scroll-link">
    //                     <div class="slide__scroll-line"></div>
    //                 </a>
    //             </div>
    //             <div class="col col--2">
    //                 <div class="col__image-wrap">
    //                     <img class="img img--1" src="https://assets.codepen.io/61488/duda-5.jpg" />
    //                 </div>
    //             </div>
    //         </section>

    //         <section class="slide slide--6" id="slide-6">
    //             <div class="col col--1">
    //                 <div class="col__content col__content--6">
    //                     <h2 class="col__content-title"><span class="line__inner">Smart</span><br /><span class="line__inner">No. 6</span></h2>
    //                     <div class="col__content-wrap">
    //                         <p class="col__content-txt">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.</p>
    //                         <a href="#" class="slide-link">
    //                             <div class="slide-link__circ"></div>
    //                             <div class="slide-link__line"></div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <a href="#slide-7" class="slide__scroll-link">
    //                     <div class="slide__scroll-line"></div>
    //                 </a>
    //             </div>
    //             <div class="col col--2">
    //                 <div class="col__image-wrap">
    //                     <img class="img img--1" src="https://assets.codepen.io/61488/duda-6.jpg" />
    //                 </div>
    //             </div>
    //         </section>

    //         <footer class="footer" id="slide-7">
    //             <a class="footer__link" href="http://www.duda.ie/" target="_blank">duda.ie</a>
    //             <a class="footer__link-top" href="#slide-0">Top<span class="footer__link-top-line"></span></a>
    //             <p class="footer__copyright">All images © 2020 Dave Uda</p>
    //         </footer>
    //     </div>
    // </div>
  )
}

export default Examples