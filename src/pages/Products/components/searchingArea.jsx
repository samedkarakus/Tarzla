import React, { useState } from "react";
import Dropdown from "../../../components/dropdown";
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';

const SearchingArea = ({ onFilterChange, onSortChange }) => {
  const filters = [
    { label: "Kategori", key: "category", options: [
      { label: "Oversize", value: "oversize" },
      { label: "Basic", value: "basic" },
      { label: "Polo Yaka", value: "polo" }
    ]},
    { label: "Marka", key: "brand", options: [
      { label: "H&M", value: "hm" },
      { label: "Zara", value: "zara" },
      { label: "Pull&Bear", value: "pullbear" }
    ]},
    { label: "Cinsiyet", key: "gender", options: [
      { label: "Erkek", value: "men" },
      { label: "Kadın", value: "women" },
      { label: "Unisex", value: "unisex" }
    ]},
    { label: "Beden", key: "size", options: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" }
    ]},
    { label: "Renk", key: "color", options: [
      { label: "Siyah", value: "black" },
      { label: "Beyaz", value: "white" },
      { label: "Kırmızı", value: "red" }
    ]},
    { label: "Fiyat Aralığı", key: "priceRange", options: [
      { label: "0–250 TL", value: "0-250" },
      { label: "250–500 TL", value: "250-500" },
      { label: "500–1000 TL", value: "500-1000" }
    ]},
  ];

  const sortOptions = [
    { label: "Önerilen", value: "recommended" },
    { label: "Fiyata Göre Artan", value: "price-asc" },
    { label: "Fiyata Göre Azalan", value: "price-desc" },
    { label: "En Yeni", value: "newest" },
    { label: "Popülerlik", value: "popular" },
  ];

  const [selectedValues, setSelectedValues] = useState(
    filters.reduce((acc, f) => ({ ...acc, [f.key]: "" }), {})
  );

  const [sortValue, setSortValue] = useState("recommended");

  const handleFilterChange = (key, value) => {
    const updated = { ...selectedValues, [key]: value };
    setSelectedValues(updated);
    onFilterChange?.(updated); // parent'a gönder
  };

  const handleSortChange = (value) => {
    setSortValue(value);
    onSortChange?.(value); // parent'a gönder
  };

  return (
    <div className="my-10 space-y-4 lg:max-w-8xl mx-auto">
      <h1 className="mx-12 text-brand font-semibold text-4xl">Tişörtler</h1>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mx-12">
        {/* Filtreler */}
        <div className="flex gap-4 py-2 md:flex-1">
          {filters.map((dd) => (
            <Dropdown
              key={dd.key}
              label={dd.label}
              options={dd.options}
              selected={selectedValues[dd.key]}
              onSelect={(value) => handleFilterChange(dd.key, value)}
            />
          ))}
        </div>

        {/* Sıralama */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Dropdown
            label="Önerilen"
            options={sortOptions}
            selected={sortValue}
            onSelect={handleSortChange}
            icon={ArrowsUpDownIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchingArea;