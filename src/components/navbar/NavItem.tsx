import { Link } from "react-router-dom";

const NavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <li>
      <Link className="hover:underline font-semibold capitalize" to={href}>
        {label}
      </Link>
    </li>
  );
};

export default NavItem;
