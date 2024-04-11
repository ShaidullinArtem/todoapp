import React, { FC, PropsWithChildren } from 'react'
import { IButton } from './button.interface'
import Button from './Button'
import cn from 'classnames'


const PrimaryButton: FC<PropsWithChildren<IButton>> = ({children, isLoading, className, ...rest}) => {
  return (
	<Button
	{...rest}
	className={cn(`bg-primary p-4 rounded-lg`, className)}>
		{children}
	</Button>
  )
}

export default PrimaryButton


