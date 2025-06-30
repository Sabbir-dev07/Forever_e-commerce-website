import React from 'react'

function NewsletterBox() {
  const onSubmitHandelar =(e)=>{
    e.preventDefault();
    console.log('yo')
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
      <p className='text-gray-400 mt-3'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, alias.</p>

      <form onSubmit={onSubmitHandelar} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3 mt-3'>
        <input className='w-full flex-1 outline-none' required type="email" placeholder='Enter your email' />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
      
    </div>
  )
}

export default NewsletterBox
