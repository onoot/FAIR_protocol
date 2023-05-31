import React, { useEffect, useState } from "react";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import {
  Dashboard,
  Expense,
  People,
  Places,
  Product,
  Time,
  Users1,
  settings,
  Purchase,
  Quotation,
  Return,
  Transfer,
  Sales1, Tokens, NFTs,
} from "../../EntryFile/imagePath";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import FeatherIcon from "feather-icons-react";

const Sidebar = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [path, setPath] = useState("");
  const history = useHistory();

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };
  const pageRefresh = (url, page) => {
    history.push(`/dream-pos/${url}/${page}`);
    window.location.reload();
  };
  const location = useLocation();
  let pathname = location.pathname;
  useEffect(() => {
    document.querySelector(".main-wrapper").classList.remove("slide-nav");
    document.querySelector(".sidebar-overlay").classList.remove("opened");
    document.querySelector(".sidebar-overlay").onclick = function () {
      this.classList.remove("opened");
      document.querySelector(".main-wrapper").classList.remove("slide-nav");
    };
  }, [pathname]);

  return (
    <div className="sidebar" id="sidebar">
        <Scrollbars>
          <div className="sidebar-inner slimscroll">
            <div
              id="sidebar-menu"
              className="sidebar-menu"
              onMouseLeave={expandMenu}
              onMouseOver={expandMenuOpen}
            >
              <ul>
                <li className={pathname.includes("dashboard") ? "active" : ""}>
                  <Link
                    to="/dream-pos/dashboard"
                    onClick={() => toggleSidebar(isSideMenu == "" ? "" : "")}
                  >
                    <img src={Dashboard} alt="img" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="submenu">
                  <a
                    href="#"
                    className={
                      pathname.includes("/dream-pos/product")
                        ? "active subdrop"
                        : "" || isSideMenu == "product"
                        ? "subdrop active"
                        : ""
                    }
                    onClick={() =>
                      toggleSidebar(isSideMenu == "product" ? "" : "product")
                    }
                  >
                    <img src={Product} alt="img" />
                    <span> Rewards </span> <span className="menu-arrow" />
                  </a>
                  {isSideMenu == "product" ? (
                    <ul className="sidebar-ul">
                      <li>
                        <Link
                          className={
                            pathname.includes("productlist-") ? <img src={Product} alt="img" /> : ""
                          }
                          to="/dream-pos/product/productlist-product"
                        >
                          <span> Rewards </span>
                        </Link>
                      </li>

                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <Link
                      to="#"
                      className={
                        pathname.includes("/dream-pos/users")
                            ? "subdrop active"
                            : "" || isSideMenu == "Users"
                                ? "subdrop active"
                                : ""
                      }
                      onClick={() =>
                          toggleSidebar(isSideMenu == "Users" ? "" : "Users")
                      }
                  >
                    <img src={Users1} alt="img" />
                    <span> Users</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Users" ? (
                      <ul>
                        <li>
                          <Link
                              to="/dream-pos/users/userlists"
                              className={
                                pathname.includes("userlists") ? "active" : ""
                              }
                          >
                            Users List
                          </Link>
                        </li>
                      </ul>
                  ) : (
                      ""
                  )}
                </li>

                <li className="submenu">
                  <a
                    href="#"
                    className={
                      pathname.includes("/dream-pos/expense")
                        ? "subdrop active"
                        : "" || isSideMenu == "expense"
                        ? "subdrop active"
                        : ""
                    }
                    onClick={() =>
                      toggleSidebar(isSideMenu == "expense" ? "" : "expense")
                    }
                  >
                    {" "}
                    <img src={NFTs} alt="img" />
                    <span>NFT`s</span>{" "}
                    <span className="menu-arrow"></span>
                  </a>
                  {isSideMenu == "expense" ? (
                    <ul>
                      <li>
                        <Link
                          className={
                            pathname.includes("expenselist-") ? "active" : ""
                          }
                          to="/dream-pos/expense/expenselist-expense"
                        >
                          Expense List
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("addexpense-") ? "active" : ""
                          }
                          to="/dream-pos/expense/addexpense-expense"
                        >
                          Add Expense
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            pathname.includes("expensecategory-")
                              ? "active"
                              : ""
                          }
                          to="/dream-pos/expense/expensecategory-expense"
                        >
                          Expense Category
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={
                      pathname.includes("/dream-pos/charts")
                        ? "subdrop active"
                        : "" || isSideMenu == "Charts"
                        ? "subdrop active"
                        : ""
                    }
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Charts" ? "" : "Charts")
                    }
                  >
                    <img src={Tokens} alt="img"/>
                    <span> Tokens</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Charts" ? (
                    <ul>
                      <li>
                        <Link
                          to="/dream-pos/charts/chart-apex"
                          className={
                            pathname.includes("chart-apex") ? "active" : ""
                          }
                        >
                          Apex Charts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/charts/chart-js"
                          className={
                            pathname.includes("chart-js") ? "active" : ""
                          }
                          onClick={(e) => pageRefresh("charts", "chart-js")}
                        >
                          Chart Js
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/charts/chart-morris"
                          className={
                            pathname.includes("chart-morris") ? "active" : ""
                          }
                        >
                          Morris Charts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/charts/chart-flot"
                          className={
                            pathname.includes("chart-flot") ? "active" : ""
                          }
                          onClick={(e) => pageRefresh("charts", "chart-flot")}
                        >
                          Flot Charts
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/charts/chart-peity"
                          className={
                            pathname.includes("chart-peity") ? "active" : ""
                          }
                          onClick={(e) => pageRefresh("charts", "chart-peity")}
                        >
                          Peity Charts
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={
                      pathname.includes("/dream-pos/application")
                        ? "subdrop active"
                        : "" || isSideMenu == "Application"
                        ? "subdrop active"
                        : ""
                    }
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "Application" ? "" : "Application"
                      )
                    }
                  >
                    <img src={Product} alt="img" />
                    <span> Application</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Application" ? (
                    <ul>
                      <li>
                        <Link
                          to="/dream-pos/application/chat"
                          className={pathname.includes("chat") ? "active" : ""}
                        >
                          Chat
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/application/calendar"
                          className={
                            pathname.includes("calendar") ? "active" : ""
                          }
                        >
                          Calendar
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/application/email"
                          className={pathname.includes("email") ? "active" : ""}
                        >
                          Email
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={
                      pathname.includes("/dream-pos/settings")
                        ? "subdrop active"
                        : "" || isSideMenu == "Settings"
                        ? "subdrop active"
                        : ""
                    }
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Settings" ? "" : "Settings")
                    }
                  >
                    <img src={settings} alt="img" />
                    <span> Settings</span> <span className="menu-arrow" />
                  </Link>
                  {isSideMenu == "Settings" ? (
                    <ul>
                      <li>
                        <Link
                          to="/dream-pos/settings/generalsettings"
                          className={
                            pathname.includes("generalsettings") ? "active" : ""
                          }
                        >
                          General Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/settings/emailsettings"
                          className={
                            pathname.includes("emailsettings") ? "active" : ""
                          }
                        >
                          Email Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/settings/paymentsettings"
                          className={
                            pathname.includes("paymentsettings") ? "active" : ""
                          }
                        >
                          Payment Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/settings/currencysettings"
                          className={
                            pathname.includes("currencysettings")
                              ? "active"
                              : ""
                          }
                        >
                          Currency Settings
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/settings/grouppermissions"
                          className={
                            pathname.includes("permission") ? "active" : ""
                          }
                        >
                          Group Permissions
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dream-pos/settings/taxrates"
                          className={
                            pathname.includes("taxrates") ? "active" : ""
                          }
                        >
                          Tax Rates
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
  );
};

export default withRouter(Sidebar);
