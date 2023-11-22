import ServiceIntro from "pages/MainPage/serviceIntro";
import MainHeader from "pages/MainPage/mainHeader";

function MainPage({ searchTypes }) {

  return (
    <div className="flex flex-col items-center pb-32 min-h-screen">
      <MainHeader searchTypes={searchTypes}></MainHeader>
      <ServiceIntro />
    </div>
  );
}

export default MainPage;
