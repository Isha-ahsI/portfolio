import CryzeoImg from '../assets/projects/cryzeo.jpg';
import GolduuImg from '../assets/projects/golduu.jpg';
import InteriluImg from '../assets/projects/interilu.jpg';
import KoffuuImg from '../assets/projects/koffuu.jpg';
import Sivoci from '../assets/projects/sivoci.jpg';
import Staffu from '../assets/projects/staffu.jpg';
import Zeevra from '../assets/projects/zeevra.jpg';
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaGulp,
    FaReact,
} from "react-icons/fa";
import { SiReactbootstrap, SiSass } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";


export const Data = {
    "navLinks": [
        {
            "id": 1,
            "title": "Home",
            "to": "/",
            "iconLine": "homeLine",
            "iconFill": "homeFill"
        },
        {
            "id": 2,
            "title": "About",
            "to": "/",
            "iconLine": "aboutLine",
            "iconFill": "aboutFill"
        },
        {
            "id": 3,
            "title": "Projects",
            "to": "/",
            "iconLine": "projectLine",
            "iconFill": "projectFill"
        }
    ],
    "socialLinks": [
        {
            "id": 1,
            "to": "/",
            "icon": "github",
        },
        {
            "id": 2,
            "to": "/",
            "icon": "linkedin",
        }
    ],
    "projectCard": [
        {
            "id": 1,
            "title": "Koffuu",
            "description": "A modern café website showcasing artisanal brews, cozy vibes, and seamless online ordering.",
            "image": KoffuuImg,
            "github": "https://github.com/",
            "live": "https://koffuu.vercel.app/",
            "type": "Web",
            "technologies": [
                {
                    "name": "React",
                    "icon": FaReact,
                    "color": "text-cyan-500",
                },
                {
                    "name": "Bootstrap",
                    "icon": FaBootstrap,
                    "color": "text-purple-500"
                },
                {
                    "name": "React Bootstrap",
                    "icon": SiReactbootstrap,
                    "color": "text-sky-500"
                },
                {
                    "name": "HTML",
                    "icon": FaHtml5,
                    "color": "text-orange-500",
                },
                {
                    "name": "Sass",
                    "icon": SiSass,
                    "color": "text-fuchsia-500"
                },
                {
                    "name": "JavaScript",
                    "icon": FaJs,
                    "color": "text-yellow-500",
                },
            ],
        },
        {
            "id": 2,
            "title": "Sivoci",
            "description": "Business growth-focused web platform built with modern UI and performance-driven design.",
            "image": Sivoci,
            "github": "https://github.com/",
            "live": "https://sivoci.vercel.app/",
            "type": "Web",
            "technologies": [
                {
                    "name": "React",
                    "icon": FaReact,
                    "color": "text-cyan-500",
                },
                {
                    "name": "Bootstrap",
                    "icon": FaBootstrap,
                    "color": "text-purple-500"
                },
                {
                    "name": "React Bootstrap",
                    "icon": SiReactbootstrap,
                    "color": "text-sky-500"
                },
                {
                    "name": "Sass",
                    "icon": SiSass,
                    "color": "text-fuchsia-500"
                },
                {
                    "name": "HTML",
                    "icon": FaHtml5,
                    "color": "text-orange-500",
                },
                {
                    "name": "JavaScript",
                    "icon": FaJs,
                    "color": "text-yellow-500",
                },

            ],
        },
        {
            "id": 3,
            "title": "Interilu",
            "description": "A modern home interior website showcasing elegant, functional, and personalized living space designs.",
            "image": InteriluImg,
            "github": "https://github.com/",
            "live": "https://interillu.vercel.app/",
            "type": "Web",
            "technologies": [
                {
                    "name": "HTML",
                    "icon": FaHtml5,
                    "color": "text-orange-500",
                },
                {
                    "name": "Bootstrap",
                    "icon": FaBootstrap,
                    "color": "text-purple-500"
                },
                {
                    "name": "JavaScript",
                    "icon": FaJs,
                    "color": "text-yellow-500",
                },
                {
                    "name": "Gulp",
                    "icon": FaGulp,
                    "color": "text-orange-500"
                },
                {
                    "name": "Sass",
                    "icon": SiSass,
                    "color": "text-fuchsia-500"
                }
            ],
        },
        {
            "id": 4,
            "title": "Zeevra",
            "description": "Modern multipurpose web platform for seamless business and digital experiences.",
            "image": Zeevra,
            "github": "https://github.com/",
            "live": "https://zeevra-gilt.vercel.app/",
            "type": "Web",
            "technologies": [
                {
                    "name": "HTML",
                    "icon": FaHtml5,
                    "color": "text-orange-500",
                },
                {
                    "name": "Bootstrap",
                    "icon": FaBootstrap,
                    "color": "text-purple-500"
                },
                {
                    "name": "Sass",
                    "icon": SiSass,
                    "color": "text-fuchsia-500"
                },
                {
                    "name": "JavaScript",
                    "icon": FaJs,
                    "color": "text-yellow-500",
                },
                {
                    "name": "Gulp",
                    "icon": FaGulp,
                    "color": "text-orange-500"
                }
            ],
        },
        {
            "id": 5,
            "title": "Cryzeo",
            "description": "A secure and intuitive cryptocurrency platform for seamless digital asset tracking and trading.",
            "image": CryzeoImg,
            "github": "https://github.com/",
            "live": "https://cryzeo.vercel.app/",
            "type": "Web",
            "technologies": [
                {
                    "name": "React",
                    "icon": FaReact,
                    "color": "text-cyan-500",
                },
                {
                    "name": "Bootstrap",
                    "icon": FaBootstrap,
                    "color": "text-purple-500"
                },
                {
                    "name": "React Bootstrap",
                    "icon": SiReactbootstrap,
                    "color": "text-sky-500"
                }
            ],
        },
        {
            "id": 6,
            "title": "Golduu",
            "description": "A modern responsive jewelry portfolio website that beautifully showcases handcrafted designs and attracts customers.",
            "image": GolduuImg,
            "github": "https://github.com/",
            "live": "https://golduu.vercel.app/",
            "type": "Web",
            "technologies": [
                {
                    "name": "React",
                    "icon": FaReact,
                    "color": "text-cyan-500",
                },
                {
                    "name": "Tailwind CSS",
                    "icon": RiTailwindCssFill,
                    "color": "text-sky-500"
                }
            ],
        },
        {
            "id": 7,
            "title": "Staffu",
            "description": "Staffu is CRM Dashboard that simplifies staff, customer, and workflow management in one intuitive interface.",
            "image": Staffu,
            "github": "https://github.com/",
            "live": "https://staffu.vercel.app/",
            "type": "Dashboard",
            "technologies": [
                {
                    "name": "HTML",
                    "icon": FaHtml5,
                    "color": "text-orange-500",
                },
                {
                    "name": "Bootstrap",
                    "icon": FaBootstrap,
                    "color": "text-purple-500"
                },
                {
                    "name": "Sass",
                    "icon": SiSass,
                    "color": "text-fuchsia-500"
                },
                {
                    "name": "JavaScript",
                    "icon": FaJs,
                    "color": "text-yellow-500",
                },
                {
                    "name": "Gulp",
                    "icon": FaGulp,
                    "color": "text-orange-500"
                }
            ],
        },

    ]
}
