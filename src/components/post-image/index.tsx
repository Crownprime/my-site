import { FC, useState } from 'react'
import { createPortal } from 'react-dom'
import Image, { ImageProps } from 'next/image'
import { ImagePreviewWrap } from './style'
import { CloseIcon } from '@/components/icons'

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
      <div className="control-wrap text-4xl" onClick={handleClose}>
        <CloseIcon />
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
    <div
      className="relative flex justify-center"
      onClick={() => handleClick(true)}
    >
      <Image {...props} width="700" height="200" objectFit="contain" />
      {preview && (
        <ImagePreview {...props} onClose={() => handleClick(false)} />
      )}
    </div>
  )
}

export default PostImage
