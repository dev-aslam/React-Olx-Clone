import "./Header.css";
import { Logo } from "../../assets/Logo.jsx";
import { Search } from "../../assets/Search.jsx";
import { ArrowDown } from "../../assets/ArrowDown.jsx";
import { SellBtn } from "../../assets/SellBtn.jsx";
import { Plus } from "../../assets/Plus.jsx";
import { SubHeader } from "./SubHeader/SubHeader.jsx";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";

export function Header() {
  const { isLoggedIn, setIsLoggedIn, user_name } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="headerContainer">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <div className="location-search">
          <Search color="black" />
          <input type="text" value="India" />
          <ArrowDown />
        </div>
        <div className="mainSearchbar">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <div className="searchIcon">
            <Search color="white" />
          </div>
        </div>
        <div className="languageSelect">
          <div>ENGLISH</div>
          <div className="arrowContainer">
            <ArrowDown />
          </div>
        </div>
        <div className="loginContainer">
          {isLoggedIn ? (
            <>
              <div className="username">{user_name}</div>
              <div onClick={handleLogout} className="login ">
                Logout
              </div>
            </>
          ) : (
            <Link to="/login">
              <div className="login">Login</div>
            </Link>
          )}
        </div>
        <div className="sellBtnContainer">
          <SellBtn />
          <div className="sellBtn">
            <Plus />
            <span>SELL</span>
          </div>
        </div>
      </header>
      <div className="subHeaderContainer">
        <SubHeader />
      </div>
    </div>
  );
}
