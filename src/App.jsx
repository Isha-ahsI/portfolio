import React from 'react'
import { RoutesPath } from './router/RoutesPath'
import { Layout } from './layout/Layout'
import { SmoothScroll } from './components/ui/SmoothScroll'

export const App = () => {
  return (
    <SmoothScroll>
      <Layout>
        <RoutesPath />
      </Layout>
    </SmoothScroll>
  )
}
