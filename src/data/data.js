import CryzeoImg from '../assets/projects/cryzeo.jpg';
import GolduuImg from '../assets/projects/golduu.jpg';
import InteriluImg from '../assets/projects/interilu.jpg';
import KoffuuImg from '../assets/projects/koffuu.jpg';
import Sivoci from '../assets/projects/sivoci.jpg';
import Staffu from '../assets/projects/staffu.jpg';
import Zeevra from '../assets/projects/zeevra.jpg';
import EcommerceImg from '../assets/projects/ecommerce.jpg';
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/javascript.png";
import bootstrap from "../assets/skills/bootstrap.png";
import gulp from "../assets/skills/gulp.png";
import react from "../assets/skills/react.png";
import reactbootstrap from "../assets/skills/react-bootstrap.png";
import sass from "../assets/skills/sass.png";
import tailwindcss from "../assets/skills/tailwind-css.png";
import MongoDb from "../assets/skills/mongodb.png";
import {
    FaHtml5,
    FaJs,
    FaBootstrap,
    FaGulp,
    FaReact,
    FaNode
} from "react-icons/fa";
import { SiReactbootstrap, SiSass, SiMongodb, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuMail, LuLinkedin, LuGithub } from 'react-icons/lu';


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
        },
        {
            "id": 4,
            "title": "Contact",
            "to": "/",
            "iconLine": "contactLine",
            "iconFill": "contactFill"
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
        {
            "id": 8,
            "title": "E-commerce Platform",
            "description": "An online fashion store that enables customers to explore trendy apparel, manage their shopping cart, and complete purchases securely through an intuitive and user-friendly interface.",
            "image": EcommerceImg,
            "github": "https://github.com/",
            "live": "https://e-commerce-ki.vercel.app/",
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
                },
                {
                    "name": "ExpressJs",
                    "icon": SiExpress,
                    "color": "text-green-500"
                },
                {
                    "name": "NodeJs",
                    "icon": FaNode,
                    "color": "text-green-500"
                },
                {
                    "name": "MongoDB",
                    "icon": SiMongodb,
                    "color": "text-green-500"
                },
            ],
        }

    ],
    "stats": [
        {
            "id": 1,
            "title": "Years of Exp.",
            "value": "1"
        },
        {
            "id": 2,
            "title": "Projects",
            "value": "7",
            "suffix": "+"
        },
        {
            "id": 3,
            "title": "Dedicated",
            "value": "100",
            "suffix": "%"
        }
    ],
    "skills": [
        {
            "id": 1,
            "name": "HTML",
            "icon": html,
            "hashcolor": "#FF6900",
            "color": "bg-orange-500",
            "category": "Frontend",
            "value": 96
        },
        {
            "id": 2,
            "name": "CSS",
            "icon": css,
            "hashcolor": "#00A6F4",
            "color": "bg-sky-500",
            "category": "Frontend",
            "value": 96
        },
        {
            "id": 3,
            "name": "JavaScript",
            "icon": js,
            "hashcolor": "#FFDF20",
            "color": "bg-yellow-400",
            "category": "Frontend",
            "value": 75
        },
        {
            "id": 4,
            "name": "Bootstrap",
            "icon": bootstrap,
            "hashcolor": "#8E51FF",
            "color": "bg-violet-500",
            "category": "Frontend",
            "value": 95
        },
        {
            "id": 5,
            "name": "React",
            "icon": react,
            "hashcolor": "#00B8DB",
            "color": "bg-cyan-500",
            "category": "Frontend",
            "value": 75
        },
        {
            "id": 6,
            "name": "React Bootstrap",
            "icon": reactbootstrap,
            "hashcolor": "#00D3F2",
            "color": "bg-cyan-400",
            "category": "Frontend",
            "value": 85
        },
        {
            "id": 7,
            "name": "Tailwind CSS",
            "icon": tailwindcss,
            "hashcolor": "#0092B8",
            "color": "bg-cyan-600",
            "category": "Frontend",
            "value": 85
        },
        {
            "id": 8,
            "name": "Sass",
            "icon": sass,
            "hashcolor": "#FB64B6",
            "color": "bg-pink-400",
            "category": "Frontend",
            "value": 85
        },
        {
            "id": 9,
            "name": "Gulp",
            "icon": gulp,
            "hashcolor": "#FF6467",
            "color": "bg-red-400",
            "category": "Frontend",
            "value": 85
        },
        {
            "id": 10,
            "name": "MongoDB",
            "icon": MongoDb,
            "hashcolor": "#4DB33D",
            "color": "bg-green-500",
            "category": "Backend",
            "value": 60
        },


    ],
    "contactLinks": [
        {
            icon: LuMail,
            label: 'Email',
            value: 'isha.makvane@gmail.com',
            href: 'mailto:isha.makvane@gmail.com',
            external: false,
        },
        {
            icon: LuLinkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/isha-makvane',
            href: 'https://linkedin.com/in/isha-makvane',
            external: true,
        },
        {
            icon: LuGithub,
            label: 'GitHub',
            value: 'github.com/isha-makvane',
            href: 'https://github.com/isha-makvane',
            external: true,
        },
    ],
    "experience": [
        {
            "id": 1,
            "title": "Continuous Learning & Development",
            "company": "Self-Driven",
            "duration": "Currently",
            "description": "Actively expanding my technical stack by learning modern web technologies and building robust, real-world projects to solve practical problems."
        },
        {
            "id": 2,
            "company": "Mantraksh Devs",
            "duration": "Apr 2025 - Apr 2026",
            "roles": [
                {
                    "title": "Web Designer",
                    "duration": "Jun 2025 - Apr 2026",
                    "description": "Transitioned to a full-time role. Worked on live projects, developing responsive web applications, optimizing user interfaces, and collaborating closely with the team to deliver high-quality code."
                },
                {
                    "title": "Web Design Intern",
                    "duration": "Apr 2025 - Jun 2025",
                    "description": "Gained hands-on professional experience by assisting the development team in building responsive UI components, fixing bugs, and learning modern development workflows."
                }
            ]
        },
        {
            "id": 3,
            "title": "College Final Year Project",
            "company": "Academic Experience",
            "duration": "Dec 2024 - Mar 2025",
            "description": "Designed and developed a comprehensive full-stack MERN (MongoDB, Express.js, React, Node.js) project."
        }
    ]
}
