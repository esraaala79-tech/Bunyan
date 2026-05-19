import React from 'react'
import { Outlet } from 'react-router-dom'

 function Developer() {
  return (
<section className='py-4'>
  
  <Outlet/>

</section>
  )
}

export default Developer