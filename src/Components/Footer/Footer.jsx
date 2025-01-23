import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="w-full bg-slate-800 flex p-9">
          <div className="text-white">
            <h1 className="font-bold p-3 text-4xl">Contact:</h1>
            <hr />
            <div className="flex flex-col p-3 gap-4">
              <span>Email: vansh.khandelwal06@gmail.com</span>
              <span>Github: https://github.com/Vansh-Khandelwal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer