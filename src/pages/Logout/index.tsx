import { Navigate } from 'react-router-dom'
import { logout_action } from '../../application/saga/auth'
import { useAppDispatch } from '../../application/store'

const LogoutPage = () => {
  const dispatch = useAppDispatch()
  dispatch(logout_action.logoutAction())

  return <Navigate to="/dashboard" />
}

export default LogoutPage
