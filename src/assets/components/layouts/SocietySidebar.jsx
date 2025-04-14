import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { SocietyNavbar } from "./SocietyNavbar";
import "../../components/addflat.css";


export const SocietySidebar = () => {
  //for closing sidebar...
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("toggleSidebar");
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <SocietyNavbar toggleSidebar={toggleSidebar} />
      <aside
        className={`app-sidebar bg-body-secondary shadow ${
          isSidebarOpen ? "open" : "d-none"
        }`}
        data-bs-theme="dark"
      >
        <div className="sidebar-brand">
          <a href="./index.html" className="brand-link">
            <img
              src="../../dist/assets/img/AdminLTELogo.png"
              // alt="AdminLTE Logo"
              className="brand-image opacity-75 shadow"
            />

            <span className="brand-text fw-light"> E-Society</span>
          </a>
        </div>

        <div
          className=""
          data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
          tabIndex={-1}
          style={{
            marginRight: "-16px",
            marginBottom: "-16px",
            marginLeft: 0,
            top: "-8px",
            right: "auto",
            left: "-8px",
            width: "calc(100% + 16px)",
            padding: 8,
          }}
        >
          <nav className="mt-2">
            <ul
              className="nav sidebar-menu flex-column"
              data-lte-toggle="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                                        <Link to="mysociety" className="nav-link active" >
                                          <i className="nav-icon bi bi-speedometer" />
                                          <p className="">
                                          <span className="light">My Society</span>
                                            <i className="nav-arrow bi bi-chevron-right" />
                                          </p>
                                        </Link>
                                        <ul className="nav nav-treeview">
                                          <li className="nav-item">
                                            <Link to="addflat" className="nav-link active">
                                              <i className="nav-icon bi bi-speedometer" />
                                              <p className="light">
                                                My Flat
                                                <i className="nav-arrow bi bi-chevron-right" />
                                              </ p>
                                            </Link>
                                          </li>
                                        </ul>
                                        <ul className="nav nav-treeview">
                                          <li className="nav-item">
                                            <Link to="securityguard" className="nav-link active">
                                              <i className="nav-icon bi bi-speedometer" />
                                              <p className="light">
                                                Security Guard
                                                <i className="nav-arrow bi bi-chevron-right" />
                                              </ p>
                                            </Link>
                                          </li>
                                        </ul>
                                        <ul className="nav nav-treeview">
                                          <li className="nav-item">
                                            <Link to="payment" className="nav-link active">
                                              <i className="nav-icon bi bi-speedometer" />
                                              <p className="light">
                                              payment
                                                <i className="nav-arrow bi bi-chevron-right" />
                                              </ p>
                                            </Link>
                                          </li>
                                        </ul>
                                      </li>
                                      
                                      <li className="nav-item">
                                        <Link to="complaint" className="nav-link">
                                          <i className="nav-icon bi bi-box-seam-fill" />
                                          <p className="light">
                                            Complaint
                                            <i className="nav-arrow bi bi-chevron-right" />
                                          </p>
                                        </Link>
                                        
                                      </li>
              
            </ul>
          </nav>
        </div>
      </aside>
      <main className="app-main">
        <Outlet></Outlet>
      </main>
    </>
  );
};