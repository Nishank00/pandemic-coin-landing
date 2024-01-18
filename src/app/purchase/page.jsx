"use client";
import React, { useEffect, useState } from "react";
import ImageSlider from "../components/common/ImageSlider";

export default function Purchase() {
  const [selectedType, setSelectedType] = useState("FAMILY");
  const [selectedModel, setSelectedModel] = useState("SMALL FAMILY");
  const [kidAge, setKidAge] = useState([]);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState({
    adults: 0,
    kids: 0,
    seniorCitizens: 0,
  });

  const { adults, kids, seniorCitizens } = counts;

  const increment = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
    if (type === "kids") {
      setKidAge([...kidAge, 0]);
    }
  };

  const decrement = (type) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] > 0 ? prevCounts[type] - 1 : 0,
    }));

    if (type === "kids" && counts[type] > 0) {
      setKidAge(kidAge.slice(0, -1));
    }
  };

  const handleKidAgeChange = (index, action) => {
    const newKidAge = [...kidAge];
    if (action === "increment") {
      newKidAge[index]++;
      if (newKidAge[index] >= 18) {
        setCounts((prevCounts) => ({
          ...prevCounts,
          ["adults"]: prevCounts["adults"] + 1,
          ["kids"]: prevCounts["kids"] > 0 ? prevCounts["kids"] - 1 : 0,
        }));
        newKidAge.splice(index, 1);
      }
    } else if (action === "decrement") {
      newKidAge[index] = newKidAge[index] > 0 ? newKidAge[index] - 1 : 0;
    }
    setKidAge(newKidAge);
  };

  const calculateTotal = () => {
    const adultTotal = adults * 100000;
    const seniorCitizensTotal = seniorCitizens * 100000;
    let kidTotal = 0;
    kidAge.forEach((age) => {
      if (age >= 5) {
        kidTotal += 70000;
      } else if (age < 5) {
        kidTotal += 50000;
      }
    });

    setTotal(adultTotal + kidTotal + seniorCitizensTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [counts, kidAge]);

  const total_SF = adults + kids;
  const total_BF = adults + kids + seniorCitizens;
  const total_CP = adults;

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedModel("");
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);

    setCounts({
      adults: model === "COUPLES" ? 2 : 0,
      kids: 0,
      seniorCitizens: 0,
    });
    setKidAge([]);
  };

  const handleContactUs = () => {
    // Yaha link dalo
  };

  return (
    <div className="bg-pdc-d-gray h-fit w-[100%] flex md:pt-[96px] pt-0 flex-col md:flex-row">
      <div className=" md:sticky md:top-[96px] static h-full md:w-[60%] w-full">
        <ImageSlider />
      </div>
      <div className="h-full md:w-[40%] w-full md:p-[40px]">
        <div className="p-4">
          {/* CONFIGURATOR */}
          <div>
            <h1 className="text-xl font-bold font_nun mb-4 uppercase">
              FIND YOUR PERFECT PANDEMIC SHELTER
            </h1>
            <div className="flex gap-[20px] flex-wrap">
              <button
                type="button"
                onClick={() => handleTypeChange("FAMILY")}
                className={`h-[60px]  font-bold  w-fit px-4 font_cat rounded-[15px]  border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                  selectedType === "FAMILY"
                    ? "bg-[#BB1A37] text-white border-transparent "
                    : ""
                }`}
              >
                FAMILY
              </button>
            </div>
          </div>

          {selectedType === "FAMILY" && (
            <>
              <h2 className="text-xl font-bold font_nun my-4">MODEL</h2>
              <div className="flex space-x-4">
                <div className="flex  gap-[20px] flex-wrap">
                  <button
                    type="button"
                    onClick={() => handleModelChange("SMALL FAMILY")}
                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "SMALL FAMILY"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    SMALL FAMILY
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("BIG FAMILY")}
                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "BIG FAMILY"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    BIG FAMILY
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("COUPLES")}
                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "COUPLES"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    COUPLES
                  </button>
                </div>
              </div>

              {selectedModel === "BIG FAMILY" && (
                <>
                  <h2 className="text-xl font-bold font_nun my-4">MEMBERS</h2>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <p className="mx-2 w-[40%] B1">{`ADULT'S`}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => decrement("adults")}
                      >
                        -
                      </button>
                      <p className="mx-2 w-[30px] text-center">{adults}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => increment("adults")}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center mb-4">
                      <p className="mx-2 w-[40%] B1">{`KID'S`}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => decrement("kids")}
                      >
                        -
                      </button>
                      <p className="mx-2 w-[30px] text-center">{kids}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => increment("kids")}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center mb-4">
                      <p className="mx-2 w-[40%] B1">{`SENIOR CITIZEN'S`}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => decrement("seniorCitizens")}
                      >
                        -
                      </button>
                      <p className="mx-2 w-[30px] text-center">
                        {seniorCitizens}
                      </p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => increment("seniorCitizens")}
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-4 text-[20px]">
                      Total Members: {total_BF}
                    </p>
                  </div>
                </>
              )}
              {selectedModel === "SMALL FAMILY" && (
                <>
                  <h2 className="text-xl font-bold font_nun my-4">MEMBERS</h2>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <p className="mx-2 w-[40%] B1">{`ADULT'S`}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => decrement("adults")}
                      >
                        -
                      </button>
                      <p className="mx-2 w-[30px] text-center">{adults}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => increment("adults")}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex items-center mb-4">
                      <p className="mx-2 w-[40%] B1">{`KID'S`}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => decrement("kids")}
                      >
                        -
                      </button>
                      <p className="mx-2 w-[30px] text-center">{kids}</p>
                      <button
                        className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                        onClick={() => increment("kids")}
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-4 text-[20px]">
                      Total Members: {total_SF}
                    </p>
                  </div>
                </>
              )}
              {selectedModel === "COUPLES" && (
                <>
                  <h2 className="text-xl font-bold font_nun my-4">MEMBERS</h2>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-4">
                      <p className="mx-2 w-[40%] B1">{`ADULT'S`}</p>
                      <button
                        disabled
                        className="cursor-not-allowed mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37] bg-opacity-70"
                        onClick={() => decrement("adults")}
                      >
                        -
                      </button>
                      <p className="mx-2 w-[30px] text-center">{adults}</p>
                      <button
                        disabled
                        className="cursor-not-allowed mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37] bg-opacity-70"
                        onClick={() => increment("adults")}
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-4 text-[20px]">
                      Total Members: {total_CP}
                    </p>
                  </div>
                </>
              )}
              {kids > 0 && (
                <>
                  <div className={`${kids > 5 && `h-[250px]`} overflow-y-auto`}>
                    {kidAge.map((age, index) => (
                      <div
                        className="flex items-center mb-4 md:ml-10"
                        key={index}
                      >
                        <p className="mx-2 w-[40%] B1">{`KID ${
                          index + 1
                        }'s age`}</p>
                        <button
                          className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                          onClick={() => handleKidAgeChange(index, "decrement")}
                        >
                          -
                        </button>
                        <p className="mx-2 w-[30px] text-center">{age}</p>
                        <button
                          className="mx-2 px-4 py-2 rounded-[10px] bg-[#BB1A37]"
                          onClick={() => handleKidAgeChange(index, "increment")}
                        >
                          +
                        </button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {/* Contact Us section */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold font_nun">$ {total}</div>
            <div>
              <button
                onClick={handleContactUs}
                className="bg-[#BB1A37] text-white border-transparent font_cat font-bold  w-fit  rounded-[15px] px-4 py-2 "
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
