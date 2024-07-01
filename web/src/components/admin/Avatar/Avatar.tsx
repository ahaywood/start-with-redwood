interface Props {
  alt: string
  src?: string
  size?: number
}

const Avatar = ({ alt, src, size = 32 }: Props) => {
  const getFirstLetter = () => alt.charAt(0).toUpperCase()

  return (
    <div
      className="center rounded-full border-1 border-white text-lg font-normal text-roseWhite"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {src ? <img src={src} alt={alt} /> : getFirstLetter()}
    </div>
  )
}

export default Avatar
