interface Props {
  alt: string
  size?: number
  src?: string
}

const Avatar = ({ alt, size = 32, src }: Props) => {
  const getFirstLetter = () => alt.charAt(0).toUpperCase()

  return (
    <div
      className="center rounded-full border-1 border-white text-lg font-normal text-roseWhite"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {src ? (
        <img src={src} alt={alt} className="rounded-full" />
      ) : (
        getFirstLetter()
      )}
    </div>
  )
}

export default Avatar
