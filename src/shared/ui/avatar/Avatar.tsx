import * as React from 'react'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import { cn } from '@/shared/helpers'

const Avatar = React.forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => (
  <Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
))

Avatar.displayName = Root.displayName
AvatarImage.displayName = Image.displayName
AvatarFallback.displayName = Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
