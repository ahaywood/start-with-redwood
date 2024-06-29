import AdminNav from '@startRW/AdminNav/AdminNav'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="admin-layout min-h-screen w-screen bg-gradient bg-no-repeat">
      <aside>
        <AdminNav />
      </aside>
      <main>
        <header className="col-span-2"></header>
        {children}
      </main>
    </div>
  )
}

export default AdminLayout
