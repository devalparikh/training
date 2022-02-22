import react from "react";

const NavBar = ({ darkMode, setDarkMode }) => {
  const themeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className="navbar shadow-lg bg-neutral text-neutral-content">
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">DP Learning</span>
        </div>
        <div className="flex-1 justify-end px-2 mx-2">
          <div className="items-stretch hidden md:flex">
            <a className="btn btn-ghost btn-sm rounded-btn" href="/">
              Home
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn" href="#about">
              About
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
          </div>
          <input
            type="checkbox"
            checked={darkMode}
            className="ml-2 toggle toggle-sm"
            onChange={() => themeToggle()}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
