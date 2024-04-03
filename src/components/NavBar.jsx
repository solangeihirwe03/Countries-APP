import Bras from "./Bras";
import DesktopLogo from "./DesktopLogo";
import MobileLogo from "./MobileLogo";

const NavBar = () => {
  return (
   <div>
      <Link to='/'>
        < DesktopLogo />
        <MobileLogo />
      </Link>
      <NavLink to={'/'}><Bras /></NavLink>
   </div>
  );
}

export default NavBar
