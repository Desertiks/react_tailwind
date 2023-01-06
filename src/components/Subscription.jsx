export const Subscription = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <hr className='h-px bg-black border-0 my-10' />
            <form action="GET" className='mt-[56px]' onSubmit={handleSubmit}>
                <div className='font-syncopate font-bold text-[24px] leading-[25px] lg:text-[32px] lg:leading-[33px] uppercase text-center md:mx-[25%]'>
                    Subscribe to receive reports and breaking news from save the ocean team
                </div>
                <div className="md:flex items-end md:px-[10%] w-[100%]">
                <input
                    type="text"
                    placeholder="Email"
                    className="mt-[24px] w-[100%] h-[48px] border-[#C6C6C6] border-solid border-[1px] placeholder:text-black placeholder:pl-3 md:w-[70%]" />
                <input
                    type="submit"
                    value="send"
                    className="mt-[16px] md:mt-[0] md:w-[30%] w-[100%] h-[48px] bg-[#101010] text-[white] font-syncopate font-bold text-[16px] leading-[22px] hover:bg-[#24A9F4] cursor-pointer transition-colors" />
                </div>

            </form>
            <hr className='h-px bg-black border-0 my-10' />
        </>
    )
}