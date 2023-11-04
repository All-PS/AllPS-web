import ServiceIntro from "pages/MainPage/serviceIntro";
import MainHeader from "pages/MainPage/mainHeader";

function MainPage({ searchOptions }) {

  return (
    <div className="flex flex-col items-center pb-32 min-h-screen">
      <MainHeader searchOptions={searchOptions}></MainHeader>
      <ServiceIntro />
    </div>
  );
}

export default MainPage;
