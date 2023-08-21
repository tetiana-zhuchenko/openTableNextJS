export default function Header() {
  return (
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
  )
}
