// import React from "react";
// import Header from "components/Header/header";
// import Logo from "assets/images/logo.png";
// import SearchBar from "components/Header/searchBar";
// import Dropdown from "components/Header/dropdowns";
// import ServiceIntro from "components/main/serviceIntro";

// function MainPage({ searchOptions }) {}

// export default MainPage;
import React, { useState } from "react";
import Header from "components/Header/header";
import Logo from "assets/images/logo.png";
import SearchBar from "components/Header/searchBar";
import Dropdown from "components/Header/dropdowns";
import ServiceIntro from "components/main/serviceIntro";
import Mainheder from "components/Header/mainheader";

function MainPage({ searchOptions }) {
  const [selectedOption, setSelectedOption] = useState(searchOptions[0]);

  return (
    <div className="flex flex-col items-center pb-32 min-h-screen">
      {/* <Header logo={Logo} /> */}
      <div className="flex items-center w-3/5 border-solid border-b pb-3 border-black mb-40 md:mb-48 max-w-[900px]">
        <Mainheder></Mainheder>
        {/* <SearchBar />
        <Dropdown
          options={searchOptions}
          selected={selectedOption}
          onSelect={setSelectedOption}
        /> */}
      </div>
      <ServiceIntro />
    </div>
  );
}

export default MainPage;
