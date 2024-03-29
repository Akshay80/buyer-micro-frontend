"use client";

import { algolia } from "../../libs/helper/src/lib/helper";
import { useEffect, useState } from "react";

const SearchProduct = () => {
  const [products, setProducts] = useState<any>();
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    handleGetProduct();
  }, [search]);

  const handleGetProduct = async () => {
    if (search) {
      let searchProductData: any = await algolia
        .initIndex("product")
        .search(search, {
          hitsPerPage: 10,
          page: 0,
        });
      setProducts(searchProductData?.hits);
    } else {
      setProducts([]);
    }
  };

  const handleGotoProduct = (productId: string) => {
    window.location.href = `/product/${productId}`;
  };

  return (
    <section>
      <form action="#">
        <div className="input-group ">
          <input
            className="form-control rounded"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
          />
          <span className="input-group-append">
            <button
              className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </button>
          </span>
        </div>
        {products?.length > 0 && (
          <section
            className="rounded"
            style={{
              maxHeight: "150px",
              overflowY: "auto",
              border: "1px solid #ccc",
            }}
          >
            {products?.map((item: any, index: number) => (
              <div
                className="py-1 cursor-pointer px-2 text-dark m-0"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
                  fontSize: "15px",
                }}
                key={index}
                onClick={() => handleGotoProduct(item?.id)}
              >
                {item?.name}
              </div>
            ))}
          </section>
        )}
      </form>
    </section>
  );
};

export default SearchProduct;
