import React from 'react'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cold-12">
            <div className="col-span-7 place-self-center">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Hello, I'm Kanat
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">
                As a Frontend Developer, I fearlessly embrace challenges, pushing boundaries to create exceptional user experiences. With a bold approach to problem-solving and a willingness to explore new technologies, I tackle complex projects with determination and resilience. My courage extends to taking ownership of my work, fostering collaboration, and adapting to change, ensuring successful outcomes in dynamic environments.
                </p>
            </div>
            <div className="col-span-5"></div>
        </div>
    </section>
  )
}

export default HeroSection