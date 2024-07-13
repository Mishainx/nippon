"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import categoriesData from '../../../../src/data/categories.json'; // Importa el archivo JSON

export default function Categories({ params }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Filtramos la categoría correspondiente según params
    const category = categoriesData.find(cat => cat.href.includes(params.category));
    setSelectedCategory(category);
  }, [params.category]);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const container = document.getElementById("subcategories-container");
    if (container) {
      setIsOverflowing(container.scrollWidth > container.clientWidth);
    }
  }, [selectedCategory]);

  const handleScrollLeft = () => {
    const container = document.getElementById("subcategories-container");
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" }); // Ajusta este valor según el tamaño de las imágenes
      setScrollLeft(container.scrollLeft - 200);
    }
  };

  const handleScrollRight = () => {
    const container = document.getElementById("subcategories-container");
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" }); // Ajusta este valor según el tamaño de las imágenes
      setScrollLeft(container.scrollLeft + 200);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      {selectedCategory ? (
        <div className="w-full flex items-center justify-evenly px-4">
          <button
            onClick={handleScrollLeft}
            className="w-10 h-10 flex items-center justify-center p-2 bg-white rounded-full shadow-md z-10"
          >
            &#8249;
          </button>
          <div id="subcategories-container" className="flex space-x-6 p-2 overflow-x-auto scrollbar-hide me-4 md:me-0">
            {selectedCategory.subcategory.map(subcat => (
              <Link href={subcat.href} key={subcat.subCategoryId}>
                <button className="p-4 rounded-lg hover:bg-gray-200 hover:shadow-md">
                  <div className="flex flex-col">
                    <div className="relative w-24 h-24">
                      <Image
                        src={subcat.src}
                        fill={true}
                        alt={`${subcat.title} subcategory`}
                        className="hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                    </div>
                    <h3 className="mt-2 text-center">{subcat.title}</h3>
                  </div>
                </button>
              </Link>
            ))}
          </div>
          <button
            onClick={handleScrollRight}
            className="w-10 h-10 flex items-center justify-center p-2 bg-white rounded-full shadow-md z-10"
          >
            &#8250;
          </button>
        </div>
      ) : (
        <p>Category not found</p>
      )}
    </section>
  );
}
