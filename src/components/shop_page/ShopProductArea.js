import Cookie from "js-cookie";
import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars, FaList } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import GridProductCard from "../../utilities/GridProductCard";
import ListProductCard from "../../utilities/ListProductCard";
import ProductPagination from "../../utilities/ProductPagination";

export default function ShopProductArea({
  products_data,
  sidebaron,
  setsidebaron,
}) {
  const { handlePageClick, pageCount, currentItems } =
    ProductPagination(products_data);
  const layout_status = Cookie.get("layout_changer")
    ? JSON.parse(Cookie.get("layout_changer"))
    : true;
  const [grid, setGrid] = useState(layout_status);

  // handle grid layout
  const handleGridLayout = () => {
    Cookie.set("layout_changer", JSON.stringify(true));
    setGrid(true);
  };

  // handle list layout
  const handleListLayout = () => {
    Cookie.set("layout_changer", JSON.stringify(false));
    setGrid(false);
  };

  return (
    <div className="shop_product_area">
      <div className="shop_controller">
        <div className="view_type">
          <button
            className={
              sidebaron
                ? "layout_changer_btn_active lg:!hidden"
                : "layout_changer_btn lg:!hidden"
            }
            onClick={() => setsidebaron(true)}
          >
            <FaBars />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className={
              grid ? "layout_changer_btn_active" : "layout_changer_btn"
            }
            onClick={handleGridLayout}
          >
            <BsFillGridFill />
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className={
              !grid ? "layout_changer_btn_active" : "layout_changer_btn"
            }
            onClick={handleListLayout}
          >
            <FaList />
          </button>
        </div>
        <div className="product_sorting">
          <select id="product_sorting">
            <option value="1">Sort by popularity</option>
            <option value="2" defaultValue={1}>
              Sort by latest
            </option>
            <option value="3">Sort by average rating</option>
            <option value="4">Sort by price low to high</option>
            <option value="5">Sort by price high to low</option>
          </select>
        </div>
      </div>
      {grid ? (
        <div className="grid_shop_products">
          {currentItems?.map((product, i) => (
            <GridProductCard key={i} product_data={product} />
          ))}
        </div>
      ) : (
        <div className="list_shop_products">
          {currentItems?.map((product, i) => (
            <ListProductCard key={i} product_data={product} />
          ))}
        </div>
      )}
      {products_data?.length > 9 && (
        <div className="pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
}
