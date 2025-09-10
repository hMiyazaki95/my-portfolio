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
            {/*div property on left side */}
            <div>
                <SkillsItem 
                    title="San Francisco State University" 
                    year="2022 - 2024" 
                    description="B.S. in Computer Science. Focused on full-stack development, data structures, and software engineering projects using React, Node, and Python." 
                />

                <SkillsItem 
                    title="Freelance Web developer – Taldea" 
                    year="2025 - Present"
                    description="Build responsive websites and AI-assisted tools for small businesses. Stack: Next.js, Tailwind, Flask, PostgreSQL, Stripe, and AWS."
                />
                
                <SkillsLanguage 
                skill1="html" 
                skill2="css" 
                skill3="javaScript"
                skill4="TypeScript"
                level1="90%" 
                level2="70%" 
                level3="80%"
                level4="80%"/>

            </div>
            {/*div property on the right side */}
            <div>
                <SkillsItem 
                    title="Geopogo" 
                    year="2024 - 2025" 
                    description="Full-stack development for AEC workflows: React/Next UI, Node APIs, S3 integration, and AI features (chatbot + image gen) with CI/CD."
                />
                <SkillsItem title="coming soon" year="coming soon" />

                <SkillsLanguage
                    skill1="Python" 
                    skill2="Agentic AI" 
                    skill3="LLM" 
                    skill4="RAG (Retrieval-Augmented Generation)"
                    level1="70%" 
                    level2="90%" 
                    level3="80%" 
                    level4="70%"
                />
            </div>
            <div>
            
            </div>
        </div>
    </div>
     
  );
};

export default Skills
