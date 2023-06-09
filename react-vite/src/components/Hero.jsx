import { motion } from "framer-motion";

import { styles } from "../styles";
import { Model3DCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FB9A42]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>


        {/* <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}> */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            It's <span className='text-[#FB9A42]'>Spooky</span> Season
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to your <br className='sm:block hidden' />
            decentralized nightmare
          </p>
        </div>
      </div>

      <Model3DCanvas />
        {/* </div> */}

        

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;