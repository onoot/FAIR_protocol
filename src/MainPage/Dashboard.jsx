import React, { useState } from "react";
import {
  PlusIcon,
  MacbookIcon,
  IphoneIcon,
  SamsungIcon,
  EarpodIcon,
  OrangeImage,
  PineappleImage,
  StawberryImage,
  AvocatImage,
  EyeIcon,
  EditIcon,
  DeleteIcon,
  search_whites,
  Dropdown,
  Union,
  Group,
  GU,
  Mint,
  AMint,
  APMint,
  NFT,
  NFT2,
  NFT3,
} from "../EntryFile/imagePath";
import { Table } from "antd";
import "antd/dist/antd.css";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";

const state = {
  series: [
    {
      name: "Sales",
      data: [50, 45, 60, 70, 50, 45, 60, 70],
    },
    {
      name: "Purchase",
      data: [-21, -54, -45, -35, -21, -54, -45, -35],
    },
  ],
  options: {
    colors: ["#28C76F", "#EA5455"],
    chart: {
      type: "bar",
      height: 300,
      stacked: true,

      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 280,
        options: {
          legend: {
            position: "bottom",
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 5,
        borderRadiusTop: 5,
      },
    },
    xaxis: {
      categories: [
        " Jan ",
        "feb",
        "march",
        "april",
        "may",
        "june",
        "july",
        "auguest",
      ],
    },
    legend: {
      position: "top",
    },
    fill: {
      opacity: 1,
    },
  },
};

const Dashboard = (props) => {
  const [activeTab, setActiveTab] = useState("users"); // добавляем состояние для хранения текущей вкладки

  // реализация таблиц оставлена отдельно, чтобы не засорять основной код
  const renderUsersTab = () => {
    return (
        <>
              {/* Button trigger modal */}
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-12 d-flex">
                  <div className="dash-count">
                    <div className="dash-counts">
                      <h4>100</h4>
                      <h5>Customers</h5>
                    </div>
                    <div className="dash-imgs">
                      <FeatherIcon icon="users" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 d-flex">
                  <div className="dash-count das1">
                    <div className="dash-counts">
                      <h4>100</h4>
                      <h5>Suppliers</h5>
                    </div>
                    <div className="dash-imgs">
                      <FeatherIcon icon="user-plus" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12 d-flex">
                  <div className="dash-count das3">
                    <div className="dash-counts">
                      <h4>105</h4>
                      <h5>Sales Invoice</h5>
                    </div>
                    <div className="dash-imgs">
                      <FeatherIcon icon="user-check" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card flex-fill">
                  <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                    <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                    <div className="graph-sets">
                      <div className="dropdown">
                        <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                          2022
                          <img src={Dropdown} alt="img" className="ms-2" />
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                        >
                          <li>
                            <Link to="#" className="dropdown-item">
                              2022
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              2021
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="dropdown-item">
                              2020
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Bar Chart</div>
                </div>
                <div className="card-body chart-set">
                  <div className="h-250" id="flotBar2" />
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Line Chart</div>
                </div>
                <div className="card-body chart-set">
                  <div className="h-250" id="flotLine1" />
                </div>
              </div>
        </>
    );
  };

  const renderRewardTab = () => {
    return (
        <>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-12 d-flex">
                <div className="dash-count">
                  <div className="dash-counts">
                    <h4>100</h4>
                    <h5>Customers</h5>
                  </div>
                  <div className="dash-imgs">
                    <img src={Union} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex">
                <div className="dash-count das1">
                  <div className="dash-counts">
                    <h4>100</h4>
                    <h5>Suppliers</h5>
                  </div>
                  <div className="dash-imgs">
                    <img src={Group} alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12 d-flex">
                <div className="dash-count das3">
                  <div className="dash-counts">
                    <h4>105</h4>
                    <h5>Sales Invoice</h5>
                  </div>
                  <div className="dash-imgs">
                    <img src={GU} alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card flex-fill">
                <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                  <div className="graph-sets">
                    <div className="dropdown">
                      <button
                          className="btn btn-white btn-sm dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                      >
                        2022
                        <img src={Dropdown} alt="img" className="ms-2" />
                      </button>
                      <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link to="#" className="dropdown-item">
                            2022
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            2021
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="dropdown-item">
                            2020
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">

                  </div>
                </div>
              </div>
            </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Line Chart</div>
              </div>
              <div className="card-body chart-set">
                <div className="h-250" id="flotLine1" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Donut Chart</div>
              </div>
              <div className="card-body chart-set">
                <div className="h-250" id="flotPie2" />
              </div>
            </div>
          </div>
        </>
    );
  };

  const renderTokensTab = () => {
    return (
        <>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Customers</h5>
                </div>
                <div className="dash-imgs">
                  <img src={NFT} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Suppliers</h5>
                </div>
                <div className="dash-imgs">
                  <img src={NFT2} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>105</h4>
                  <h5>Sales Invoice</h5>
                </div>
                <div className="noti" coint="154"></div>
                <div className="dash-imgs">
                  <img src={NFT3} alt="img" />
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}
          <div className="row">
            <div className="card flex-fill">
              <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                <div className="graph-sets">
                  <div className="dropdown">
                    <button
                        className="btn btn-white btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                      2022
                      <img src={Dropdown} alt="img" className="ms-2" />
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          2022
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          2020
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">

                </div>
              </div>
            </div>
          </div>
          <div className="card mb-6">
            <div className="card-body">
              <div className="card-body">
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={350}
                />
              </div>
            </div>
          </div>
          <div className="card mb-6">
            <div className="card-body">
              <div className="card-body">
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={350}
                />
              </div>
            </div>
          </div>
        </>
    );
  };

  const renderNftsTab = () => {
    return (
        <>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Customers</h5>
                </div>
                <div className="dash-imgs">
                  <img src={Mint} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Suppliers</h5>
                </div>
                <div className="dash-imgs">
                  <img src={AMint} alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>105</h4>
                  <h5>Sales Invoice</h5>
                </div>
                <div className="noti" coint="154"></div>
                <div className="dash-imgs">
                  <img src={APMint} alt="img" />
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}
          <div className="row">
            <div className="card flex-fill">
              <div className="card-header pb-0 d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                <div className="graph-sets">
                  <div className="dropdown">
                    <button
                        className="btn btn-white btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                      2022
                      <img src={Dropdown} alt="img" className="ms-2" />
                    </button>
                    <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          2022
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          2021
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          2020
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">

                </div>
              </div>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <div className="card-body">
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={350}
                />
              </div>
            </div>
          </div>
          <div className="card mb-0">
            <div className="card-body">
              <div className="card-body">
                <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={350}
                />
              </div>
            </div>
          </div>
        </>
    );
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
      <>
        <div className="page-wrapper">
          <Helmet>
            <title>Dreams Pos admin template</title>
            <meta name="description" content="Dashboard page" />
          </Helmet>
          <div className="content">
            <div className="dashboard">
              <h1>Dashboard</h1>
            </div>
            <div className="comp-sec-wrapper">
              <section className="comp-section">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card bg-white">
                      <div className="card-body">
                        <ul className="nav nav-tabs nav-tabs-solid">
                          <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeTab === "users" ? "active" : ""
                                }`}
                                href="#solid-tab1"
                                onClick={() => handleTabClick("users")}
                            >
                              Users
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeTab === "reward" ? "active" : ""
                                }`}
                                href="#solid-tab2"
                                onClick={() => handleTabClick("reward")}
                            >
                              Reward
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeTab === "tokens" ? "active" : ""
                                }`}
                                href="#solid-tab3"
                                onClick={() => handleTabClick("tokens")}
                            >
                              Tokens
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                                className={`nav-link ${
                                    activeTab === "nfts" ? "active" : ""
                                }`}
                                href="#solid-tab4"
                                onClick={() => handleTabClick("nfts")}
                            >
                              NFTs
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {activeTab === "users" ? (
                renderUsersTab()
            ) : activeTab === "reward" ? (
                renderRewardTab()
            ) : activeTab === "tokens" ? (
                renderTokensTab()
            ) : activeTab === "nfts" ? (
                renderNftsTab()
            ) : (
                <div>
                  <h3>Empty Tab</h3>
                </div>
            )}
            {/* остальной контент компонента */}
          </div>
        </div>
      </>
  );
};

export default Dashboard;
