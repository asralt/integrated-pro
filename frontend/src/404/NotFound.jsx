import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">This page does not exist. Like most promises.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
