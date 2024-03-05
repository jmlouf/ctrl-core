import { NavLink } from "react-router-dom";

export function NavItem({ link }) {
  return (
    <li>
      <NavLink to={link.path}>{link.name}</NavLink>
    </li>
  );
}
