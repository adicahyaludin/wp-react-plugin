import { Outlet, Link } from "react-router-dom";
import { Menu, MenuItem } from "./Layout.style";

const Layout = () => {
  return (
    <>
      <Menu>
        <MenuItem>
          <Link to="/wp-react/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/wp-react/blogs">Blogs</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/wp-react/contact">Contact</Link>
        </MenuItem>
      </Menu>

      <Outlet />
    </>
  )
};

export default Layout;