import React, { useState } from 'react'
import { RoutesPath } from './router/RoutesPath'
import { Layout } from './layout/Layout'
import { SmoothScroll } from './components/ui/SmoothScroll'
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "./pages/Loader";

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050816]"
          >
            <Loader finishLoading={() => setLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>


      {!loading && (
        <SmoothScroll>
          <Layout>
            <RoutesPath />
          </Layout>
        </SmoothScroll>
      )}
    </>
  )
}
