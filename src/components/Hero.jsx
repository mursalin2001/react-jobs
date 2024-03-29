import React from 'react'

const Hero = (HeroText) => {
    return (
        <div>

            <div className='flex justify-center items-center flex-col bg-slate-900'>
                <h1 className='text-5xl font-mono text-white mt-20 '>{HeroText.title} </h1>
                <h1 className='text-white mb-20 pt-6'>{HeroText.subTitle}</h1>
            </div>
        </div>
    )
}

export default Hero