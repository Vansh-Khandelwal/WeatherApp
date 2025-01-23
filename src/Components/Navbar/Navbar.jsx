import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="w-full bg-slate-800 flex px-5 md:px-8 py-5 items-center justify-around">
          <div className="text-white flex-1 float-left font-bold text-2xl">Weather App</div>
          <div className="text-white float-right flex items-center gap-4">
            <img src={process.env.PUBLIC_URL + '/me.jpg'} alt="profile img" className="h-12 w-10 rounded-3xl hidden md:block" />
            <div className="font-semibold text-base md:text-xl pl-2">By: Vansh Khandelwal</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar