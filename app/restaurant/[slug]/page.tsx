export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="#" className="font-bold text-gray-700 text-2xl">
            {' '}
            OpenTable{' '}
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
        {/* NAVBAR */} {/* HEADER */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Subito restaurant (Toronto)
            </h1>
          </div>
        </div>
        {/* HEADER */} {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* RESTAURANT NAVBAR */}
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7 capitalize">
                {' '}
                overview{' '}
              </a>
              <a href="" className="mr-7 capitalize">
                {' '}
                Menu{' '}
              </a>
            </nav>
            {/* RESTAURANT NAVBAR */} {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Subito</h1>
            </div>
            {/* TITLE */} {/* RAITING */}
            <div className="flex items-end">
              <div className="raitings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* RAITING */} {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                Indulge in Northern Italian Cuisine with an air of European
                sophistication and influence at Subito. Savor homemade pastas,
                scratch-made sauces and hand-selected, perfectly seared steaks,
                finished in our infrared broiler. Along with the freshest
                seafood, flown in daily from the ports, Subito offers brick oven
                pizzas, a raw bar and traditional antipasti.
              </p>
            </div>
            {/* DESCRIPTION */} {/* IMAGES */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                5 photos
              </h1>
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
            {/* IMAGES */} {/* REVIEWS */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                What 100 people are saying
              </h1>
              {/* REVIEW CARD */}
              <div className="border-b pb-7 mb-7">
                <div className="flex">
                  <div className="w-1/6 flex flex-col items-center">
                    <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                      <h2 className="text-white tect-2xl">MJ</h2>
                    </div>
                    <p>Micheal Jordan</p>
                  </div>
                  <div className="ml-10 w-5/6 ">
                    <div className="flex items-center">
                      <div className="flex mr-5">*****</div>
                    </div>
                    <div className="mt-5">
                      <p className="text-ld font-light">
                        A very nice lunch; food was excellent. The kitchen was a
                        bit slow; there appeared to be a larger crowd than might
                        have been expected. We would certainly go back and have
                        the same meal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* REVIEW CARD */}
            </div>
            {/* REVIEWS */}
          </div>
          {/* RESERVATION CARD PORTION */}
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make a Reservation</h4>
              </div>
              <div className="my-3 flex flex-col">
                <label htmlFor="">Party size</label>
                <select name="" id="" className="py-3 border-b font-light">
                  <option value="">1 person</option>
                  <option value="">2 people</option>
                </select>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Date</label>
                  <input
                    type="text"
                    className="py-3 border-b font-light w-28"
                  />
                </div>
                <div className="flex flex-col w-[48%]">
                  <label htmlFor="">Time</label>
                  <select name="" id="" className="py-3 border-b font-light">
                    <option value="">7:30 PM</option>
                    <option value="">9:30 PM</option>
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <button className="bg-red-600 rounded w-full px-4 text-white font-bold h-16">
                  Find a time
                </button>
              </div>
            </div>
          </div>

          {/* RESERVATION CARD PORTION */}
        </div>
        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  )
}
