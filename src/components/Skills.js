import React from 'react'
import {motion} from "framer-motion"


const Skill = ({name, x, y}) => {

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{ x:x, y:y, transition:{duration: 1.5} }}
        
        >
          {name}
        </motion.div>  
    )
}

const Skills = () => {
return (
<>
<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
lg:bg-circularLightLg lg:dark:bg-circularDarkLg
md:bg-circularLightMd md:dark:bg-circularDarkMd
sm:bg-circularLightSm sm:dark:bg-circularDarkSm
'>
      
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
      p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
      '
      whileHover={{scale:1.05}}
      >
        Data Science
      </motion.div>

      <Skill name="Python & Libraries" x="-20vw" y="2vw"/>
      <Skill name="R" x="-5vw" y="-10vw"/>
      <Skill name="SQL" x="20vw" y="6vw"/>
      <Skill name="Julia" x="0vw" y="12vw"/>
      <Skill name="Scala" x="-20vw" y="-15vw"/>
      <Skill name="Java" x="11vw" y="-12vw"/>
      <Skill name="HTML/CSS" x="20vw" y="-5vw"/>
      <Skill name="Javascript" x="0vw" y="-20vw"/>
      <Skill name="C/C++" x="-25vw" y="11vw"/>
      <Skill name="Data Analysis" x="10Vw" y="18vw"/>
      <Skill name="Visualization" x="7vw" y="6vw"/>
      <Skill name="BI Tools" x="-13vw" y="18vw"/>
      <Skill name="Statistical Analysis" x="18Vw" y="13vw"/>
      <Skill name="Data Processing" x="-16vw" y="-6vw"/>
      <Skill name="Data Engg" x="-28vw" y="-10vw"/>
      <Skill name="AI / ML" x="18Vw" y="-18vw"/>
      <Skill name="DeepLearning" x="28Vw" y="-1vw"/>
      <Skill name="Advanced ML" x="-33vw" y="2vw"/>
      <Skill name="MLOps" x="32vw" y="-9vw"/>
      <Skill name="Framworks" x="-8vw" y="-15vw"/>
      <Skill name="Hadoop" x="32vw" y="8vw"/>
      <Skill name="Apache Spark" x="-13vw" y="8vw"/>
      <Skill name="AWS, Azure" x="0vw" y="22vw"/>
      <Skill name="RedShift" x="6vw" y="-5vw"/>
      <Skill name="Kafka, Apache flink" x="-14vw" y="-21vw"/>
      <Skill name="DevOps" x="-31vw" y="-4vw"/>
      <Skill name="Dev. Tools" x="26Vw" y="18vw"/>
      <Skill name="EDA" x="-25vw" y="20vw"/>
      <Skill name="Computer Vision" x="20vw" y="-10vw"/>
      <Skill name="NLP" x="-36vw" y="8vw"/>
      <Skill name="Fast APIs" x="30vw" y="-17vw"/>
      <Skill name="Model Deployment" x="-29vw" y="-19vw"/>
      <Skill name="Agile/Scrum" x="18Vw" y="-23vw"/>
      <Skill name="Solution Design" x="21Vw" y="23vw"/>
      <Skill name="Dashboards designs" x="32vw" y="4vw"/>
      <Skill name="Power BI" x="-11vw" y="-2vw"/>
      <Skill name="Tableau" x="13Vw" y="-1vw"/>
      <Skill name="Docker, Kubernates" x="-32vw" y="16vw"/>
      <Skill name="Git" x="-5vw" y="-5vw"/>
      <Skill name="Business Case Development" x="-14vw" y="14vw"/>
</div>
</>
)
}

export default Skills