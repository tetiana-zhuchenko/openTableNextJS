import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="#" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>
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
        {/* HEADER */}

        <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
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
        {/* HEADER */}

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* SEARCH SIDE BAR*/}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Region</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottawa</p>
              <p className="font-light text-reg">Montreal</p>
              <p className="font-light text-reg">Hamilton</p>
              <p className="font-light text-reg">Kingston</p>
              <p className="font-light text-reg">Niagara</p>
            </div>
            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg">Mexican</p>
              <p className="font-light text-reg">Italian</p>
              <p className="font-light text-reg">Chinese</p>
              <p className="font-light text-reg">Hamilton</p>
            </div>
            <div className="my-3 pb-4">
              <h1 className="mb-2 ">Price</h1>
              <div className="flex">
                <button className="border w-full text-reg text-light rounded-l p-2">
                  $
                </button>
                <button className="border-r border-b border-t w-full text-reg text-light p-2">
                  $$
                </button>
                <button className="border-r border-b border-t rounded-r w-full text-reg text-light p-2">
                  $$$
                </button>
              </div>
            </div>
          </div>
          {/* SEARCH SIDE BAR*/}
          <div className="w-5/6">
            {/* RESTAURANT CARD */}
            <div className="border-b flex pb-5">
              <img
                src="https://resizer.otstatic.com/v2/photos/xlarge/1/42699253.webp"
                alt="srimps"
                className="w-44 rounded"
              />
              <div className="pl-5">
                <h2 className="text-3xl">Madison & Vine</h2>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2 text-sm">Awesome</p>
                </div>
                <div className="mb-9">
                  <div className="font-light flex text-reg">
                    <p className="mr-4">$$$</p>
                    <p className="mr-4">Mexican</p>
                    <p className="mr-4">Ottawa</p>
                  </div>
                </div>
                <div className="text-red-600">
                  <a href="">View more information</a>
                </div>
              </div>
            </div>
            {/* RESTAURANT CARD */}
          </div>
        </div>
      </main>
    </main>
  )
}
