import { forwardRef, useState } from 'react'
import images from '~/assets/images'

import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = forwardRef(({ className, src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleImageError = () => {
        setFallback(customFallback)
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            onError={handleImageError}
            {...props}
        />
    )
})

export default Image;