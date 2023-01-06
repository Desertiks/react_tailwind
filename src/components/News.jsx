import gym from '../images/gym.svg';
import africapic from '../images/africa.svg';
import presentPic from '../images/presentation.svg';
import sitters from '../images/tolpich.svg';

export const News = () => {
    return (
        <div className='mt-3'>
            <h2 className='uppercase font-syncopate font-bold text-[24px]'>
                Latest News
            </h2>
            <div className='grid grid-flow-col justify-between gap-5 overflow-x-auto pb-10 scrollbar scrollbar-thumb-[#101010] scrollbar-track-gray-100'>
                <article className='w-[288px] xl:w-[400px] border-2 border-black object-fill'>
                    <img src={gym} alt='gym' className='w-[100%] h-[167px] object-cover' />
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
                    <img src={africapic} alt='gym' className='object-cover w-[100%] h-[167px]' />
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
                    <img src={sitters} alt='gym' className='w-[100%] h-[167px] object-cover' />
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
                    <img src={presentPic} alt='gym' className='w-[100%] h-[167px] object-cover' />
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
        </div>
    )
};