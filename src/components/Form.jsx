import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from './context/FeedbackContext'

const Form = () => {
  const {addFeedback,edit,updateFeedback,dispatch}=useContext(FeedbackContext)
  const [rating,setRating]=useState(1)
  const [review,setReview]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    !edit.isedit?
    dispatch({
      type:"ADD_FEEDBACK",
      payload:{id:crypto.randomUUID(),rating,review}
    }):
    dispatch({
      type:"UPDATE_FEEDBACK",
      payload:{id:edit.feedback.id,rating,review}
    })

    // !edit.isedit?
    // addFeedback(rating,review):
    // updateFeedback({id:edit.feedback.id,rating,review})

    setRating()
    setReview("")
  }
  useEffect(()=>{
    setRating(edit.feedback.rating)
    setReview(edit.feedback.review)
  },[edit])
  return (
    <form onSubmit={(e)=>handleSubmit(e)} className='px-5 py-5'>
        <select onChange={(e)=>setRating(e.target.value)} className='w-full bg-indigo-100 p-2 my-2' value={rating}>
         
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input onChange={(e)=>setReview(e.target.value)} className='w-full bg-emerald-100 p-2' type="text" value={review} placeholder='Please Share Your Feedback' />
        <button className='w-full bg-green-400 my-2  font-bold p-2'>Submit Here</button>
    </form>
  )
}

export default Form