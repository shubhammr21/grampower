import React, { useState, useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "../StateContext"
import Page from "./Page"
import Section from "./neuComponents/Section"
import Hero from "./neuComponents/Hero"
import Accordion from "./neuComponents/Accordion"
import Alerts from "./neuComponents/Alerts"
import AlertsLarge from "./neuComponents/AlertsLarge"
import AlertsInset from "./neuComponents/AlertsInset"
import AlertsInsetLarge from "./neuComponents/AlertsInsetLarge"
import Badges from "./neuComponents/Badges"
import BlogCards from "./neuComponents/BlogCards"
import ProfileCards from "./neuComponents/ProfileCards"
import PricingCards from "./neuComponents/PricingCards"
import CallToActionCards from "./neuComponents/CallToActionCards"
import Login from "./neuComponents/Login"
import Carousels from "./neuComponents/Carousels"
import Buttons from "./neuComponents/Buttons"

function All(props) {
  const appState = useContext(StateContext)
  return (
    <Page title="All Components">
      <Hero />
      <Accordion />
      <Alerts />
      <AlertsLarge />
      <Section>Inset Shadow</Section>
      <AlertsInset />
      <AlertsInsetLarge />
      <Badges />
      <BlogCards />
      <ProfileCards />
      <PricingCards />
      <CallToActionCards />
      <Login />
      <Carousels />
      <Buttons />
    </Page>
  )
}

export default All
