import AllProducts from "../AllProducts/AllProducts";
import Loading from "../Loading/Loading";
import MainSlider from "../MainSlider/MainSlider";
import PopularCategories from "../PopularCategories/PopularCategories";

export default function Home() {
  return (
    <>
    <MainSlider/>
      <div className="my-8">
        <PopularCategories />
      </div>
      <div className="my-3">
        <AllProducts />
      </div>
    </>
  );
}
