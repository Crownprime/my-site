import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import Image, { ImageProps } from 'next/image'
import { XIcon } from '@heroicons/react/outline'
import { ImagePreviewWrap } from './style'

const ImagePreview: FC<
  ImageProps & {
    onClose?: () => void
  }
> = ({ onClose, ...prop }) => {
  const handleClose = e => {
    e.stopPropagation()
    onClose?.()
  }
  return createPortal(
    <ImagePreviewWrap>
      <div className="control-wrap">
        <XIcon className="w-lg h-lg" onClick={handleClose} />
      </div>
      <div className="image-wrap">
        <Image {...prop} layout="fill" objectFit="contain" />
      </div>
    </ImagePreviewWrap>,
    document.body,
  )
}

const PostImage: FC<ImageProps> = props => {
  const [preview, setPreview] = useState(false)
  const handleClick = (val: boolean) => {
    setPreview(val)
  }
  return (
    <div className="relative w-full h-full" onClick={() => handleClick(true)}>
      <Image {...props} layout="fill" objectFit="contain" />
      {preview && (
        <ImagePreview {...props} onClose={() => handleClick(false)} />
      )}
    </div>
  )
}

export default PostImage
