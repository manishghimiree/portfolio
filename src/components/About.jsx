import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, reiciendis eius. Autem, at voluptatibus modi voluptates harum minus enim error in consectetur nesciunt assumenda, molestias culpa eveniet? Corrupti, atque quidem!
            </p>

            <br/>

            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi doloribus, asperiores enim recusandae culpa est ea aliquid, omnis quas porro fugit placeat eligendi amet magnam qui adipisci nemo quidem, dolor quia at necessitatibus aperiam saepe? Rerum quam at placeat harum modi! Magni perferendis deserunt laboriosam animi atque adipisci dolor quae.
            </p>
        </div>
    </div>
  )
}

export default About