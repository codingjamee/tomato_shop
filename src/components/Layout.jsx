import "../styles/style.scss";
import Logo from "./Logo";

import Nav from "./Nav";
import Util from "./Util";
import UtilNav from "./UtilNav";

const Layout = () => {
  return (
    <div className="layout__wrapper">
      <header className="fixed head">
        <Util />
      </header>
      <aside className="aside fixed">
        <div className="aside__logo-wrapper">
          <Logo />
        </div>
        <div className="nav__wrapper">
          <Nav />
          <UtilNav />
        </div>
      </aside>
    </div>
  );
};

export default Layout;
