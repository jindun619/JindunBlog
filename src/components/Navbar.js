import * as React from "react";
import { useEffect } from "react"
import { Link } from "gatsby";
import { Tag } from "./Tag";

function Navbar({data}) {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
      } else {
        document.querySelector(".navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    }
  })

  const {allMarkdownRemark} = data
  const tags = allMarkdownRemark.distinct.map((it, idx) => (
    <Link key={idx} to={`/tags/${it}`}>
      <li className="my-2">
        <Tag name={it} size="sm" />
      </li>
    </Link>
  ))

  const toggleTheme = () => {
    console.log("clicked")
    const curTheme = window.localStorage.getItem('theme')
    const newTheme = curTheme == 'dark' ? 'light' : 'dark'
    const newThemeName = newTheme == 'light' ? 'winter' : 'night'
    const whole_container = document.querySelector("html");
    whole_container.setAttribute('data-theme', newThemeName)
    window.localStorage.setItem('theme', newTheme)
  };

  return (
    <div className="navbar bg-primary sticky top-0 z-10">
      <div className="navbar-start">
        {/***********/}
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" tabIndex={0} className="btn btn-primary btn-circle drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 ml-0 w-80 min-h-full bg-base-200">
              <article className="prose m-5">
                <h1>
                  Tags<div className="badge badge-ghost">{allMarkdownRemark.totalCount}</div>
                </h1>
              </article>
              {/* <li><a className="no-underline">Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li> */}
              {tags}
            </ul>
          </div>
        </div>
      </div>
      {/**********/}
      <div className="navbar-center">
        <Link to="/" className="btn btn-primary normal-case text-xl">
          JINDUN
        </Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-primary btn-circle">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={toggleTheme}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={toggleTheme}
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </button>
      </div>
    </div>
  );
}

export { Navbar };
