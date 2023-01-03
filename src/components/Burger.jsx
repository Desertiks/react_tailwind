/* eslint-disable jsx-a11y/anchor-is-valid */
import cross from '../images/cross.svg';
import darkmode from '../images/darkmode.svg';
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';
import facebook from '../images/facebook.svg';


export const Burger = ({ isActive, setIsModal }) => {
    console.log(isActive);
    return (
        <div
            className={!isActive ? "fixed w-[100%] h-[100hv] right-0 top-0 z-10 translate-x-[200%] transition-all" : 
            'fixed w-[80%] md:w-[60%] lg:w-[40%] xl:[30%] h-[100hv] right-0 top-0 z-10 translate-x-[0%] transition-all'}
            onClick={() => setIsModal(false)}>
            <div className="backdrop-blur right-[100%] absolute w-[100vw] h-[100vh]" />
            <div className="w-[100%] h-[100vh] bg-white relative" onClick={(event) => event.stopPropagation()}>
                <img src={cross} alt="cross" className='absolute right-3 top-3' onClick={() => setIsModal(false)} />
                <div className="px-[32px] pb-[38px] flex flex-col justify-between h-[100%]">
                    <ul className='inline-flex flex-col pt-[70px] gap-9 uppercase font-syncopate font-bold text-[20px] leading-[21px]'>
                        <li>
                            <a 
                            href="#" 
                            className="md:text-[32px] md:leading-[33px]">About Us</a>
                        </li>
                        <li>
                            <a 
                            href="#" 
                            className="md:text-[32px] md:leading-[33px]">Our Projects</a>
                        </li>
                        <li>
                            <a 
                            href="#" 
                            className="md:text-[32px] md:leading-[33px]">Stories</a>
                        </li>
                        <li>
                            <a 
                            href="#" 
                            className="md:text-[32px] md:leading-[33px]">Join the team</a>
                        </li>
                    </ul>
                    <div className='inline-flex flex-col'>
                        <img src={darkmode} alt="darkmode" className='w-[48px] h-[32px] md:hidden' />
                        <ul className='uppercase font-syncopate font-bold text-[20px] leading-[21px] flex flex-col mt-[24px]'> 
                            <li className='md:text-[32px] md:leading-[33px]'>
                                Contact Us
                            </li>
                            <li className='text-[14px] leading-[15px] mt-[26px] md:text-[18px] md:leading-[19px]'>
                            +38( 093 ) 123-23-23
                            </li>
                            <li className='text-[12px] leading-[12px] text-[#BEBEBE] font-normal mt-[12px]'>
                            Mo-Fri 9:00-18:00
                            </li>
                            <li className='text-[14px] leading-[15px] mt-[23px] md:text-[18px] md:leading-[19px]'>
                            savetheocean@.org
                            </li>
                            <li className='text-[12px] leading-[12px] text-[#BEBEBE] font-normal mt-[12px]'>
                            for projects and questions
                            </li>
                            <li className='text-[14px] leading-[15px] mt-[23px] md:text-[18px] md:leading-[19px]'>
                            hrsavetheocean@.org
                            </li>
                            <li className='text-[12px] leading-[12px] text-[#BEBEBE] font-normal mt-[12px]'>
                            for jobs
                            </li>
                        </ul>
                        <div className='flex gap-[32px] mt-[39px]'>
                        <img src={facebook} alt="facebook" />
                        <img src={instagram} alt="instagram" />
                        <img src={telegram} alt="telegram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}