const ActionBar = ({ children }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 ml-sidebar flex h-[86px] w-[calc(100%_-_286px)] items-center justify-between border-t-1 border-montana pl-mainLeft pr-mainRight">
      {children}
    </div>
  )
}

export default ActionBar
