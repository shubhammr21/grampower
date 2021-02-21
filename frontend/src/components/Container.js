import React from "react"

function Container(props) {
  return (
    <div className="container py-md-5">
      <section className="section section bg-primary">{props.children}</section>
    </div>
  )
}

export default Container
