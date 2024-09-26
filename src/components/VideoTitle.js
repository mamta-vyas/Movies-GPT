import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[40%] md:pt-[10%] px-6 md:px-36 absolute text-white bg-gradient-to-r from-black">
    <h1 className='text-sm md:text-6xl'>{title}</h1>
      <p className='hidden md:inline-block md:text-sm py-6 w-1/4'>{overview}</p>
      <div className="my-2 md:my-0">
    <button className='bg-white text-black py-0 md:py-4 px-2 md:px-12 w-15 rounded-lg hover:bg-opacity-80'> 
      ▶️ Play
     </button>
    <button className='hidden md:inline-block mx-4 bg-gray-500 text-white p-4 px-12 w-15 text-xl bg-opacity-50 rounded-lg'>
     More Info</button>
     
     </div>
    </div>
  )
}

export default VideoTitle
