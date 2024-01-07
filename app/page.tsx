"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import CarsList from "@/components/Home/CarsList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlagContext";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToastMsg, setShowToastMsg] = useState<boolean>(false);

  useEffect(() => {
    getCarList_();
  }, []);

  const getCarList_ = async () => {
    const result: any = await getCarsList();
    // console.log(result);
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    console.log("Before Filtering - carsList:", carsList);
    console.log("Before Filtering - carsOrgList:", carsOrgList);

    const lowercaseBrand = brand.toLowerCase();

    const filterList = carsOrgList.filter((item: any) => {
      const lowercaseCarBrand = item.carBrand.toLowerCase();
      return lowercaseCarBrand === lowercaseBrand;
    });

    console.log("Filtering by brand:", brand);
    console.log("After Filtering:", filterList);

    setCarsList(filterList);
  };

  const orderFileredPriceList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  useEffect(() => {
    if (showToastMsg) {
      setTimeout(() => {
        setShowToastMsg(false);
      }, 4000);
    }
  }, [showToastMsg]);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider
        value={{ showToastMsg, setShowToastMsg }}
      >
        <Hero />
        <SearchInput />
        <CarsFilterOptions
          orderFileredPriceList={(value: string) =>
            orderFileredPriceList(value)
          }
          carsList={carsOrgList}
          setFilteredBrand={(value: string) => filterCarList(value)}
        />
        <CarsList carsList={carsList} />
        {showToastMsg ? (
          <ToastMsg msg={"Booking Created Successfully!"} />
        ) : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
