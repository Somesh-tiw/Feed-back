import React, { useState } from 'react'
import Navbar from './Navbar'
import Form from './Form'

import Listgroup from './Listgroup'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
 
  return (
    <FeedbackProvider>
      <Navbar />
      <Form  />

      <Listgroup   />
    </FeedbackProvider>
  )
}

export default App