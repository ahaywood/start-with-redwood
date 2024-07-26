import { Constants } from 'src/helpers/Constants'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <main className="min-w-screen center min-h-screen bg-auth bg-center-top bg-no-repeat">
      {children}

      <footer className="absolute bottom-2 text-center text-sm text-gossamer">
        Copyright &copy; {currentYear}.{' '}
        <a
          href={Constants.PRESTON_WERNER_VENTURES}
          className="underline hover:text-white"
          target="_blank"
          rel="noreferrer"
        >
          Preston-Werner Ventures
        </a>
        . All Rights Reserved.
      </footer>
    </main>
  )
}

export default AuthLayout
