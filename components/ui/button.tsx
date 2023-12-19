import { cn } from '@/libs/utils';
import React, { ReactElement } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    disabled,
    type="button",
    children,
    ...props
}, ref) => {
  return (
    <button 
    type={type}
    ref={ref}
    disabled={disabled}
    {...props}
    className={cn(`
    w-auto 
    rounded-full 
    bg-black
    border
    border-transparent
    px-5 
    py-3 
    disabled:cursor-not-allowed 
    disabled:opacity-50
    text-white
    font-semibold
    hover:opacity-75
    transition
  `,
    disabled && 'opacity-75 cursor-not-allowed',
    className)}
    >
        {children}
    </button>
  )
});


Button.displayName = 'Button'

export default Button