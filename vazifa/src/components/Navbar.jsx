import { useState } from "react";

const Navbar = ({ searchText, setSearch }) => {
  return (
    <header className="bg-gray-900">
      <nav
        style={styles.nav}
        className="nav__container container ml-auto mr-auto"
      >
        <div style={styles.logo}>MyBooks-App</div>
        <form style={styles.searchForm}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              value={searchText}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
            />
          </label>
        </form>
      </nav>
    </header>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "12px 24px",
    color: "#fff",
    marginBottom: "20px",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  searchForm: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  searchInput: {
    padding: "6px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  searchButton: {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "none",
    background: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Navbar;
