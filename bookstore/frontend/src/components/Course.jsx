import React from 'react'
import Cards from './Cards'
import list from "../../src/list.json"
import {Link} from "react-router-dom"

function Course() {
  return (
  <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h className="text-2xl md:text-4xl ">
                We're delighted to have you <span className='text-pink-500'>Here! :)</span>
            </h>
            <p className='mt-8'>Whether you’re a casual reader or a passionate book lover, our app is your gateway to a world of knowledge, imagination, and adventure. Browse, explore, and discover your next favorite book — happy reading!</p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid gird-cols-1 md:grid-cols-4'>
            {list.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))}
        </div>
    </div>
  </>
  
  )
}

export default Course
