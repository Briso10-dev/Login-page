import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/form'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="w-full h-[100vh] flex font-popins">
      <div className="flex-1 bg-[url('/image.svg')]  bg-no-repeat bg-center h-[100vh]"> </div>
      <Form />
    </div>
  </React.StrictMode>
)
