import { Link } from "react-router-dom";
import Logo from "./Logo";

type NavItem = {
  name: string;
  link: string;
};

const navData: NavItem[] = [
  { name: "Домашня", link: "/" },
  { name: "Фільми", link: "/movies" },
  { name: "Улюблені", link: "/favorites" },
];

const Header: React.FC = () => {
  return (
    <header className="border-b flex justify-between px-10 py-4 bg-[#1A293A]">
      <div className="flex items-center gap-5">
        <Logo />

        <div>
          <ul className="flex gap-5 ">
            {navData.map(({ name, link }) => (
              <li key={link}>
                <Link
                  className="rounded-md px-3 py-1 bg-primary text-lg text-whiteColor"
                  to={link}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Link to="/login">Вхід</Link>
      </div>
    </header>
  );
};

export default Header;
