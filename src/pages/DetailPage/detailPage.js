import Header from "components/Header/header";
import SearchFilter from "components/SearchFilter/searchFilter";

function DetailPage({ searchOptions }) {
  return (
    <div className="DetailPage">
      <Header searchOptions={searchOptions}></Header>
      <SearchFilter></SearchFilter>
    </div>
  );
}

export default DetailPage;
