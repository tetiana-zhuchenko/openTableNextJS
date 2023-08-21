import React from 'react'

export default function Images() {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">5 photos</h1>
      <div className="flex flex-wrap">
        <img
          src="https://resizer.otstatic.com/v2/photos/wide-huge/3/31209304.webp"
          alt="restaurant holl"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/3/28489278.webp"
          alt="coctail"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/3/31209313.webp"
          alt="steak"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/1/30747007.webp"
          alt="bar"
          className="w-56 h-44 mr-1 mb-1"
        />
        <img
          src="https://resizer.otstatic.com/v2/photos/xlarge/3/31209306.webp"
          alt="pasta"
          className="w-56 h-44 mr-1 mb-1"
        />
      </div>
    </div>
  )
}
