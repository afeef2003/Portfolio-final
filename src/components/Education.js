import React, { useRef } from 'react';
import { motion,} from 'framer-motion';
import {useScroll} from 'framer-motion';
import { spring } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {place}
                </span>
                <p className='font-medium w-full mt-2 md:text-sm'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="B.Tech In Computer Science & Engineering "
                        time="2021-2025"
                        place="People's Education Society(P.E.S)"
                        info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Machine Learning, Artificial Intelligence, DeepLearning, Data Science, Data Analysis, DevOps, Cloud Computing, Microprocessor, digital signal and Image Processing, VLSI and  Statistics "
                    />
                    
                    <Details
                        type="Online Coursework / Certification"
                        time="2021-2025"
                        place="Coursera, Udemy, edX and other Online Platforms"
                        info="Completed coursework in advanced topics such as Data Science, Data Analysis, Data Engineering, Machine Learning, Artificial Intelligence, Deep Learning, Cloud computig( AWS, Azure ), Programming Languages, DevOps, Cyber Security, Internet of Things, Linux os, Computer Vision, Natural Language Processing, and Many More  "
                    />
                    {/* Repeat Details component for other entries with different data */}
                </ul>
            </div>
        </div>
    );
};

export default Education;