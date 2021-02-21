import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Card(props) {
  const item = props.store
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-5">
        <div className="card bg-primary border-light shadow-soft">
          <img src={item.cover} className="card-img-top rounded-top" alt="Themesberg office" />
          <div className="card-body">
            <span className="h6 icon-tertiary small">
              <span className="fas fa-user mr-2"></span>
              {item.owner_name}
            </span>
            <h3 className="h5 card-title mt-3">{item.name}</h3>
            <p className="card-text truncate-overflow">{item.about}</p>
            <Link to={`/store/${item.id}/`} className="btn btn-primary btn-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
