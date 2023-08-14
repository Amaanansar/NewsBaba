import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


  // countryVal(ele){
  //   console.log(this)
  // }
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsBaba</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </Link>
                  <ul className="dropdown-menu" style={{maxHeight: "300px"}}>
                    <li><span onClick={this.countryVal('/ae')} className="dropdown-item">United Arab Emirates</span></li>
                    <li><span onClick={this.countryVal('/ar')} className="dropdown-item">Argentina</span></li>
                    <li><span onClick={this.countryVal('/au')} className="dropdown-item">Austria</span></li>
                    <li><span onClick={this.countryVal('/be')} className="dropdown-item">Belgium</span></li>
                    <li><span onClick={this.countryVal('/bg')} className="dropdown-item">Bulgaria</span></li>
                    <li><span onClick={this.countryVal('/br')} className="dropdown-item">Brazil</span></li>
                    <li><span onClick={this.countryVal('/ca')} className="dropdown-item">Canada</span></li>
                    <li><span onClick={this.countryVal('/ch')} className="dropdown-item">Switzerland</span></li>
                    <li><span onClick={this.countryVal('/cn')} className="dropdown-item">China</span></li>
                    <li><span onClick={this.countryVal('/co')} className="dropdown-item">Colombia</span></li>
                    <li><span onClick={this.countryVal('/cu')} className="dropdown-item">Cuba</span></li>
                    <li><span onClick={this.countryVal('/cz')} className="dropdown-item">Czechia</span></li>
                    <li><span onClick={this.countryVal('/de')} className="dropdown-item">Denmark</span></li>
                    <li><span onClick={this.countryVal('/eg')} className="dropdown-item">Egypt</span></li>
                    <li><span onClick={this.countryVal('/fr')} className="dropdown-item">France</span></li>
                    <li><span onClick={this.countryVal('/gb')} className="dropdown-item">United Kingdom</span></li>
                    <li><span onClick={this.countryVal('/gr')} className="dropdown-item">Greece</span></li>
                    <li><span onClick={this.countryVal('/hk')} className="dropdown-item">Hong Kong</span></li>
                    <li><span onClick={this.countryVal('/hu')} className="dropdown-item">Hungary</span></li>
                    <li><span onClick={this.countryVal('/ie')} className="dropdown-item">Ireland</span></li>
                    <li><span onClick={this.countryVal('/il')} className="dropdown-item">Israel </span></li>
                    <li><span onClick={this.countryVal('/in')} className="dropdown-item">India </span></li>
                    <li><span onClick={this.countryVal('/jp')} className="dropdown-item">Japan </span></li>
                    <li><span onClick={this.countryVal('/kr')} className="dropdown-item">South Korea </span></li>
                    <li><span onClick={this.countryVal('/lt')} className="dropdown-item">Lithuania </span></li>
                    <li><span onClick={this.countryVal('/lv')} className="dropdown-item">Latvia </span></li>
                    <li><span onClick={this.countryVal('/ma')} className="dropdown-item">Morocco </span></li>
                    <li><span onClick={this.countryVal('/mx')} className="dropdown-item">Mexico </span></li>
                    <li><span onClick={this.countryVal('/ng')} className="dropdown-item">Nigeria </span></li>
                    <li><span onClick={this.countryVal('/nl')} className="dropdown-item">Netherlands </span></li>
                    <li><span onClick={this.countryVal('/nz')} className="dropdown-item">New Zealand </span></li>
                    <li><span onClick={this.countryVal('/ph')} className="dropdown-item">Philippines </span></li>
                    <li><span onClick={this.countryVal('/pl')} className="dropdown-item">Poland </span></li>
                    <li><span onClick={this.countryVal('/pt')} className="dropdown-item">Portugal </span></li>
                  </ul>
                </li> */}
            </ul>
            </div>
        </div>
        </nav>
    )
  }
}

export default Navbar
