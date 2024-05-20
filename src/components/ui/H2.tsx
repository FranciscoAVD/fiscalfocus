import { cn } from '@/lib/utils'
import React from 'react'

export default function H2({
    children,
    className
}:{
    children: React.ReactNode
    className?: string
}) {
  return (
    <h2 className={cn(`${className}`)}>{children}</h2>
  )
}
