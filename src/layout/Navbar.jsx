import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import ScrollProgressBar from "../components/ui/ScrollProgressBar";
import { ContactIcon } from '../components/ui/ContactIcon.jsx';
import { Data } from "../data/data.js";
import { flushSync } from "react-dom";
import { AiOutlineHome, AiFillHome, AiOutlineProject, AiFillProject } from "react-icons/ai";
import { IoCallOutline, IoCallSharp } from "react-icons/io5";
import { RiUser3Line, RiUser3Fill, RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { HiSun, HiMoon } from "react-icons/hi2";
import { LiaDownloadSolid } from "react-icons/lia";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import ShinyText from '@/components/ui/ShinyText';
import Logo from "../assets/logo/logo.png"

const iconMap = {
  homeLine: AiOutlineHome,
  aboutLine: RiUser3Line,
  projectLine: AiOutlineProject,
  homeFill: AiFillHome,
  aboutFill: RiUser3Fill,
  projectFill: AiFillProject,
  contactLine: IoCallOutline,
  contactFill: IoCallSharp,
};

const sectionMap = {
  home: "home",
  about: "about",
  projects: "projects",
  skills: "about",
  experience: "about",
  contact: "contact",
};

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const CustomFooter = () => {
  return (
    <div className="w-full px-10 md:px-12 py-8 border-t border-black/10 dark:border-white/10 transition-colors duration-500 flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-4">
      {/* Left Side: Availability Status */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
        </span>
        <ShinyText
          text="Available For Work"
          className="text-xs font-semibold tracking-wider uppercase"
        />
      </div>

      {/* Right Side: Social & Mail Icons */}
      <div className="flex items-center gap-3">
        {Data.contactLinks.map((link, index) => (
          <ContactIcon key={index} to={link.href} external={link.external} icon={<link.icon className="md:text-lg text-base" />} />
        ))}
      </div>
    </div>
  );
};

const SidebarNavLink = ({ heading, to, iconLine, iconFill, setIsActive, isActive: isLinkActive, onNavigate }) => {
  const IconLine = iconMap[iconLine];
  const IconFill = iconMap[iconFill];

  const handleClick = () => {
    setIsActive(false);
    if (onNavigate) onNavigate(to);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial="initial"
      whileHover="whileHover"
      className={`group relative flex items-center justify-between border-b py-4 transition-all duration-500 md:py-8 uppercase cursor-pointer ${isLinkActive
        ? 'border-primary/40'
        : 'border-dark/25 dark:border-white/10'
        }`}
    >
      <div className="w-full">
        <div className="relative flex items-center">

          {/* Icon Container */}
          <div className={`relative w-8 h-8 flex items-center justify-center mr-4 transition-colors duration-500 ${isLinkActive ? 'text-primary' : 'text-dark dark:text-white/50 group-hover:text-primary'
            }`}>
            {IconLine && (
              <IconLine className={`absolute text-3xl transition-all duration-300 ease-linear ${isLinkActive ? 'opacity-0 scale-75' : 'group-hover:opacity-0 group-hover:scale-75 opacity-100 scale-100'
                }`} />
            )}
            {IconFill && (
              <IconFill className={`absolute text-3xl transition-all duration-300 ease-linear drop-shadow-[0_0_12px_rgba(var(--color-primary-rgb),.75)] ${isLinkActive ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                }`} />
            )}
          </div>

          <div className="flex flex-row gap-2">
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              className={`relative z-10 block sm:text-4xl text-3xl font-heading transition-all duration-300 ease-linear md:text-4xl ${isLinkActive
                ? 'text-primary font-medium tracking-wider'
                : 'font-light text-dark dark:text-white group-hover:text-primary group-hover:font-medium group-hover:tracking-wider'
                }`}
            >
              {heading.split("").map((letter, i) => {
                return (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { x: 0 },
                      whileHover: { x: 16 },
                    }}
                    transition={{ type: "spring" }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                );
              })}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Curve = () => {
  const [height, setHeight] = useState(800);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  const initialPath =
    `M100 0 
 L200 0 
 L200 ${height} 
 L100 ${height} 
 Q-100 ${height / 2} 100 0`;

  const targetPath =
    `M100 0 
 L200 0 
 L200 ${height} 
 L100 ${height} 
 Q100 ${height / 2} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    exit: {
      d: initialPath,
      transition: {
        duration: .8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px]  overflow-visible
      pointer-events-none
      z-[-1] h-full fill-light dark:fill-slate-950 transition-colors duration-500">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

const CurvedNavbar = ({ setIsActive, navItems, footer, activeSection, onNavigate, setIsLockScroll }) => {
  return (
    <>
      <div
        onClick={() => {
          setIsActive(false);
          setIsLockScroll(false);
        }}
        className="
        fixed inset-0 
        bg-black/50 
        backdrop-blur-sm
        z-40
      "
      />
      <motion.div
        variants={MENU_SLIDE_ANIMATION}
        initial="initial"
        animate="enter"
        exit="exit"
        className="lg:hidden h-[100dvh] w-screen max-w-screen-sm fixed right-0 top-0 z-50 bg-light dark:bg-slate-950 text-black dark:text-white shadow-2xl border-l border-black/10 dark:border-white/10 transition-colors duration-500"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setIsActive(false);
            setIsLockScroll(false);
          }}
          aria-label="Close Menu"
          className="absolute top-8 right-8 w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/10 hover:scale-105"
        >
          <RiCloseLine className="text-2xl text-black dark:text-white" />
        </button>

        <div className="h-full pt-28 flex flex-col justify-between">
          <div className="flex flex-col text-5xl gap-3 mt-0 px-10 md:px-16">
            <div className="text-dark/75 dark:text-white/50 border-b border-dark/25 dark:border-white/10 uppercase text-sm mb-4 pb-2">
              <p>Navigation</p>
            </div>
            <section className="bg-transparent mt-0">
              <div className="mx-auto max-w-7xl">
                {navItems.map((item, index) => {
                  return (
                    <SidebarNavLink
                      onClick={() => onNavigate(item.to)}
                      key={item.id || item.to + index}
                      heading={item.title}
                      to={item.to}
                      iconLine={item.iconLine}
                      iconFill={item.iconFill}
                      setIsActive={setIsActive}
                      isActive={activeSection === item.to.replace('#', '')}
                      onNavigate={onNavigate}
                    />
                  );
                })}
              </div>
            </section>
          </div>
          {footer}
        </div>
        <Curve />
      </motion.div>
    </>
  );
};

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [isActive, setIsActive] = useState(false);
  const [isLockScroll, setIsLockScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const buttonRef = useRef(null);

  // Smooth scroll to section
  const scrollToSection = (to) => {
    const id = to.replace("#", "");

    // keep active state
    setActiveSection(id);

    // close sidebar
    setIsActive(false);

    // wait for sidebar animation
    setTimeout(() => {
      setIsLockScroll(false);

      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 800);
  };

  // IntersectionObserver to track active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            setActiveSection(sectionMap[id] || id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleThemeToggle = async () => {
    if (!buttonRef.current) return;

    const transition = document.startViewTransition?.(() => {
      flushSync(() => {
        setDarkMode((prev) => {
          const next = !prev;

          document.documentElement.classList.toggle("dark", next);

          localStorage.setItem(
            "theme",
            next ? "dark" : "light"
          );

          return next;
        });
      });
    });

    if (!transition) return;

    await transition.ready;

    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const radius = Math.hypot(
      Math.max(centerX, window.innerWidth - centerX),
      Math.max(centerY, window.innerHeight - centerY)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${centerX}px ${centerY}px)`,
          `circle(${radius}px at ${centerX}px ${centerY}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  // mobile menu toggle
  useEffect(() => {
    if (isLockScroll) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isLockScroll]);

  return (
    <>
      <ScrollProgressBar />
      <nav className='fixed z-40 top-0 right-0 left-0 my-6 mx-8 sm:mx-6'>
        <div className='max-w-6xl mx-auto flex items-center justify-between bg-primary-500/15 border border-primary-500/10 dark:bg-primary-300/15 dark:border-primary-300/10 backdrop-blur-2xl shadow-lg rounded-md shadow-2xl shadow-primary/15 px-6 py-4'>

          {/*leftside  navlinks  */}
          <div className='lg:flex hidden items-center'>
            {Data.navLinks.map((link) => {
              const IconLine = iconMap[link.iconLine];
              const IconFill = iconMap[link.iconFill];
              const isCurrent = activeSection === link.to.replace('#', '');
              return (
                <button
                  key={link.id}
                  className={`text-2xl font-semibold mx-4 transition-all duration-300 ease-linear group relative cursor-pointer ${isCurrent
                    ? 'text-primary scale-110'
                    : 'text-primary/75 hover:text-primary hover:scale-110'
                    }`}
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <IconLine
                      className={`absolute inset-0 transition-all duration-300 ease-linear ${isCurrent ? 'opacity-0 scale-0' : 'group-hover:opacity-0 group-hover:scale-0 opacity-100 scale-100'
                        }`}
                    />
                    <IconFill
                      className={`absolute inset-0 transition-all duration-300 ease-linear drop-shadow-[0_0_12px_rgba(var(--color-primary-rgb),.75)] ${isCurrent ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                        }`}
                    />
                  </div>
                  {/* Active indicator dot */}
                  <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${isCurrent ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`} />
                </button>
              )
            })}
          </div>

          {/* middleside logo */}
          <div className="lg:mx-auto me-auto text-black dark:text-white font-heading font-bold text-xl">
            <Link to="/"><img src={Logo} alt="Logo" className="w-8 h-8" /></Link>
          </div>

          {/* rightside */}
          <div className='flex items-center sm:space-x-6 space-x-4'>

            {/* sidebar toggle button */}
            <button
              onClick={() => {
                setIsActive(true);
                setIsLockScroll(true);
              }}
              aria-label="Open Menu"
              className='lg:hidden relative w-8 h-8 rounded-lg bg-white/75 border border-white/75 dark:bg-primary/15 dark:border-white/15 flex items-center justify-center cursor-pointer backdrop-blur-2xl overflow-hidden dark:shadow-[0_0_25px_rgba(var(--color-primary-rgb),.25)] transition-all duration-500 z-50'
            >
              <RiMenu4Line className='text-primary text-2xl' />
            </button>

            {/* light-dark button */}
            <button ref={buttonRef} onClick={handleThemeToggle} className=" relative w-8 h-8 rounded-lg bg-white/75 border border-white/75 dark:bg-primary/15 dark:border-white/15 flex items-center justify-center cursor-pointer backdrop-blur-2xl overflow-hidden dark:shadow-[0_0_25px_rgba(var(--color-primary-rgb),.25)] transition-all duration-500 "
            >
              <HiMoon
                className={` absolute text-primary transition-all duration-500 text-2xl ${darkMode ? "rotate-[360deg] scale-0" : "rotate-0 scale-100"} `}
              />

              <HiSun
                className={` absolute text-primary transition-all duration-500 text-2xl ${darkMode ? "rotate-[360deg] scale-100" : "rotate-0 scale-0"} `}
              />
            </button>

            {/* resume download button */}
            <Button
              variant="primary"
              useCustomSize
              icon={<LiaDownloadSolid className="text-lg sm:ms-2" />}
              className='sm:px-6 sm:py-3 px-2 py-2 md:text-base text-sm sm:rounded-xl rounded-full'
            >
              <span className="sm:block hidden">
                Resume / CV
              </span>
            </Button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            setIsActive={setIsActive}
            navItems={Data.navLinks}
            footer={<CustomFooter />}
            activeSection={activeSection}
            setIsLockScroll={setIsLockScroll}
            onNavigate={scrollToSection}
          />
        )}
      </AnimatePresence>
    </>
  )
}
