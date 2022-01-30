import React from 'react'
import Layout from "./src/components/Layout"
import "./src/styles/global.css"

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("new pathname", location.pathname)
    console.log("old pathname", prevLocation ? prevLocation.pathname : null)
}

export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>
}