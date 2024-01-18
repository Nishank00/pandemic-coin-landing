"use client";
import React, { useState } from "react";
import ImageSlider from "../components/common/ImageSlider";

export default function Purchase() {
  const [selectedType, setSelectedType] = useState("FAMILY");
  const [selectedModel, setSelectedModel] = useState("SMALL FAMILY");
  // const [selectedSize, setSelectedSize] = useState('');
  // const [selectedService, setSelectedService] = useState("");
  const [kidAge, setKidAge] = useState([]);

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
      if (newKidAge[index] >= 5) {
        console.log("Hello");
      }
    } else if (action === "decrement") {
      newKidAge[index] = newKidAge[index] > 0 ? newKidAge[index] - 1 : 0;
      if (newKidAge[index] < 5) {
        console.log("World");
      }
    }
    setKidAge(newKidAge);
  };

  const total_BF = adults + kids + seniorCitizens;
  const total_SF = adults + kids;
  const total_CP = adults;
  const totalMembers = adults + kids + seniorCitizens;

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSelectedModel("");
    // setSelectedSize('');
    setSelectedService("");
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setSelectedService("");

    setCounts({
      adults: model === "COUPLES" ? 2 : 0,
      kids: 0,
      seniorCitizens: 0,
    });
  };

  // const handleSizeChange = (size) => {
  //     setSelectedSize(size);
  //     setSelectedService('');
  // };

  const handleAdditionalServiceChange = (service) => {
    setSelectedService(service);
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
              {/* <button
                type="button"
                onClick={() => handleTypeChange("PUBLIC")}
                className={`h-[60px] font_cat font-bold  w-fit px-4 rounded-[15px] border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                  selectedType === "PUBLIC"
                    ? "bg-[#BB1A37] text-white border-transparent "
                    : ""
                }`}
              >
                PUBLIC
              </button> */}
              {/* <button
                type="button"
                onClick={() => handleTypeChange("MILITARY")}
                className={`h-[60px] font_cat font-bold  w-fit px-4 rounded-[15px] border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                  selectedType === "MILITARY"
                    ? "bg-[#BB1A37] text-white border-transparent "
                    : ""
                }`}
              >
                MILITARY
              </button> */}
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
              {/* <h2 className="text-xl font-bold font_nun my-4">SIZE</h2>
                            <div className="flex  gap-[20px] flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('15м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '15м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    15м²
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('31м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '31м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    31м²
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('46м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '46м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    46м²
                                </button>
                            </div> */}
            </>
          )}

          {selectedType === "PUBLIC" && (
            <>
              <h2 className="text-xl font-bold font_nun my-4">MODEL</h2>
              <div className="flex space-x-4">
                <div className="flex  gap-[20px] flex-wrap">
                  <button
                    type="button"
                    onClick={() => handleModelChange("P32")}
                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "P32"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    P32
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("P60")}
                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "P60"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    P60
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("P80")}
                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "P80"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    P80
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("P100")}
                    className={`h-[60px] px-4 font_cat  rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "P100"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    P100
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("IT MODULE")}
                    className={`px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "IT MODULE"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    IT MODULE
                  </button>
                </div>
              </div>

              {/* <h2 className="text-xl font-bold font_nun my-4">SIZE</h2>
                            <div className="flex  gap-[20px] flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('35,77м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '35,77м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    35,77м²
                                </button>
                            </div> */}
            </>
          )}

          {selectedType === "MILITARY" && (
            <>
              <h2 className="text-xl font-bold font_nun my-4">MODEL</h2>
              <div className="flex space-x-4">
                <div className="flex gap-[20px] flex-wrap">
                  <button
                    type="button"
                    onClick={() => handleModelChange("SBUA FirstAid")}
                    className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "SBUA FirstAid"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    SBUA FirstAid
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("SBUA Strategic")}
                    className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "SBUA Strategic"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    SBUA Strategic
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("SBUA Casern")}
                    className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "SBUA Casern"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    SBUA Casern
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModelChange("SBUA Bath")}
                    className={`whitespace-nowrap h-[60px] uppercase px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                      selectedModel === "SBUA Bath"
                        ? "bg-[#BB1A37] text-white border-transparent"
                        : ""
                    }`}
                  >
                    SBUA Bath
                  </button>
                </div>
              </div>

              {/* <h2 className="text-xl font-bold font_nun my-4">SIZE</h2>
                            <div className="flex  gap-[20px] flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => handleSizeChange('29,84м²')}
                                    className={`h-[60px] px-4 font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${selectedSize === '29,84м²' ? 'bg-[#BB1A37] text-white border-transparent' : ''
                                        }`}
                                >
                                    29,84м²
                                </button>
                            </div> */}
            </>
          )}

          {/* SERVICES */}
          {/* <div>
            <h2 className="text-xl font-bold font_nun mt-4">
              ADDITIONAL SERVICES
            </h2>
            <p className="mb-2 text-gray-300">
              The final price of additional services depends on consultation
              with a personal manager
            </p>

            {/* Two radio button options */}
          {/* <div className="flex justify-between">
              <div className="flex flex-col gap-[20px]">
                <button
                  type="button"
                  onClick={() =>
                    handleAdditionalServiceChange("Geodetic project")
                  }
                  className={`h-fit w-full p-[20px] font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                    selectedService === "Geodetic project"
                      ? "bg-[#BB1A37] text-white border-transparent"
                      : ""
                  }`}
                >
                  <div className="flex text-xl font-bold font_nun justify-between">
                    <div className="uppercase text-start">Geodetic project</div>
                    <p className="text-xl font-bold">$2000</p>
                  </div>

                  <p
                    className={`text-sm transition-all duration-500 ease-in-out  text-start mt-[5px] ${
                      selectedService === "Geodetic project"
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    finished product + project (soils, groundwater &
                    communication networks investigation)
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleAdditionalServiceChange("Turnjey solution")
                  }
                  className={`h-fit w-full p-[20px] font_cat rounded-[15px] font-bold border-[0.1px] border-dotted transition-all duration-500 ease-in-out border-gray-300 ${
                    selectedService === "Turnjey solution"
                      ? "bg-[#BB1A37] text-white border-transparent"
                      : ""
                  }`}
                >
                  <div className="flex text-xl font-bold font_nun justify-between">
                    <div className="uppercase text-start">Turnjey solution</div>
                    <p className="text-xl font-bold">$5000</p>
                  </div>

                  <p
                    className={`text-sm transition-all duration-500 ease-in-out  text-start mt-[5px] ${
                      selectedService === "Turnjey solution"
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    turnkey product solution (we deliver a project, geodesy and
                    installation work)
                  </p>
                </button>
              </div>
            </div> 
          </div> */}
        </div>
        {/* Contact Us section */}

        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold font_nun">
              $ {totalMembers * 100000}
            </div>
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
