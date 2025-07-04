import AnimatedText from '@/components/AnimatedText';
import Layout from '../components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePic from "../../public/images/profile/bebo 4.png";
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills'; // Added missing import
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect'; 

const AnimatedNumbers = ({value}) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value); 
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Shamama afeef | About Page</title>
        <meta name="description" content="Learn more about Syeda Shamama Afeef, a Data Scientist and the Co-Founder Gwen AI." />
      </Head>
      <TransitionEffect/>
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I'm Syeda Shamama Afeef, a Data Scientist and the Co-Founder of Gwen AI, where innovation meets intelligence to deliver cutting-edge AI solutions for business needs. 
                I have a passion for uncovering insights, solving complex problems, and creating data-driven solutions that empower decision-making. 
                With 2.5 years of experience in the field, I am constantly seeking innovative ways to transform data into meaningful outcomes.
              </p>
              <p className='my-4 font-medium'>
                I believe that data science is about more than just numbers – it's about telling compelling stories, solving real-world challenges, and driving impactful change.
              </p>
              <p className='font-medium'>
                Whether I'm leading the development of advanced AI systems at Gwen AI, building predictive models, or analyzing trends, I bring my commitment to excellence, precision, and a user-focused mindset to every project I undertake. I look forward to the opportunity to bring my expertise and enthusiasm to your next endeavor.
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-light xl:col-span-4 md:order-1 md:col-span-8'>
              <Image src={profilePic} alt="Afnan Khan" className='w-full h-auto rounded-2xl' 
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center mb-4 xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  projects completed
                </h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={2.5} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}

export default About;