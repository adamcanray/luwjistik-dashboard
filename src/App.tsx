import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout, RequireAuth } from './components'
import NoMatch from './components/NoMatch'
import ThemedSuspenseFallback from './components/ThemedSuspenseFallback'
import { LogoutPage } from './pages'

const LoginPage = lazy(() => import('./pages/Login'))
const OverviewPage = lazy(() => import('./pages/Dashboard/Overview'))
const OrderPage = lazy(() => import('./pages/Dashboard/Order'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<ThemedSuspenseFallback />}>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
            <Route
              path="dashboard/*"
              element={
                <RequireAuth>
                  <Layout />
                </RequireAuth>
              }
            >
              <Route index element={<OverviewPage />} />
              <Route path="order" element={<OrderPage />} />
            </Route>
            <Route path="logout" element={<LogoutPage />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
