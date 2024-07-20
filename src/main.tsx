import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/form'
import Background from './components/background'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <div className="flex w-screen h-screen">
            <Background />            
            <Form />
        </div>
  </React.StrictMode>
)
