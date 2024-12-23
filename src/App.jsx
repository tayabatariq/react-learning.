import React from 'react'

function App() {
  return (
    <>
    <div className='bg-zinc-900 p-7  w-full h-screen flex items-center justify-center gap-4 flex-col '>
    <h1 className="text-6xl text-center font-bold text-white  underline">
      Welcome to My React Jorney 
      </h1>
      <p className='text-white text-xl  '>Aaj maine React sikhna shuru kiya hai! Yeh mera pehla React project hai, 
      jismein maine simple concepts explore kiye hain. 😊 
      </p>
      <button onClick={()=> {
        alert("I'm happy to Learn React ")
      }} className='text-white cursor-pointer hover:bg-zinc-100 hover:text-black bg-zinc-500 p-2 rounded-lg '> Click Here to Cheer Me Up! 🎉</button>
    </div>
  </>

  )
}

export default App
