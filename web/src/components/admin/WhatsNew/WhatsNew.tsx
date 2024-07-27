import Icon from '../Icon/Icon'
import NotificationCount from '../NotificationCount/NotificationCount'

interface WhatsNewProps {
  children: React.ReactNode
  markAsRead: () => void
}

const WhatsNew = ({ children, markAsRead }: WhatsNewProps) => {
  return (
    <div className="fixed bottom-0 right-0 top-0 h-screen w-full max-w-[530px] border-l-1 border-[#363636] bg-[#121313] pl-10 pt-18">
      <div className="mb-8 flex items-center justify-between gap-3 border-b-1 border-java pb-8 pr-8 text-java">
        <Icon id="bell" size={32} />
        <h2 className="flex-1 font-serif text-2xl font-bold text-java">
          What's New
        </h2>

        <button
          className="button shorter primary text-sm outline"
          onClick={markAsRead}
        >
          Mark all as Read
          <NotificationCount count={3} />
        </button>
      </div>

      {children}
    </div>
  )
}

interface EntryProps {
  children: React.ReactNode
  title: string
  date: string
}

export const Entry = ({ children, title, date }: EntryProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{date}</h4>
      {children}
    </div>
  )
}

export default WhatsNew
