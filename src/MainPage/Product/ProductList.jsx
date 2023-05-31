import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Table from "../../EntryFile/datatable"
import Tabletop from "../../EntryFile/tabletop"
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
  GU
} from "../../EntryFile/imagePath";
import Select2 from "react-select2-wrapper";
import "react-select2-wrapper/css/select2.css";
import {Helmet} from "react-helmet";
import FeatherIcon from "feather-icons-react";
import Chart from "react-apexcharts";

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

const ProductList = () => {

  const [expiredData] = useState([
    {
      key: 1,
      code: "IT001",
      image: OrangeImage,
      productName: "Orange",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "12-12-2022",
    },
    {
      key: 2,
      code: "IT002",
      image: PineappleImage,
      productName: "Pineapple",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "10-12-2022",
    },
    {
      key: 3,
      code: "IT003",
      image: StawberryImage,
      productName: "Stawberry",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "27-06-2022",
    },
    {
      key: 4,
      code: "IT004",
      image: AvocatImage,
      productName: "Avocat",
      brandName: "N/D",
      categoryName: "Fruits",
      expiryDate: "20-05-2022",
    },
  ]);

  const [recentData] = useState([
    { key: 1, image: EarpodIcon, products: "Apple Earpods", price: "$891.2" },
    { key: 2, image: IphoneIcon, products: "iPhone 11", price: "$91.2" },
    { key: 3, image: SamsungIcon, products: "Samsung", price: "$561.2" },
    { key: 4, image: MacbookIcon, products: "Macbook Pro", price: "$1009.2" },
  ]);

  const expiredProductColumns = [
    {
      title: "SNo",
      dataIndex: "key",
      sorter: (a, b) => a.key.length - b.key.length,
    },
    {
      title: "Product Code",
      dataIndex: "code",
      render: (text, record) => (
          <Link to="#" style={{ fontSize: "14px" }}>
            {text}
          </Link>
      ),
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      render: (text, record) => (
          <div className="productimgname">
            <Link to="#" className="product-img">
              <img alt="" src={record.image} />
            </Link>
            <Link to="#" style={{ fontSize: "14px" }}>
              {record.productName}
            </Link>
          </div>
      ),
      sorter: (a, b) => a.productName.length - b.productName.length,
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.brandName.length - b.brandName.length,
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.categoryName.length - b.categoryName.length,
    },
    {
      title: "Expiry Date",
      dataIndex: "expiryDate",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.expiryDate.length - b.expiryDate.length,
    },
  ];

  const recentDataColumns = [
    {
      title: "SNo",
      dataIndex: "key",
      sorter: (a, b) => a.key.length - b.key.length,
    },
    {
      title: "Products",
      dataIndex: "products",
      render: (text, record) => (
          <div className="productimgname">
            <Link to="#" className="product-img">
              <img alt="" src={record.image} />
            </Link>
            <Link to="#" style={{ fontSize: "14px" }}>
              {record.products}
            </Link>
          </div>
      ),
      sorter: (a, b) => a.products.length - b.products.length,
      width: "250px",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text, record) => <div style={{ fontSize: "14px" }}>{text}</div>,
      sorter: (a, b) => a.price.length - b.price.length,
    },
  ];




  return (
      <>
        <div className="page-wrapper">
          <Helmet>
            <title>Rewards</title>
            <meta name="description" content="Dashboard page" />
          </Helmet>
          <div className="content">
            <div className="dash-board">
              <h1>Rewards</h1>
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
                                className="nav-link active"
                                href="#solid-tab1"
                                data-bs-toggle="tab"
                            >
                              Users
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#solid-tab2"
                                data-bs-toggle="tab"
                            >
                              Reward
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#solid-tab3"
                                data-bs-toggle="tab"
                            >
                              Tokens
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#solid-tab3"
                                data-bs-toggle="tab"
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
          </div>
        </div>
      </>
  );
};
export default ProductList;
