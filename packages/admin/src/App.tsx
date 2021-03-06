import React, { Suspense, lazy, useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Route, Router, Switch, useRoute } from 'wouter'
import { axios, HOST, LOCAL_STORAGE_USER_INFO_KEY, PRIMARY_COLOR } from '@web/shared/constants'
import { UserContext } from '@web/shared/UserContext'
import { Auth } from '@web/shared/auth'
import { Layout } from './components/layout'
import './index.scss'

axios.interceptors.response.use(
  (response) => (response.err && toast.error(response.err), response),
  (response) => {
    response.err && toast.error(response.err)
    if (response.status === 401) {
      Auth.logout(`${HOST}/login?from=${location.href}`)
    }
    return response
  }
)

export const App: React.FC = () => {
  const [user, setUser] = useState<R.User | null>(null)
  const [[i], [u]] = [useRoute('/signin'), useRoute('/signup')]

  useEffect(() => {
    if (!(i || u)) {
      axios
        .get('/user')
        .then((_) => {
          if (!_.err) {
            setUser(_.data.user)
            localStorage.setItem(LOCAL_STORAGE_USER_INFO_KEY, JSON.stringify(_.data.user))
          }
        })
        .catch((_) => {
          !__DEV__ && setUser({ Name: '[[ERROR]]' } as R.User)
        })
    }
  }, [])

  if (user?.Name === '[[ERROR]]') return '[[ERROR]]' as any

  return (
    <>
      <UserContext.Provider value={user}>
        <Router>
          {/* @ts-ignore */}
          <Switch>
            <Layout>
              <Suspense fallback={null}>
                <Route path="/" component={lazy(() => import('./pages/home'))} />
                <Route
                  path="/video/upload"
                  component={lazy(() => import('./pages/uploader/video'))}
                />
                <Route
                  path="/video/:id/upload"
                  component={lazy(() => import('./pages/uploader/real-video'))}
                />
                <Route
                  path="/post/upload"
                  component={lazy(() => import('./pages/uploader/post'))}
                />
                <Route
                  path="/upload-manager"
                  component={lazy(() => import('./pages/upload-manager'))}
                />
                <Route path="/tag/manager" component={lazy(() => import('./pages/tag-manager'))} />
                <Route
                  path="/comment/manager"
                  component={lazy(() => import('./pages/comment-manager'))}
                />
                <Route
                  path="/user/manager"
                  component={lazy(() => import('./pages/user-manager'))}
                />
                <Route
                  path="/user/profile"
                  component={lazy(() => import('./pages/user-profile'))}
                />
              </Suspense>
            </Layout>
          </Switch>
        </Router>
      </UserContext.Provider>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: PRIMARY_COLOR,
              secondary: '#fff'
            }
          }
        }}
        containerStyle={{ top: 70 }}
      />
    </>
  )
}

export default App
