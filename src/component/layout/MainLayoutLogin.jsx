import { Outlet, Link } from "react-router-dom";

const MainLayoutLogin = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#EEE", padding: 10 }}>
        <div>BrandName</div>
        <div>
          <Link to="/login">Login </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayoutLogin;
