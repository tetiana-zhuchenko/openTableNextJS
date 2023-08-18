import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <Link href="/" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </Link>
          <div>
            <div className="flex">
              <button className="bg-blue-400 text-white p-1 px-4 rounded mr-3">
                Sing in
              </button>
              <button className="p-1 px-4 rounded">Sing up</button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
          <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
            <div className="text-center mt-10">
              <h1 className="text-white text-5xl font-bold mb-2">
                Find you table for any occasion
              </h1>
              {/* SEARCH BAR */}
              <div className="text-left text-lg py-3 m-auto flex justify-center">
                <input
                  type="text"
                  className="rounded mr-3 p-2 w-[350px]"
                  placeholder="State, city or town"
                />
                <button className="bg-red-600 rounded px-9 py-2 text-white">
                  Let's go
                </button>
              </div>
              {/* SEARCH BAR */}
            </div>
          </div>
          {/* HEADER */} {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap">
            {/* CARD */}
            <div className="w-64 h-72 m-3 rounded overflow-hiden border cursor-pointer">
              <Link href="/restaurant/subido-restaurant">
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/3/31209304.webp"
                  alt="restaurant"
                  className="w-full h-36"
                />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">Subito restaurant</h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2">77 reviews</p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className="mr-3">mexican</p>
                    <p className="mr-3">$$$$</p>
                    <p className="mr-3">Toronto</p>
                  </div>
                  <p className="text-sm font-bold mt-1">Booked 3 times today</p>
                </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </main>
    </main>
  )
}
