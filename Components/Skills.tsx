import React from 'react'
import SkillsItem from './SkillsItem' // Import the SkillsItem component
import SkillsLanguage from './SkillsLanguage' // Import the SkillsLanguage component

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">
            Education & <span className="text-yellow-400">Skill</span>

        </h1>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
            <div>
                <SkillsItem title="San Francisco State University" year="2022 - 2024" />

                <SkillsItem title="coming soon" year="coming soon"/>
                <SkillsLanguage 
                skill1="html" 
                skill2="css" 
                skill3="javascript" 
                level="90%" 
                level2="70%" 
                level3="80%"/>
            </div>
            <div>
                <SkillsItem title="coming soon"  />
                <SkillsItem title="coming soon" />
                <SkillsLanguage
                skill1="coming soon" 
                skill2="coming soon" 
                skill3="coming soon" 
                level="coming soon" 
                level2="coming soon" 
                level3="coming soon" />
            </div>
            <div>
            
            </div>
        </div>
    </div>
     
  )
}

export default Skills
