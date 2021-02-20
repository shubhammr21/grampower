import React, { useEffect, useState } from "react"
import Axios from "../Axios"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import Webinar from "./Webinar"

function WebinarList() {
  const [isLoading, setIsLoading] = useState(true)
  const [webinar, setWebinar] = useState()

  useEffect(() => {
    async function fetchWebinar() {
      try {
        await Axios.get(`/api/webinars/`)
          .then(response => {
            setWebinar(response.data)
            setIsLoading(false)
          })
          .catch(err => {
            console.log(err)
          })
      } catch (e) {
        console.log("There was a problem")
      }
    }
    fetchWebinar()
  }, [])
  if (isLoading) {
    return (
      <div>
        <LoadingDotsIcon />
      </div>
    )
  }
  console.log(webinar)
  return (
    <Page title="Welcome to Emorize">
      <div className="main-content">
        <div className="content-wrapper">
          {/* <!-- Blockquotes with avatar --> */}
          <section id="blockquotes-with-avatar">
            <div className="row match-height">{/* <div className="col-12">{webinar}</div> */}</div>
          </section>
          {/* <!--/ Blockquotes styling --> */}
        </div>
      </div>
    </Page>
  )
}

export default WebinarList

import React, { useEffect } from "react"

function Webinar(props) {
  return (
    <>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="card-header">
              <div className="media">
                <div className="media-left">
                  <span className="avatar avatar-md avatar-busy">
                    <img src="/static/frontend/img/portrait/small/avatar-s-11.png" alt="avatar" className="media-object img-xl rounded-circle" />
                  </span>
                </div>
                <div className="media-body">
                  <h4 className="mb-0 card-title">
                    <a>Application API Support</a>
                  </h4>
                  <div className="card-subtitle text-muted mt-0">
                    <span className="font-small-3">15 Oct, 2016 at 8.00 A.M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Webinar

import React, { useState, useRef, useCallback } from "react"
import Page from "./Page"
import Webinar from "./Webinar"
import WebinarListItem from "./WebinarListItem"

export default function WebinarList() {
  const [query, setQuery] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const { books, hasMore, loading, error } = Webinar(query, pageNumber)

  const observer = useRef()
  const lastBookElementRef = useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, hasMore]
  )

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
  }

  return (
    <Page title="Welcome to Emorize">
      <div className="main-content">
        <div className="content-wrapper">
          <input type="text" value={query} onChange={handleSearch}></input>
          {books.map((book, index) => {
            if (books.length === index + 1) {
              return <WebinarListItem ref={lastBookElementRef} key={book} item={book} />
            } else {
              return <WebinarListItem key={book} item={book} />
            }
          })}
          <div>{loading && "Loading..."}</div>
          <div>{error && "Error"}</div>

          {/* <!-- Blockquotes with avatar --> */}
          <section id="blockquotes-with-avatar">
            <div className="row match-height">{/* <div className="col-12">{webinar}</div> */}</div>
          </section>
          {/* <!--/ Blockquotes styling --> */}
        </div>
      </div>
    </Page>
  )
}
// ES7 Syntax

// Parent class
class Human {
  gender = "male"

  printGender = () => {
    console.log(this.gender)
  }
}
/* ES7 Syntax */
// Extending parent class Human
class Person extends Human {
  name = "Something"
  gender = "female"

  printName = () => {
    console.log(this.name)
  }
}
const person = new Person()
person.printName()
person.printGender()

// ES6 Syntax

// Parent class
class Human {
  constructor() {
    this.gender = "male"
  }
  printGender() {
    console.log(this.gender)
  }
}

// Extending parent class Human
class Person extends Human {
  constructor() {
    super() //calling or excute parent class
    this.name = "Something"
    this.gender = "female"
  }
  printName() {
    console.log(this.name)
  }
}
const person = new Person() //assigning a class
person.printName()
person.printGender()

/* Spread & Rest operators ... */
const numbers = [1, 2, 3, 4]
const newNumbers = [...numbers, 4]

console.log(newNumbers)

const person = {
  name: "Max"
}
const newPerson = {
  ...person,
  age: 28
}
console.log(newPerson)

/* Rest Operator */
const filter = (...args) => args.filter(el => el === 1)
console.log(filter(1, 2, 3))
console.log(filter(newNumbers))
