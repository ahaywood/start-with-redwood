interface NotificationCountProps {
  count: number
}

const NotificationCount = ({ count }: NotificationCountProps) => {
  return (
    <div className="center h-[18px] w-[18px] rounded-full bg-java text-xs font-bold text-black">
      {count}
    </div>
  )
}

export default NotificationCount
