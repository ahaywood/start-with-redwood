interface Props {
  notificationType: 'red' | 'yellow' | 'green'
}

const Notifications = ({ notificationType }: Props) => {
  return (
    <div
      data-testid="notification"
      className={`size-[6px] rounded-full
        ${notificationType === 'red' && 'bg-darkPastelRed'}
        ${notificationType === 'yellow' && 'bg-selectiveYellow'}
        ${notificationType === 'green' && 'bg-java'}
      `}
    />
  )
}

export default Notifications
