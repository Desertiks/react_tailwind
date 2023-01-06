import logo from '../images/SavetheOcean.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import telegram from '../images/telegram.svg';

export const Footer = () => {
    return (
        <footer className="w-[100%] bg-[#101010]">
            <div className='max-w-[1760px] last:m-auto last:mt-6 mt-6 px-6 pt-[40px] last:grid grid-cols-12 justify-between items-end'>
                <img src={logo} alt="logo" className='w-[259px] h-[25px] md:w-[388px] md:h-[37px] col-span-3' />
                <div className='col-start-1 col-end-7 flex flex-col justify-between'>
                    <div className='font-syncopate font-bold text-[32px] leading-[33px] mt-[47px] text-[white] md:text-[24px] md:leading-[25px] lg:text-[36px] lg:leading-[37px]'>
                        Subscribe to OUR SOCIAL MEDIA
                    </div>
                    <div className='flex flex-col gap-4 mt-3 md:flex-row md:max-w-[632px] last:mt-[18px]'>
                        <button className='w-[100%] h-[48px] bg-white text-center flex items-center justify-center font-syncopate font-bold text-[16px] leading-[22px] hover:bg-[#24A9F4] transition-colors'>
                            <img src={facebook} alt="facebook" className='mr-[10px]' />
                            Facebook
                        </button>
                        <button className='w-[100%] h-[48px] bg-white text-center flex items-center justify-center font-syncopate font-bold text-[16px] leading-[22px] hover:bg-[#24A9F4] transition-colors'>
                            <img src={instagram} alt="facebook" className='mr-[10px]' />
                            Instagram
                        </button>
                        <button className='w-[100%] h-[48px] bg-white text-center flex items-center justify-center font-syncopate font-bold text-[16px] leading-[22px] hover:bg-[#24A9F4] transition-colors'>
                            <img src={telegram} alt="facebook" className='mr-[10px]' />
                            Telegram
                        </button>
                    </div>
                </div>
                <div className='col-start-7 col-end-13 flex flex-col justify-between'>
                    <div className='font-syncopate font-bold text-[32px] leading-[33px] mt-[47px] text-[white] md:text-[24px] md:leading-[25px] lg:text-[36px] lg:leading-[37px]'>
                        do not hesitate to contact us
                    </div>
                    <div className='flex flex-col font-syncopate uppercase mt-[24px] lg:flex-row justify-between lg:max-w-[832px]'>
                        <div>
                            <div className='font-bold text-[white] text-[18px] leading-[19px] lg:text-[16px] lg:leading-[17px] mt-6 last:mt-0 last:pr-10'>
                                +38( 093 ) 123-23-23
                            </div>
                            <div className='text-[#BEBEBE] text-[13px] leading-[14px] mt-[11px]'>
                                Mo-Fri 9:00-18:00
                            </div>
                        </div>

                        <div>
                            <div className='font-bold text-[white] text-[18px] leading-[19px] lg:text-[16px] lg:leading-[17px] mt-6 last:mt-0'>
                                savetheocean@.org
                            </div>
                            <div className='text-[#BEBEBE] text-[13px] leading-[14px] mt-[11px]'>
                                for projects and questions
                            </div>
                        </div>

                        <div>
                            <div className='font-bold text-[white] text-[18px] leading-[19px] lg:text-[16px] lg:leading-[17px] mt-6 last:mt-0'>
                                hrsavetheocean@.org
                            </div>
                            <div className='text-[#BEBEBE] text-[13px] leading-[14px] mt-[11px]'>
                                for jobs
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='w-full h-[57px] bg-[#1A1A1A] mt-[60px] lg:mt-[80px]' />
        </footer>
    )
};