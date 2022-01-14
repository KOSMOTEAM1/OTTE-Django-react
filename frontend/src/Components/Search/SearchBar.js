import React, { useState } from "react";
import SearchModal from "../Modal/SearchModal";
import PropTypes from "prop-types";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  // console.log(data);
  // console.log("1");
  const handleFilter = (event) => {
    var text = "";
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // console.log("2");
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    console.log(newFilter);
    // console.log("3");

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  console.log(filteredData);
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <form className="search-model-form">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </form>
      {filteredData.length !== 0 && (
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="section-title">
                      <h4>검색결과</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredData.map((value) => {
              return (
                <div className="col-lg-3">
                  <SearchModal
                    id={value.otteid}
                    coverImg={value.poster_path}
                    title={value.title}
                    summary={value.overview}
                    release={value.release_date}
                    runtime={value.runtime}
                    naver={value.naverid}
                    imdb={value.imdbscore}
                    nation={value.original_language}
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

SearchBar.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default SearchBar;
