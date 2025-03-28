import React, { useContext } from 'react'
import Listitem from './Listitem'
import FeedbackContext from './context/FeedbackContext'

const Listgroup = () => {
    const {feedback}=useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <p className='p-10 text-center font-bold text-2xl text-gray-500'>No feedback available.</p>
    }
  return (
   
        <ul className='p-5'>
            {
              feedback.map((item)=>
                (
                    <Listitem key={item.id}  feedback={item}/>
                )
              )
            }

        </ul>
   
  )
}

export default Listgroup