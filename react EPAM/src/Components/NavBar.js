import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context";
import "../Style/NavBar.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Select from "./Select";
import Sort from "./Sort";

const Navbar = (props) => {
  const [show, handleShow] = useState(false);

  const {
    search,
    setSearch,
    selectedSort,
    setSelectedSort,
    listToShow,
    setListToShow,
    sortedFilms
  } = props;

  let history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const showProfile = (event) => {
    event.preventDefault();
    history.push("/profile");
  };

  // const getSearch = (e) => {
  //   e.preventDefault();
  //   setQuery(search);
  // };

  // const getMovies = async () => {
  //   const response = await axios.get("https://api.tvmaze.com/shows");
  //   setMovies(response.data);
  // };

  // const updateSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // useEffect(() => {
  //   getMovies();
  // }, [query]);

  // const sortMovies = (sort) => {
  //   // setSorted(movies);
  //   // setSelectedSort(sort);
  //   // setSortedByGenres(movies.filter((i) => i.genres.includes(sort)));
  //   setListToShow(listToShow.filter((i) => i.genres.includes(sort)));
  // };

  // const sortedFilms = () => {
  //   setListToShow(
  //     listToShow.sort((a, b) => b.rating.average - a.rating.average)
  //   );
  // };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  

  return (
    <div className={`nav ${show && "navBlack"}`}>
      <div className="navContent">
        <img
          className="logo"
          src="https://pngpress.com/wp-content/uploads/2020/04/Netflix-logo.png"
          alt=""
        />

        <input
          placeholder="Search"
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select
          value={selectedSort}
          onChange={setSelectedSort}
          defaultValue="All genres"
          options={[
            { value: "Family", name: "Family" },
            { value: "Drama", name: "Drama" },
            { value: "Comedy", name: "Comedy" },
            { value: "Horror", name: "Horror" },
            { value: "Action", name: "Action" },
            { value: "", name: "All genres" },
          ]}
        />
           <Sort 
          value={listToShow}
          onChange={setListToShow}
          className="ratingBtn" 
          onClick={sortedFilms}
          defaultValue="Sorting"
          options={[
            { value: "name", name: "By  name" },
            { value: "rating", name: "By rating" },
          ]}
        />
    
        <img
          onClick={showProfile}
          className="avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
