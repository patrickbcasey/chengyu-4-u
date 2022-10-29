import NavLinks from "./NavLinks"

const BurgerNav = () => {
  return (
    <nav className="navbar-center lg:hidden">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                <NavLinks text={"Home"} link={"/"}/>
                <NavLinks text={"Pronunciation"} link={"/pronunciation"}/>
                <NavLinks text={"A to Z Index"} link={"/index"}/>
                <NavLinks text={"Chengyu by Topic"} link={"/topic"}/>
            </ul>
        </div>
    </nav>
  )
}
export default BurgerNav