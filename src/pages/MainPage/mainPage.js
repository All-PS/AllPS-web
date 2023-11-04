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
      <Mainheder></Mainheder>
      <ServiceIntro />
    </div>
  );
}

export default MainPage;
