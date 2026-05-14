import React from 'react'
import { Badge } from './badge'
import ShinyText from './ShinyText'
import { TbCircleDotFilled } from "react-icons/tb";


export const SectionBadge = ({ text, className }) => {
    return (
        <Badge className="bg-primary/25 border border-primary/25 backdrop-blur-2xl text-primary font-medium text-sm p-4 capitalize mb-4 shadow-[0_0_16px_rgba(var(--color-primary-rgb),0.35)]">
            <TbCircleDotFilled className='me-1' />
            <ShinyText
                text={text}
                disabled={false}
                speed={3}
                className={className}
            />
        </Badge>
    )
}
