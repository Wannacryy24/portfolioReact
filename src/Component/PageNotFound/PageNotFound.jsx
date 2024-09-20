import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'
export default function PageNotFound() {
  return (
    <div className="page-not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
    <div className="navigation">
      <Link to="/" className=''>Go to Home Page</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  </div>
  )
}
