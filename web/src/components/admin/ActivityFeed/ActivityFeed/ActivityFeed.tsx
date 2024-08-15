import Icon from '../../Icon/Icon'
import ActivityFeedItem from '../ActivityFeedItem/ActivityFeedItem'

interface ActivityFeedProps {
  close: () => void
}

const ActivityFeed = ({ close }: ActivityFeedProps) => {
  return (
    <div className="activity-feed fixed bottom-0 right-0 top-0 z-slideOutPanel h-screen w-[530px] overflow-y-auto border-l-1 border-[#363636] bg-[#121313] pl-10 pt-18">
      <button className="fixed right-6 top-6 text-submarine" onClick={close}>
        <Icon id="close" />
      </button>

      <h2 className="mb-8 flex items-center gap-3 font-serif text-2xl font-bold text-java">
        <Icon id="activity" /> Activity Feed
      </h2>

      {/* date */}
      <h3 className="with-divider font-sans text-xs font-bold uppercase text-java">
        Today, August 2, 2024
      </h3>

      <ul>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
      </ul>

      {/* date */}
      <h3 className="with-divider font-sans text-xs font-bold uppercase text-java">
        Today, August 2, 2024
      </h3>

      <ul>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
        <ActivityFeedItem icon="money">
          <a href="#">Amy Dutton</a> purchased <a href="#">Cabana Components</a>{' '}
          for $97 at 6:25am
        </ActivityFeedItem>
      </ul>
    </div>
  )
}

export default ActivityFeed
