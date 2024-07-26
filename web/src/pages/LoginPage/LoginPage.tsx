import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Icon from 'src/components/admin/Icon/Icon'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Form onSubmit={onSubmit} className="auth-form">
        <img
          src="/images/logomark.svg"
          alt="RedwoodJS"
          className="relative mx-auto mb-5 w-24"
        />
        <h1 className="mb-2">Login to Your Account</h1>

        <div className="mb-4 text-center">
          <span>Don&apos;t have an account?</span>{' '}
          <Link
            to={routes.signup()}
            className="text-java underline hover:text-white"
          >
            Sign up!
          </Link>
        </div>

        <div className="field">
          <Label name="username" errorClassName="rw-label rw-label-error">
            Username
          </Label>
          <TextField
            name="username"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
          />
          <Icon id="email" />
          <FieldError name="username" className="rw-field-error" />
        </div>

        <div className="field">
          <Label name="password" errorClassName="rw-label rw-label-error">
            Password
          </Label>
          <PasswordField
            name="password"
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
          />
          <Icon id="lock" />
          <FieldError name="password" className="rw-field-error" />
        </div>

        <div className="field pt-5">
          <Submit className="button">Login</Submit>
        </div>

        <div className="pt-10 text-center">
          <Link
            to={routes.forgotPassword()}
            className="text-submarine underline hover:text-white"
          >
            Forgot Password?
          </Link>
        </div>
      </Form>
    </>
  )
}

export default LoginPage
