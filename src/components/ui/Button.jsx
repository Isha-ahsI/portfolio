import React, { forwardRef } from 'react'
import clsx from 'clsx';

const variants = {
    primary: `
    cursor-pointer
    bg-gradient-to-b
    from-primary-500
    to-primary-600
    text-white
    shadow-[0px_4px_32px_0_rgba(var(--color-primary-rgb),.25)]
    hover:shadow-[0px_4px_32px_0_rgba(var(--color-primary-rgb),.75)]
  `,

    light: `
    cursor-pointer
    bg-white
    text-primary
    border border-white/20
    shadow-[0px_4px_32px_0_rgba(255,255,255,.25)]
    hover:shadow-[0px_4px_32px_0_rgba(255,255,255,.5)]
  `,

    outline: `
    relative overflow-hidden cursor-pointer
    border-2 border-primary
    text-primary
    shadow-[inset_0_0_10px_rgba(var(--color-primary-rgb),0.4),0_0_9px_3px_rgba(var(--color-primary-rgb),0.1)]
    bg-[linear-gradient(to_right,rgba(var(--color-primary-rgb),0.1)_1%,transparent_40%,transparent_60%,rgba(var(--color-primary-rgb),0.1)_100%)]
    backdrop-blur-sm
    hover:text-primary-dark
    hover:shadow-[inset_0_0_10px_rgba(var(--color-primary-rgb),0.6),0_0_9px_3px_rgba(var(--color-primary-rgb),0.2)]

    before:content-['']
    before:absolute
    before:top-0
    before:left-[-4em]
    before:w-[4em]
    before:h-full
    before:bg-[linear-gradient(to_right,transparent_1%,rgba(var(--color-primary-rgb),0.1)_40%,rgba(var(--color-primary-rgb),0.1)_60%,transparent_100%)]
    before:transition-transform
    before:duration-500
    before:ease-in-out

    hover:before:translate-x-[15em]
  `
};

const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 md:text-base text-sm rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
};

const Button = forwardRef(({
    children,
    icon,
    variant = "primary",
    size = "md",
    className = "",
    iconPosition = "right",
    useCustomSize = false,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={clsx(
                `
        group
        flex items-center justify-center
        font-medium
        transition-transform duration-300
        ease-linear
        hover:scale-90
        w-fit
        `,
                variants[variant],
                !useCustomSize && sizes[size],
                className
            )}
            {...props}
        >
            {(variant === "primary" || variant === "light") ? (
                <div className="relative overflow-hidden">
                    <div className="flex items-center group-hover:-translate-y-7 transition-all duration-150 ease-in-out">

                        {iconPosition === "left" && icon}

                        <span>{children}</span>

                        {iconPosition === "right" && icon}
                    </div>

                    <div className="absolute top-7 left-0 flex items-center group-hover:top-0 transition-all duration-150 ease-in-out">

                        {iconPosition === "left" && icon}

                        <span>{children}</span>

                        {iconPosition === "right" && icon}
                    </div>
                </div>
            ) : (
                <>
                    {iconPosition === "left" && icon}

                    <span>{children}</span>

                    {iconPosition === "right" && icon}
                </>
            )}
        </button>
    );
});

export default Button;
