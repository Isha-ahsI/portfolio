import React from 'react';
import { SectionBadge } from './ui/SectionBadge';
import Button from './ui/Button';
import { CountUp } from 'use-count-up';
import { Data } from '../data/data';
import { Link } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import FullAvatar from '../assets/full-avatar.png';

export const About = () => {
    return (
        <section id="about" className="relative overflow-hidden max-w-7xl mx-auto pt-24 sm:px-6 sm:pt-28 px-4">

            {/* Grid Layout */}
            <div className="max-w-6xl mx-auto relative flex md:flex-row items-center md:justify-between justify-center">

                {/* PNG Image */}
                <div className="relative z-20 h-[400px] md:block hidden">
                    <img
                        src={FullAvatar}
                        alt="Isha Makvane"
                        className="w-full h-full object-cover drop-shadow-[0_8px_16px_rgba(var(--color-primary-rgb),0.5)]"
                    />
                </div>

                {/* Content Card */}
                <div
                    className="md:z-10 md:absolute md:start-70 rounded-2xl md:pl-16 md:pr-8 md:px-10 p-8 border border-dark/20 dark:border-white/20 bg-primary backdrop-blur-md shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.2)] md:text-start text-center"
                    data-primary-bg>

                    <SectionBadge text="About Me" bgColor="bg-white/25 border border-white/25 backdrop-blur-2xl text-primary" className="text-white" color="#000000" shineColor="#ffffff" />
                    <h2 className="font-[900] text-2xl sm:text-4xl uppercase tracking-wider text-white mb-2">
                        Get To Know Me!
                    </h2>
                    <div className="md:hidden flex justify-center mb-6">
                        <img
                            src={FullAvatar}
                            alt="Isha Makvane"
                            className="max-h-[400px] drop-shadow-[0_8px_16px_rgba(255,255,255,0.5)]"
                        />
                    </div>

                    <p className="text-white/75 dark:text-white/75 leading-relaxed">
                        I'm a passionate
                        <strong className="text-dark">
                            {" "}Web Designer and Frontend Developer
                        </strong>
                        {" "}who creates modern, responsive, and user-friendly web experiences. I enjoy turning creative ideas into clean, interactive websites while continuously learning new technologies to build high-performance digital solutions.
                    </p>
                    <div className='mt-4 flex flex-col md:items-start items-center'>
                        <Link to="mailto:isha.makvane@gmail.com">
                            <Button
                                variant="light"
                                icon={<FaEnvelope className="me-2" />}
                                iconPosition="left"
                                className='gap-2'
                            >
                                Let's Talk
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full mt-8 pt-6 border-t border-dark/15 dark:border-white/15">
                {Data.stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        className={`text-center ${index !== Data.stats.length - 1
                            ? "border-r border-dark/20 dark:border-white/20"
                            : ""
                            }`}
                    >
                        <h3 className="text-2xl sm:text-4xl font-bold text-primary">
                            <CountUp
                                key={stat.value}
                                isCounting={true}
                                end={Number(stat.value)}
                                duration={3}
                            />
                            {stat.suffix}
                        </h3>

                        <p className="text-[10px] sm:text-xs text-dark/60 dark:text-light/60 mt-1 uppercase tracking-wider font-semibold">
                            {stat.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
