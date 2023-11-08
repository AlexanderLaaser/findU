import React, { useState, useEffect } from "react";

interface Country {
  name: string;
  code: string;
}

const countries: Country[] = [{ name: "Afghanistan", code: "AF" }];

export default function Autocomplete() {
  const [filteredCountries, setFilteredCountries] =
    useState<Country[]>(countries);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // Dies wird beim ersten Rendern der Komponente ausgeführt
    renderOptions(countries);
  }, []);

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyword = (e.target as HTMLInputElement).value;
    setInputValue(keyword);
    setDropdownVisible(true);

    const filtered = countries.filter((c) =>
      c.name.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  const selectOption = (selectedOption: string) => {
    setInputValue(selectedOption);
    setDropdownVisible(false);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  // Um den Dropdown beim Klicken außerhalb zu verstecken
  useEffect(() => {
    const handleClickOutside = () => hideDropdown();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[100vh] bg-slate-200 flex justify-center items-center flex-col">
      <div className="w-96 relative">
        <input
          id="autocompleteInput"
          placeholder="Select country name"
          className="px-5 py-3 w-full border border-gray-300 rounded-md"
          onKeyUp={onKeyUp}
          value={inputValue}
        />
        {dropdownVisible && (
          <div
            id="dropdown"
            className="w-full h-60 border border-gray-300 rounded-md bg-white absolute overflow-y-auto"
          >
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                onClick={() => selectOption(country.name)}
                className="px-5 py-3 border-b border-gray-200 text-stone-600 cursor-pointer hover:bg-slate-100 transition-colors"
              >
                {country.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function renderOptions(countries: Country[]) {
  throw new Error("Function not implemented.");
}
