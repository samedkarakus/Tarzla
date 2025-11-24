import React, { useState } from "react";
import Dropdown from "../../../components/dropdown";

const SearchingArea = () => {
  const filters = [
    { label: "Kategori", options: [{ label: "Oversize", value: "oversize" }, { label: "Basic", value: "basic" }, { label: "Polo Yaka", value: "polo" }] },
    { label: "Marka", options: [{ label: "H&M", value: "hm" }, { label: "Zara", value: "zara" }, { label: "Pull&Bear", value: "pullbear" }] },
    { label: "Cinsiyet", options: [{ label: "Erkek", value: "men" }, { label: "Kadın", value: "women" }, { label: "Unisex", value: "unisex" }] },
    { label: "Beden", options: [{ label: "S", value: "s" }, { label: "M", value: "m" }, { label: "L", value: "l" }] },
    { label: "Renk", options: [{ label: "Siyah", value: "black" }, { label: "Beyaz", value: "white" }, { label: "Kırmızı", value: "red" }] },
    { label: "Fiyat Aralığı", options: [{ label: "0–250 TL", value: "0-250" }, { label: "250–500 TL", value: "250-500" }, { label: "500–1000 TL", value: "500-1000" }] },
  ];

  const sortOptions = [
    { label: "Önerilen", value: "recommended" },
    { label: "Fiyata Göre Artan", value: "price-asc" },
    { label: "Fiyata Göre Azalan", value: "price-desc" },
    { label: "En Yeni", value: "newest" },
    { label: "Popülerlik", value: "popular" },
  ];

  const [selectedValues, setSelectedValues] = useState(filters.map(() => ""));
  const [sortValue, setSortValue] = useState("");

  return (
    <div className="my-10 space-y-4 lg:max-w-8xl mx-auto">
      <h1 className="mx-12 text-brand font-semibold text-4xl">Tişörtler</h1>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mx-12">
        {/* Filtre dropdownları scrollable */}
        <div className="flex gap-4 py-2 md:flex-1">
          {filters.map((dd, idx) => (
            <Dropdown
              key={dd.label}
              label={dd.label}
              options={dd.options}
              selected={selectedValues[idx]}
              onSelect={(value) =>
                setSelectedValues((prev) => {
                  const newVals = [...prev];
                  newVals[idx] = value;
                  return newVals;
                })
              }
            />
          ))}
        </div>

        {/* Önerilen / Sıralama dropdown */}
        <div className="flex-shrink-0">
          <Dropdown
            label="Önerilen"
            options={sortOptions}
            selected={sortValue}
            onSelect={setSortValue}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchingArea;