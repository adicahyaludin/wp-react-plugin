import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/wp-react/">Home</Link>
          </li>
          <li>
            <Link to="/wp-react/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/wp-react/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;