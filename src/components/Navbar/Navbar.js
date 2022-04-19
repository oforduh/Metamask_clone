import React, { useReducer } from "react";
import styles from "./navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeObject } from "../../context/themeContext";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
//   const navigate = useNavigate();
  const { toggleTheme, theme } = ThemeObject();
  console.log({ toggleTheme, theme });
  const reducer = (state, action) => {
    switch (action.type) {
      case "toggleNavIcon":
        return {
          toggleNav: !state.toggleNav,
          toggleVerticalBar: state.toggleVerticalBar,
        };
      case "toggleVerticalBar":
        return {
          toggleNav: state.toggleNav,
          toggleVerticalBar: !state.toggleVerticalBar,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    toggleNav: false,
    toggleVerticalBar: false,
  });

  return (
    <div className={styles.navbarParentDiv}>
      <div className={styles.horizontalBar}>
        <div className={styles.logoContainer}>
          <div className={styles.logoItem}></div>
          <div className={styles.logoText}>Metamask</div>
        </div>
        <div className={styles.listContent}>
          <div className={styles.listItems}>
            <button
              onClick={() => {
                window.location.replace("https://metamask.io/download");
              }}
            >
              Download
            </button>
            <ToggleSwitch label={theme === true ? "Light Mode" : "Dark Mode"} />
          </div>

          <div
            onClick={() => {
              dispatch({ type: "toggleNavIcon" });
              dispatch({ type: "toggleVerticalBar" });
            }}
            className={styles.navIcons}
          >
            {!state.toggleNav ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </div>
        </div>
      </div>
      <div className={styles.verticalBar}></div>
    </div>
  );
};

export default Navbar;
