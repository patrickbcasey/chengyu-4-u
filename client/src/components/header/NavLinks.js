const NavLinks = ({ text, link }) => {
    return (
      <li className="bg-secondary rounded-sm mx-4"><a href={link}>{text}</a></li>
    )
  }
export default NavLinks

