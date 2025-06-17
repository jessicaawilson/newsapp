import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

export class NavBar extends Component {
  render() {

    let {toggle, isDarkMode, mode, mystyle} = this.props;

    return (
        <>
      <div>
            <nav className="navbar navbar-expand-lg navbar-collapse" id="navbarSupportedContent" style={mystyle}>
                <h1>this is made by jessica</h1>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${mode ? 'light' : 'dark'}`} to="/">NewsMonkey</Link>
                    <button className={`navbar-toggler btn btn-${mode ? 'light' : 'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" style={mystyle}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${mode ? 'light' : 'dark'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/buisness">Buisness</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${mode ? 'light' : 'dark'}`} to="/technologies">Technologies</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                        <button type="button" className={`btn btn-${mode ? 'light' : 'dark'}`} data-bs-toggle="button" aria-pressed="true" onClick={toggle}>Switch to {isDarkMode ? "Light" : "Dark"} Mode</button>
                        </form>
                    </div>
                </div>
            </nav>
      </div>
        </>
    );
  }
}

export default NavBar;
