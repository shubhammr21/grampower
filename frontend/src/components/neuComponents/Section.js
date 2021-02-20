import React, { useEffect } from "react"

function Section(props) {
  return (
    <>
      <div className="section pt-4 pb-0">
        <div className="row">
          <div className="col text-center">
            <span className="h3">{props.children}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
