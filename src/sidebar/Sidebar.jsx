import { Close, FormatAlignJustify, Notes } from "@mui/icons-material";
import classes from "./Sidebar.module.css";
import { useContext, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [sidebarClosed, setSidebarclosed] = useState(false);
  // const [age, setAge] = useState('')

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [nameSelect, setNameSelect] = useState("Prposal");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (route) => {
    navigate(route);
    handleClose();
  };

  return (
    <>
      <div
        className={classes.sidebar}
        style={{ width: sidebarClosed ? "40px" : "15%" }}
      >
        <div
          onClick={() => setSidebarclosed((prev) => !prev)}
          className={classes.sidebarMenuIcon}
        >
          {sidebarClosed ? (
            <Notes />
          ) : (
            <CloseIcon sx={{ paddingLeft: "0px" }} />
          )}
        </div>
        <ul className={classes.sidebarList}>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <Notes />
            OEM Exception Summary
          </li>
          <li
            onClick={() => {
              navigate("/misReport");
            }}
          >
            <Notes />
            MIS Report
          </li>
          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
