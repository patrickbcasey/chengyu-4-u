import Logo from "./Logo"
import BurgerNav from "./BurgerNav"
import CenterNav from "./CenterNav"
import Search from "./Search"

const Header = () => {
  return (
    <header className="navbar bg-primary text-neutral-content justify-center">
        <BurgerNav/>
        <Logo/>
        <CenterNav/>
        <Search/>
    </header>
  )
}
export default Header