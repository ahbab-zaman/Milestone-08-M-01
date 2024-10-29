import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import Nav from "./Nav";
import { useState } from "react";
const Navbar = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Products", path: "/products" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <RxCross1></RxCross1> : <FiMenu></FiMenu>}
      </div>
      <ul className={`p-5 md:static absolute duration-500 md:flex ${open ? "left-4" : "-left-52"}`}>
        {navLinks.map((nav) => (
          <Nav nav={nav}></Nav>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
