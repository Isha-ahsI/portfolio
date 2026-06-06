import React from 'react'
import { Badge } from './badge'
import ShinyText from './ShinyText'
import { TbCircleDotFilled } from "react-icons/tb";


export const SectionBadge = ({ text, className = "", bgColor, color, shineColor }) => {
    return (
        <Badge className={`font-medium text-sm py-1 px-4 capitalize mb-4 shadow-[0_0_16px_rgba(var(--color-primary-rgb),0.3)] ${bgColor}`}>
            <TbCircleDotFilled className='me-0.25' />
            <ShinyText
                text={text}
                disabled={false}
                speed={3}
                className={className}
                color={color}
                shineColor={shineColor}
            />
        </Badge>
    )
}
