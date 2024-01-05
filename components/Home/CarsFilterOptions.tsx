import React, { useEffect, useState } from "react";

const CarsFilterOptions = ({ carsList }: any) => {
  const [brandList, setBrandList] = useState<any>();

  const BrandSet = new Set();

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    carsList.forEach((element: any) => {
      BrandSet.add(element.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  };
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars catalog</h2>
        <h2>Explore our cars you might like</h2>
      </div>
      <div className="flex gap-5">
        <select className="select bg-white  select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select bg-white  select-bordered w-full md:block max-w-xs hidden">
          <option disabled selected>
            Manufactutural
          </option>
          <option>Honda</option>
          <option>BMW</option>
          <option>Toyoto</option>
        </select>
      </div>
    </div>
  );
};

export default CarsFilterOptions;
