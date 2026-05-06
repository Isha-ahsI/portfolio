import React from 'react'
import { Home } from './pages/Home'
import { RoutesPath } from './router/RoutesPath'
import { Layout } from './layout/Layout'

export const App = () => {
  return (
    <>
      <Layout>
        <RoutesPath />
      </Layout>
    </>
  )
}
