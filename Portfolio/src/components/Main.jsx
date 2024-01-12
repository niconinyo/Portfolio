import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Main = () => {
    return(
        <div id='main'>
            <img className='w-full h-screen object-cover object-center' src="https://i.imgur.com/fWzIxpO.png" alt="" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/60'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-sky-950 hover:saturate-200 hover:blur-[1px]'>Hey I'm Winston Lucas</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-sky-950 hover:saturate-200 hover:blur-[1px]'> 
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Software Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Learner',
                                2000,
                                'Shower Singer',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaInstagram className='cursor-pointer hover:scale-110 ease-in duration-300' size={20} />
                        <FaLinkedinIn className='cursor-pointer hover:scale-110 ease-in duration-300'size={20} />
                        <FaGithub className='cursor-pointer'size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main