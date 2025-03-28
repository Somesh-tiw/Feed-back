import React, { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'
import { FaTrash,FaEdit } from "react-icons/fa";


const Listitem = ({feedback}) => {
   
    const {removeFeedback,editFeedback,dispatch}=useContext(FeedbackContext)


    const handleRemove=(id)=>{
       dispatch({
        type:"REMOVE_FEEDBACK",
        payload:id
       })
    }

    const handleEdit=(feedback)=>{
        dispatch({
            type :"EDIT_FEEDBACK",
            payload:feedback
        })
    }

  return (
    <li className='w-full bg-indigo-100 flex p-5 justify-between my-1'>
    <span className='  align-items-center justify-center flex-col p-5'>
        <h1 className='font-semibold text-xl text-amber-700'>Rating:{feedback.rating}</h1>
        <p className='font-semibold text-xl text-green-700'>Review:{feedback.review}</p>
        </span>

    <span className=' p-5'>
        <button className='text-green-600 p-2 mx-1 rounded  font-bold' onClick={()=>handleEdit(feedback)}><FaEdit /></button>
        <button className='text-red-600 p-2 mx-1 rounded  font-bold' onClick={()=>handleRemove(feedback.id)}><FaTrash /></button>
    </span>
</li>
  )
}

export default Listitem