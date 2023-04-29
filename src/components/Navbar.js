import React from 'react';

export default function Navbar(){
    return (
        <div><nav className="navbar navbar-dark bg-success">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src="https://cdn.dribbble.com/users/198986/screenshots/1636722/movie.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            MovieApp
          </a>
        </div>
      </nav></div>
    )
}