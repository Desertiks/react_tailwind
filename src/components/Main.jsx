
import about from '../images/ABOUT THE.svg';
import project from '../images/POJECT.svg';
import arrow from '../images/arrow.svg';
import arrowLeft from '../images/arrowleft.svg';
import arrowRight from '../images/arrowRight.svg';
import { useState } from 'react';
import water from '../images/water.png';
import delphines from '../images/delphines.png';
import fishes from '../images/fishes.png';

export const Main = () => {

    const pictures = [water, delphines, fishes];

    const [selected, setSelected] = useState(0);

    const setNextPicture = () => {
        if (selected < pictures.length - 1) {
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


    return (
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
            <div className='col-span-2 md:col-span-6 lg:col-start-4 lg:col-span-12 lg:pl-6 mt-6 lg:mt-0 relative md:h-[35rem] h-[300px]'>
                <img src={pictures[selected]} alt='water' className='w-[100%] h-[100%] object-cover transition-all' />
                <div className='absolute bottom-4 left-4 lg:bottom-8 lg:left-12 flex justify-between gap-4 items-center'>
                    <img src={arrowLeft} alt="arrowleft" className='w-[34px] h-[30px] lg:w-[47px] lg:h-[41px] cursor-pointer transition ease-in-out hover:scale-110' onClick={setPrevPicture} />
                    <span className='text-white'><b>{selected + 1}</b>/3</span>
                    <img src={arrowRight} alt="arrowright" className='w-[34px] h-[30px] lg:w-[47px] lg:h-[41px] cursor-pointer transition ease-in-out hover:scale-110' onClick={setNextPicture} />
                </div>
            </div>
        </div>
    )
};