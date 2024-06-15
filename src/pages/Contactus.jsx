import React, { useState } from 'react'
import {Input,Button} from "../components/index"
import {useForm} from "react-hook-form"
import emailjs from '@emailjs/browser';


function Contactus() {
    const[eroor,setError]=useState("")
    const { register,handleSubmit,reset}=useForm()


    const submit=(data)=>{

      const serviceid="contact_service"
      const templateid="template_3uu1edn"
      const publicapikey="mwBDuBS2OdUgMNbo3"
      const {Name,Email,Message}=data
      
      
  const templateParams={
      from_name:Name,
      from_email:Email,
      to_name: "pritam",
      message:Message,
}

emailjs.send(serviceid,templateid,templateParams,publicapikey)

.then((response)=>{
  console.log("email succesfully sent",response)
  reset()
})

.catch((eroor)=>{

  console.log("failed to send mail",eroor);

})

  

    }
  return (
    <div>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7437196962615!2d88.47104497507821!3d22.588686579480182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027559f204bc8b%3A0xe0c538ab4c6a48b0!2sUmang%20Vihar!5e0!3m2!1sen!2sin!4v1711403922049!5m2!1sen!2sin"  style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">NH12, Jatragachhi, Deshbandhu Nagar, Newtown, West Bengal 700156</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">mukherjeep7654321@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">+917477529068</p>
        </div>
      </div>
    </div>


    {/* form section started here */}

    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      {/* <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p> */}
     
     <form onSubmit={handleSubmit(submit)}> 
      <div className="relative mb-4">
        {/* <label for="name" className="leading-7 text-sm text-gray-600">Name</label> */}
        <Input 
        type="text" 
        placeholder="Enter your name here"
         label="Name" 
         className="w-full bg-white rounded border border-gray-300 focus:border-[#3d348b] focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         {
          ...register("Name",{
            required:true,
            
          })
         }
         />
      </div>
      <div className="relative mb-4">
        {/* <label for="email" className="leading-7 text-sm text-gray-600">Email</label> */}
        <Input 
        type="email" 
        label="Email"
        placeholder="Enter your email here"
         className="w-full bg-white rounded border border-gray-300 focus:border-[#3d348b] focus:ring-2  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         {
          ...register("Email",{
            required:true,
            validate: {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
          }
          })
         }
         
         />
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        {
          ...register("Message",{
            required:true
          })
        }
        ></textarea>
      </div>
      <Button className="text-white  border-0 py-2 px-6 focus:outline-none  rounded text-lg">Submit</Button>
      </form>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contactus