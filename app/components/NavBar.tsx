import Link from 'next/link'

export default function NavBar() {
  return (
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
  )
}
