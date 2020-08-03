import React from "react"
import "./App.css"
import { SwitchableProvider } from "./components/SwitchableProvider"
import { ConfigConsumer } from "./components/ConfigConsumer"
import { IndicatorList } from "./components/IndicatorList"

const config = {
  baseUrl: process.env.REACT_APP_D2_BASE_URL || " https://academy.demos.dhis2.org/app-dev-academy",
  apiVersion: process.env.REACT_APP_D2_API_VERSION || 34
}

const providerType = (process.env.REACT_APP_D2_PROVIDER_TYPE || "runtime").toLowerCase()

const App = () => {
  return (
    <SwitchableProvider type={providerType} config={config}>
      <div className="App">
        <header className="App-header">
          <ConfigConsumer />
          <IndicatorList />
          <Navigation />
        </header>
      </div>
    </SwitchableProvider>
  )
}

export default App
