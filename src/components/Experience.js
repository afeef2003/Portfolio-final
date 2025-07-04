import React, { useRef } from 'react';
import { motion,} from 'framer-motion';
import {useScroll} from 'framer-motion';
import { spring } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
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
                    {position}&nbsp;
                    <a
                        href={companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-primary dark:text-primaryDark capitalize'
                    >
                        @{company}
                    </a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full mt-2 md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-8 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience</h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Co-founder & Data Scientist"
                        company="GWEN AI"
                        companyLink="https://Gwen.ai.com"
                        time="2024-Present"
                        address="Aurangabad, Mh, India"
                        work="Co-Founded and led Data Scientist at Gwen AI, a company specializing in creating personalized AI for businesses, virtual assistants, smart assistants, chatbots, and comprehensive business solutions. Focused on leveraging AI-driven technologies to enhance customer engagement, streamline operations, and deliver tailored solutions that drive business growth and efficiency."
                    />

                
                    <Details
                        position="Data Scientist Intern"
                        company="Techno Hacks"
                        companyLink="https://technohacks.co.in/"
                        time="2025-2025"
                        address="Remote work"
                        work="Assisted in developing advanced data-driven solutions, including predictive modeling and statistical analysis. Collaborated with cross-functional teams to derive actionable insights from complex datasets and contributed to the optimization of business processes through data analytics."
                    />
                    <Details
                        position="Data Science Intern"
                        company="TechnoHacks"
                        companyLink="https://technohacks.co.in/"
                        time="2024-2024"
                        address="Nashik, Mh, India"
                        work="Independently developed advanced data-driven projects as a Data Science Intern at TechnoHacks, including credit card fraud detection models, social media sentiment analysis, and spam email detection systems. Leveraged predictive modeling, statistical analysis, and machine learning techniques to analyze complex datasets, extract actionable insights, and optimize decision-making processes."
                    />
                    <Details
                        position="Data Science Intern"
                        company="BharatInterns"
                        companyLink="https://bharatintern.live/"
                        time="2023-2023"
                        address="Bhopal, Mp, India"
                        work="Successfully led and developed data-driven projects as a Data Science Intern at Bharat Interns, including a Netflix stock price prediction system and Titanic survival classification model. Leveraged advanced predictive modeling, machine learning, and statistical analysis to extract actionable insights from complex datasets, driving informed decision-making and delivering tangible results."
                    />
                    <Details
                        position="Artificial Intelligence Intern"
                        company="Cognizant"
                        companyLink="https://www.cognizant.com"
                        time="2023-2023"
                        address="Remote work"
                        work="supporting the Data Science team with AI-driven solutions. Performed exploratory data analysis using Python and Google Colab for Gala Groceries, a key client. Created a Python module to streamline model training and performance evaluation for the Machine Learning engineering team. Presented actionable insights and analysis through clear and impactful PowerPoint presentations, aiding strategic business decisions."
                    />
                    <Details
                        position="Data Analytics Intern"
                        company="Accenture"
                        companyLink="https://www.Accenture.com"
                        time="2024-2024"
                        address="Remote work"
                        work="contributing to the Digital Intelligence team through advanced data analysis and modeling. Developed Python classification models, evaluated feature importance, and created visual representations to enhance insights. Produced a comprehensive valuation document by analyzing historical data, forecasting cash flows, and determining portfolio present value. Collaborated on a client’s data strategy proposal, conducting in-depth analysis of medical data for adverse effects, comparing medications, and recommending further investigations to inform strategic decisions."
                    />
                    {/* Repeat Details component for other entries with different data */}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
