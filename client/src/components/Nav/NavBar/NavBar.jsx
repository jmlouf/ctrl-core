import { NavItem } from "../NavItem";
import "./NavBar.css";

export default function NavBar() {
  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Login",
      path: "/login"
    },
    {
      name: "Signup",
      path: "/signup"
    }
  ];

  return (
    <nav className='navbar'>
      <h1 className='logo'>ctrl-core Logo</h1>
      <ul>
        {navLinks.map((link) => (
          <NavItem key={link.name} link={link} />
        ))}
      </ul>
    </nav>
  );
}
