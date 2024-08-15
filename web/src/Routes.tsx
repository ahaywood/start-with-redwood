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
        <Route path="/admin/my-account" page={MyAccountPage} name="myAccount" />
        <Route path="/admin/purchases" page={PurchasesPage} name="purchases" />
        <Route path="/admin/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/admin/groups" page={GroupsPage} name="groups" />
        <Route path="/admin/assets" page={AssetsPage} name="assets" />
        <Route path="/admin/customers" page={CustomersPage} name="customers" />
        <Route path="/admin/subscriptions" page={SubscriptionsPage} name="subscriptions" />
        <Route path="/admin/products" page={ProductsPage} name="products" />
        <Route path="/admin/users" page={UsersPage} name="users" />
        <Route path="/admin/support" page={SupportPage} name="support" />
        <Route path="/admin/super-admin" page={SuperAdminPage} name="superAdmin" />
        <Route path="/admin/permissions" page={PermissionsPage} name="permissions" />
      </PrivateSet>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
