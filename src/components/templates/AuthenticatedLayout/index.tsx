import { Outlet } from "react-router-dom";

const isAuthenticated = false;

function AuthenticatedLayout() {
  if (!isAuthenticated) return <div>Not Authenticate</div>;

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthenticatedLayout
