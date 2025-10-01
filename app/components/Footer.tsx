import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <Link
            href="/analyze-review"
            className="font-bold text-gray-700 text-xl hover:text-gray-900"
          >
            Test Analyze Review
          </Link>
          <p className="text-sm text-gray-600">
            Contact: kn24-t.zhuchenko@nubip.edu.ua
          </p>
          <p className="text-sm text-gray-600">Ukraine, Kyiv</p>
          <p className="text-sm text-gray-600">
            © 2025 Zhuchenko Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
