const Nav = ({ nav }) => {
  return (
    <div>
     
      <li className="mr-4">
        <a href={nav.path}>{nav.name}</a>
      </li>
    </div>
  );
};

export default Nav;
