/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './images/SavetheOcean.png';
import rectangle from './images/Group 437.svg';
import darkModeTurned from './images/Group 1439.svg';
import about from './images/ABOUT THE.svg';
import project from './images/POJECT.svg';
import arrow from './images/arrow.svg';
import water from './images/water.png';
import delphines from './images/delphines.png';
import fishes from './images/fishes.png';
import gym from './images/gym.svg';
import africapic from './images/africa.svg';
import presentPic from './images/presentation.svg';
import sitters from './images/tolpich.svg';
import arrowLeft from './images/arrowleft.svg';
import arrowRight from './images/arrowRight.svg';
import './App.css';
import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Burger } from './components/Burger';

function App() {
  const pictures = [water, delphines, fishes];

  const [selected, setSelected] = useState(0);
  const [isModal, setIsModal] = useState(false);

  // const modal = useRef();

  const setNextPicture = () => {
    if (selected < pictures.length -1) {
      setSelected(state => state + 1);
    } else {
      setSelected(0);
    }
  };

  const setPrevPicture = () => {
    if (selected > 0) {
      setSelected(state => state - 1);
    } else {
      setSelected(pictures.length - 1);
    }
  };

  if (isModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

  return (
    <body className="max-w-[1760px] last:m-auto last:mt-6 mt-6 px-6">
      {/* <div className={isModal ? 'fixed right-0 top-0 w-[50%] h-[100vh] bg-white z-10' : 'hidden'}>
      123
      </div> */}
      <header>
        <nav className="flex justify-between items-center">
          <a href="#">
            <img src={logo} alt="logo" className='h-[21px] w-[216px] md:h-[38px] md:w-[388px] object-contain' />
          </a>
          <div className='flex gap-5 items-center grow-0'>
            <div className='flex-col hidden lg:flex'>
              <span className='text-[16px] leading-[17px] text-[#101010] font-syncopate'>
                +38 ( 093 ) 123-23-23
              </span>
              <span className='text-[13px] text-greyText leading-[14px] mt-[11px] font-syncopate'>
                Mo-Fri 9:00-18:00
              </span>
            </div>
            <img src={darkModeTurned} alt="darkModeTurned" className='hidden md:block h-[32px] w-[48px]' />
            <img src={rectangle} alt="rectangle" onClick={() => setIsModal(true)}/>
          </div>
        </nav>
        <hr className='my-8 h-px bg-black border-0' />
      </header>
      <Burger isActive={isModal} setIsModal={setIsModal}/>
      <div className='grid lg:grid-cols-12 md:grid-cols-6 grid-cols-2'>
        <div className='lg:col-span-3 md:col-span-6 col-span-2 grid place-content-between gap-5 lg:gap-0'>
          <div className='flex justify-center items-center flex-col'>
            <img src={about} className='md:w-[100vw]' alt='about' />
            <img src={project} className='md:w-[100vw] mt-3' alt='project' />
          </div>
          <hr className='h-px bg-black border-0' />
          <span className='text-black font-bold font-syncopate text-[14px] uppercase'>
            A nice place for powerful slogan
          </span>
          <hr className='h-px bg-black border-0' />
          <span className='font-kyiv leading-[24px] text-[16px]'>
            The purpose of lorem ipsum is to create a natural looking block of text that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
          </span>
          <hr className='h-px bg-black border-0' />
          <div className='flex justify-between items-center'>
            <span className='uppercase font-syncopate font-bold'>our projects</span>
            <img src={arrow} alt="arrow" className='object-contain w-2 h-3' />
          </div>
          <hr className='h-px bg-black border-0' />
          <div className='flex justify-between items-center'>
            <span className='uppercase font-syncopate font-bold'>our stories</span>
            <img src={arrow} alt="arrow" className='object-contain w-2 h-3' />
          </div>
          <hr className='h-px bg-black border-0' />
        </div>
        <div className='col-span-2 md:col-span-6 lg:col-start-4 lg:col-span-12 lg:pl-6 mt-6 lg:mt-0 relative h-[35rem]'>
          <img src={pictures[selected]} alt='water' className='w-[100%] h-[100%] object-cover duration-400 transition-all opacity-1' />
          {/* {pictures.map((item, index) => (
            <img src={item} alt='water' className={selected === index ? 'w-[100%] h-[100%] object-cover duration-400 transition-all opacity-1' : ' hidden'} />
          ))} */}
          <div className='absolute bottom-4 left-4 lg:bottom-8 lg:left-12 flex justify-between gap-4 items-center'>
          <img src={arrowLeft} alt="arrowleft" className='w-[34px] h-[30px] lg:w-[47px] lg:h-[41px] cursor-pointer transition ease-in-out hover:scale-110' onClick={setPrevPicture}/>
          <span className='text-white'><b>{selected + 1}</b>/3</span>
          <img src={arrowRight} alt="arrowright" className='w-[34px] h-[30px] lg:w-[47px] lg:h-[41px] cursor-pointer transition ease-in-out hover:scale-110' onClick={setNextPicture}/>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h2 className='uppercase font-syncopate font-bold text-[24px]'>
          Latest News
        </h2>
        <div className='grid grid-flow-col justify-between gap-5 overflow-x-auto pb-10 scrollbar scrollbar-thumb-[#101010] scrollbar-track-gray-100'>
          <article className='w-[288px] xl:w-[400px] border-2 border-black object-fill'>
            <img src={gym} alt='gym' className='w-[100%] h-[167px] object-cover'/>
            <div className='p-4'>
              <h3 className='uppercase font-syncopate font-bold text-[17px] leading-[17px] mb-[4px]'>
                WHAT IS GYM?
              </h3>
              <span className='font-kyiv leading-[24px] text-[16px]'>
                The Global Youth Mentor Program gives motivated Youth Leaders the tools and support to create lasting systemic change in their communities.
              </span>
            </div>
          </article>
          <article className='w-[288px] xl:w-[400px] border-2 border-black'>
            <img src={africapic} alt='gym' className='object-cover w-[100%] h-[167px]'/>
            <div className='p-4'>
              <h3 className='uppercase font-syncopate font-bold text-[17px] leading-[17px] mb-[4px]'>
              Here is the result of our last project in africa
              </h3>
              <span className='font-kyiv leading-[24px] text-[16px]'>
              The purpose of lorem ipsum is to create a natural looking block of text (sentence,...
              </span>
            </div>
          </article>
          <article className='w-[288px] xl:w-[400px] border-2 border-black'>
            <img src={sitters} alt='gym' className='w-[100%] h-[167px] object-cover'/>
            <div className='p-4'>
              <h3 className='uppercase font-syncopate font-bold text-[17px] leading-[17px] mb-[4px]'>
              Time to change something. There is no time left
              </h3>
              <span className='font-kyiv leading-[24px] text-[16px]'>
              The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.)...
              </span>
            </div>
          </article>
          <article className='w-[288px] xl:w-[400px] border-2 border-black'>
            <img src={presentPic} alt='gym' className='w-[100%] h-[167px] object-cover'/>
            <div className='p-4'>
              <h3 className='uppercase font-syncopate font-bold text-[17px] leading-[17px] mb-[4px]'>
              How can we change the situation with the global warming cleaning the ocean?
              </h3>
              <span className='font-kyiv leading-[24px] text-[16px]'>
              The purpose of lorem ipsum is to create a nat...
              </span>
            </div>
          </article>
        </div>
        <hr className='h-px bg-black border-0 my-6' />
        <div>
          .
        </div>
      </div>
    </body>
  );
}

export default App;
