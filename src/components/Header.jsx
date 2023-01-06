/* eslint-disable jsx-a11y/anchor-is-valid */
import { Toggle } from "../styled/toggle";
import logo from '../images/SavetheOcean.png';
import rectangle from '../images/Group 437.svg';

export const Header = ({ isDark, handleSetDark, setIsModal }) => {
    return (
        <header>
            <nav className="flex justify-between items-center">
                <a href="#">
                    <img src={logo} alt="logo" className='h-[21px] w-[216px] md:h-[38px] md:w-[388px] object-contain' />
                </a>
                <div className='flex xl:gap-9 gap-5 items-center grow-0'>
                    <div className='flex-col hidden lg:flex'>
                        <span className='text-[16px] leading-[17px] text-[#101010] font-syncopate'>
                            +38 ( 093 ) 123-23-23
                        </span>
                        <span className='text-[13px] text-greyText leading-[14px] mt-[11px] font-syncopate'>
                            Mo-Fri 9:00-18:00
                        </span>
                    </div>
                    <div className='hidden md:block'>
                        <Toggle isDark={isDark} onClick={handleSetDark} />
                    </div>
                    <img src={rectangle} alt="rectangle" onClick={() => setIsModal(true)} className='cursor-pointer hover:shadow-bf transition-shadow' />
                </div>
            </nav>
            <hr className='my-8 h-px bg-black border-0' />
        </header>
    )
};