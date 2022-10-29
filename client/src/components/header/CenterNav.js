import NavLinks from "./NavLinks"

const CenterNav = () => {
  return (
    <nav className="navbar-center hidden lg:flex text-base-100">
        <ul className="menu menu-horizontal p-0 bg-primary">
            <NavLinks text={"Home"} link={"/"}/>
            <NavLinks text={"Pronunciation"} link={"/pronunciation"}/>
            <NavLinks text={"A to Z Index"} link={"/index"}/>
            <NavLinks text={"Chengyu by Topic"} link={"/topic"}/>
        </ul>
    </nav>
  )
}
export default CenterNav