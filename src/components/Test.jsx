import React from 'react'
import FeatureCard from './Features/FeatureCard'

const Test = ({services}) => {
  return (
    <div>
      {/* <h2 className='text-3 xl'>{test.heading}</h2> */}
      <FeatureCard services={services}/>
    </div>
  )
}

export default Test;
