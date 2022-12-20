import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/authSelector';

const PublicRoute = () => {
  const tokenStatus = useSelector(selectToken);

  return tokenStatus ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
