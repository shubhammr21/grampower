import React from "react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p className="m-0">
        Copyright &copy; 2021{" "}
        <Link to="/" className="text-muted">
          Gram Power Technology Test
        </Link>
        . All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
