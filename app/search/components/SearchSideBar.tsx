export default function SearchSideBar() {
  return (
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
  )
}
