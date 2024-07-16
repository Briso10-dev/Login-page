import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/form'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='flex '>
      <div><img src="../public/image.svg" alt="image" /> </div>
      <Form />
    </div>
  </React.StrictMode>,
)
