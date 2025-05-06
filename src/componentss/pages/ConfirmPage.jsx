import React from 'react'
import thankYou from '/assets/images/icon-thank-you.svg';

const ConfirmPage = () => {
  return (
    <div className='flex flex-col h-full items-center justify-center px-20 gap-5 text-center'>
      <img src={thankYou} alt="" />
      <h1 className='font-ubuntu-bold text-[#02295a] text-3xl'>Thank you!</h1>
      <p className='text-gray-400'>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default ConfirmPage