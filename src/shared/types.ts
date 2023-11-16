import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type SVGProps,
} from 'react'

export type HeroIcon = ForwardRefExoticComponent<
  Omit<SVGProps<SVGSVGElement>, 'ref'> & RefAttributes<SVGSVGElement>
>

export type RoutePath = '/' | '/login' | '/signup' | '/chat' | '*'
