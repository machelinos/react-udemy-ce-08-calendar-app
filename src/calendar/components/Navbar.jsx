import { useAuthStore } from '../../hooks/'

export const Navbar = () => {
  const { user, initLogout } = useAuthStore()

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand m-0">
        <i className="fas fa-calendar-alt d-inline-block"></i> {user.name}
      </span>

      <button className="btn btn-outline-danger" onClick={initLogout}>
        <i className="fas fa-sign-out-alt d-inline-block"></i> Sign out
      </button>
    </div>
  )
}
