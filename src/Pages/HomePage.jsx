import Categories from "../Components/Categories";
import Filters from "../Components/Filters";
import Products from "../Components/Products";
import Searchbar from "../Components/Searchbar";

const HomePage = () => {
  return (
    <div>
      <div className="mx-16 my-10">
        <div className="grid grid-cols-2">
          <Searchbar></Searchbar>
          <Filters></Filters>
        </div>
        <div>
          <Categories></Categories>
        </div>
        <div>
            <Products></Products>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
