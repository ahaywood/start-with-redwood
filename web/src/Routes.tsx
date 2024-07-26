// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, PrivateSet, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AdminLayout from './layouts/AdminLayout'
import AuthLayout from './layouts/AuthLayout/AuthLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/profile" page={ProfilePage} name="profile" />

      {/* LOGIN / AUTH ROUTES */}
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>

      {/* ADMIN */}
      <PrivateSet wrap={AdminLayout} unauthenticated="login">
        <Route path="/my-account" page={MyAccountPage} name="myAccount" />
        <Route path="/purchases" page={PurchasesPage} name="purchases" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/groups" page={GroupsPage} name="groups" />
        <Route path="/assets" page={AssetsPage} name="assets" />
        <Route path="/customers" page={CustomersPage} name="customers" />
        <Route path="/subscriptions" page={SubscriptionsPage} name="subscriptions" />
        <Route path="/products" page={ProductsPage} name="products" />
        <Route path="/users" page={UsersPage} name="users" />
        <Route path="/support" page={SupportPage} name="support" />
        <Route path="/super-admin" page={SuperAdminPage} name="superAdmin" />
        <Route path="/permissions" page={PermissionsPage} name="permissions" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
