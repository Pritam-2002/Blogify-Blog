import React from 'react'
import {Button}  from"./index"

function Landing() {
  return (
    <>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-15 items-center justify-center flex-col">
   
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl lg:text-5xl text-3xl mb-4 font-bold text-gray-900">Where developer blogs meet community power!</h1>
      <p className="mb-8 text-base font-medium leading-relaxed px-10">Create and grow your developer blog, newsletter, or team engineering blog effortlessly with Hashnode. Level up your writing using powerful AI features!</p>
      <div className="flex justify-center">
        <Button className="border-0 py-2 px-6  hover:bg-[#7368d6e4] rounded text-lg">Enter the World</Button>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Landing