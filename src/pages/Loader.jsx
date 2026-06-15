import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Logo from "../assets/logo/logo-sm.png";


// 1. OrbitalLoader FIRST
const orbitalLoaderVariants = cva(
  "flex gap-5 items-center justify-center",
  {
    variants: {
      messagePlacement: {
        bottom: "flex-col",
        top: "flex-col-reverse",
        right: "flex-row",
        left: "flex-row-reverse",
      },
    },
    defaultVariants:{
      messagePlacement:"bottom"
    }
  }
);



function OrbitalLoader({ className, ...props }) {

  return (

    <div className={cn(orbitalLoaderVariants())}>

      <div
        className={cn(
          "relative sm:w-72 sm:h-72 w-50 h-50 flex items-center justify-center",
          className
        )}
        {...props}
      >

        <motion.img
          src={Logo}
          alt="Logo"
          className="
          sm:w-24 sm:h-24
          w-16 h-16
          object-contain
          z-10
          "
        />


        <motion.div
          className="
          absolute inset-0
          border-2 border-transparent
          border-t-primary
          rounded-full
          "
          animate={{
            rotate:360
          }}
          transition={{
            duration:1,
            repeat:Infinity,
            ease:"linear"
          }}
        />


        <motion.div
          className="
          absolute inset-5
          border-2 border-transparent
          border-t-primary/60
          rounded-full
          "
          animate={{
            rotate:-360
          }}
          transition={{
            duration:1.5,
            repeat:Infinity,
            ease:"linear"
          }}
        />

        <motion.div
          className="
          absolute inset-10
          border-2 border-transparent
          border-t-white
          rounded-full
          "
          animate={{
            rotate:360
          }}
          transition={{
            duration:.8,
            repeat:Infinity,
            ease:"linear"
          }}
        />

      </div>

    </div>
  )
}




// 2. Loader AFTER OrbitalLoader
export const Loader = ({ finishLoading }) => {


useEffect(()=>{

 const timer = setTimeout(()=>{

   finishLoading();

 },2500);


 return ()=>clearTimeout(timer);


},[finishLoading]);



return (

<>


<div
className="
absolute
w-[600px]
h-[600px]
bg-primary/25
blur-[150px]
rounded-full
"
/>



<OrbitalLoader />


</>

)

}