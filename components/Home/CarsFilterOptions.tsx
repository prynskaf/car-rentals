import React, { useEffect, useState } from "react";

const CarsFilterOptions = ({
  carsList,
  setFilteredBrand,
  orderFileredPriceList,
}: any) => {
  const [brandList, setBrandList] = useState<any>();

  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList, setFilteredBrand, orderFileredPriceList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      if (element.carBrand && typeof element.carBrand === "string") {
        BrandSet.add(element.carBrand.toLowerCase());
      }
    });
    console.log("From brandSet", BrandSet);
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5">
        <select
          className="select bg-white select-bordered w-full max-w-xs"
          onChange={(e) => orderFileredPriceList(e.target.value)}
        >
          <option disabled defaultValue={undefined}>
            Price
          </option>
          <option value={-1}> Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>

        <select
          className="select bg-white select-bordered w-full md:block max-w-xs hidden"
          onChange={(event) => {
            console.log("Selected Brand:", event.target.value);
            setFilteredBrand(event.target.value);
          }}
        >
          <option disabled defaultValue={undefined}>
            Manufacturer
          </option>
          {brandList &&
            brandList.map((brand: string, index: number) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFilterOptions;
