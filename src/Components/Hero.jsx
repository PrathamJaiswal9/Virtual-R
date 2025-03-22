import { Link } from 'react-router-dom'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20 '>
       <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center
        tracking-wide hover:scale-110 transition duration-500'
       >
        Virtual R build tools
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 
        bg-clip-text text-transparent lg:block'>
          {" "}
          for developers    
        </span> 
       </h1>

       <p className='mt-10 text-lg text-neutral-500 text-center max-w-4xl'
       > Empower your creativity and bring your VR ideas to life 
        with out intiuitive development tool. Get started today and turn
        your imagination into immersive reality! </p>       

        <div className='flex justify-center my-10 '>
            <Link to={"#"} className='bg-gradient-to-r from-orange-500 
            to-orange-800 py-3 px-4 mx-3 rounded-xl
            hover:scale-110 transition duration-150'>
               Start for free
            </Link>

            <Link to={"#"} className='py-3 px-4 mx-3 rounded-xl border
            hover:scale-110 transition duration-150'>
               Documentation
            </Link>
        </div>

        <div className='flex mt-10 justify-center'>
            <video className='rounded-xl w-1/2 border border-orange-700
            shadow-orange-400 mx-2 my-4 ' autoPlay loop muted>

                <source src={video1} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            <video className='rounded-xl w-1/2 border border-orange-700
            shadow-orange-400 mx-2 my-4 ' autoPlay loop muted>

                <source src={video2} type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>

    </div>
  )
}

export default Hero
