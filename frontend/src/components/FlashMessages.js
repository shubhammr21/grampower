import React, { useEffect } from "react"

function FlashMessages(props) {
  return (
    <div className="floating-alerts">
      {props.messages.map((flash, index) => {
        return (
          <div key={index} className={`alert alert-${flash.level ? flash.level : "secondary"} text-center floating-alert shadow-sm`}>
            {flash.level === "danger" && <span className="fas fa-fire"> </span>}
            {flash.level === "secondary" && <span className="far fa-bell"> </span>}
            {flash.level === "success" && <span className="far fa-thumbs-up"> </span>}
            {flash.level === "warning" && <span className="fas fa-exclamation-circle"> </span>}
            &nbsp; {flash.msg}
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessages
