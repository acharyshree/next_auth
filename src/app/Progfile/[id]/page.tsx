import React from 'react'

const page = ( {params}:any) => {
  return (
<div className='flex flex-col h-full w-full items-center justify-center'>

      <p>pofile page of itme  <span className='bg-orange-500 text-black rounded-sm  '>{params.id}</span></p> 

      
    
     
    </div>
  )
}

export default page
