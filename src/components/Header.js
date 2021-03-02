import React from "react";

const Header = () => {
  return (
    <header className="h-40 bg-green-400">
      <div className="flex bg-green-200">
        <h1 className="flex-1 text-center">Logo</h1>
        <nav>
          <ul>
            <li>Newsletter</li>
            <li>Signin</li>
          </ul>
        </nav>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
