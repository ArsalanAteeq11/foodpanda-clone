import React, { useState } from "react";
import FeaturedPressCard from "../components/Press/FeaturedPressCard";
import PressCard from "../components/Press/PressCard";
import FilterTags from "../components/Press/FilterTags";

const featuredArticle = {
  category: "MERCHANTS",
  date: "11 Dec 2025",
  title:
    "foodpanda strengthens merchant care with record onboarding milestone in Asia",
  image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80",
};

const pressReleases = [
  {
    id: 1,
    category: "APAC",
    title:
      "foodpanda strengthens merchant care with record onboarding milestone in Asia",
    date: "21.11.2025",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80",
  },
  {
    id: 2,
    category: "APAC",
    title:
      "foodpanda expands panda hearts community with 30% drop in rider accidents across Asia",
    date: "18.11.2025",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
  },
  {
    id: 3,
    category: "APAC",
    title:
      "foodpanda brings unmatched value to customers globally with one-of-a-kind ride-hailing partnerships across Asia",
    date: "17.11.2025",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80",
  },
  {
    id: 4,
    category: "SINGAPORE",
    title:
      "foodpanda Singapore strengthens support for delivery partners with new MOU with NDCA",
    date: "21.10.2025",
    image:
      "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=400&q=80",
  },
  {
    id: 5,
    category: "APAC",
    title: "foodpanda delivered 2024",
    date: "18.01.2025",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80",
  },
  {
    id: 6,
    category: "APAC",
    title:
      "foodpanda Partners with Fiservv to Enable More Streamlined and Secure Digital Payments Across Asia",
    date: "25.10.2025",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=400&q=80",
  },
  {
    id: 7,
    category: "SINGAPORE",
    title:
      "foodpanda Singapore launches inaugural Rider Safety Month with Traffic Police",
    date: "27.10.2025",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80",
  },
  {
    id: 8,
    category: "MALAYSIA",
    title:
      "foodpanda Malaysia launches 'Jelajah Panda' to provide accessible income opportunities",
    date: "9.10.2024",
    image:
      "https://images.unsplash.com/photo-1523294587484-bae6cc870010?w=400&q=80",
  },
  {
    id: 9,
    category: "CAMPAIGNS",
    title:
      "Finally, something in Your Yee foodpanda spices up neighbourhood with unlimited free deliveries",
    date: "3.08.2024",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: 10,
    category: "PHILIPPINES",
    title:
      "foodpanda Philippines partners with Jia to extend support to partner vendors",
    date: "10.07.2024",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
  },
  {
    id: 11,
    category: "SINGAPORE",
    title:
      "foodpanda Singapore awards $10,600 in bursaries to delivery partners",
    date: "30.07.2024",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
  },
  {
    id: 12,
    category: "APAC",
    title:
      "foodpanda partners with Cybersource to drive business growth in Asia Pacific through enhanced checkout experience",
    date: "16.07.2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
];

export default function PressReleases() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredArticles =
    activeFilter === "All"
      ? pressReleases
      : pressReleases.filter(
          (article) =>
            article.category.toLowerCase() === activeFilter.toLowerCase()
        );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Press Releases
        </h1>

        {/* Featured Article */}
        <div className="mb-12">
          <FeaturedPressCard article={featuredArticle} />
        </div>

        {/* Filter Tags */}
        <FilterTags
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedArticles.map((article) => (
            <PressCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-md font-medium transition-all ${
                currentPage === page
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
