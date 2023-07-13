import React from 'react'

const Filters = () => {
    const filters = ["Clothing","Jewelery","Electronics","Men","Women"]
  return (
    <div>
        Hello
      {filters.forEach((filter)=>{
        {console.log(filter)}
        <div className='bg-[#fadcc5] p-1 rounded-lg'>
            {filter}
        </div>
      })}
    </div>
  )
}

export default Filters
