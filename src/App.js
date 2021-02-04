import React from 'react'

import { HEADER_SUBTITLE, HEADER_TITLE } from './constants'
import Grid from './components/Grid'
import Layout from './components/Layout'
import './App.css'

function App () {
  return (
    <div className="App">
      <Layout>
        <header className="App-header">
          <h1>{HEADER_TITLE}</h1>
          <h2>{HEADER_SUBTITLE}</h2>
        </header>

        <Grid numberOfItems={144}></Grid>
      </Layout>

    </div>
  )
}

export default App
