"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

const CategoriesNav = () => {
  const categories = [
    {
      categoryId: 1,
      title: 'Gaming',
      src: "/category/gaming.png",
      href: "./categories/gaming",
      subcategory: [
        { 
          title: 'joysticks', 
          subCategoryId: 1, 
          src: '/subcategories/joystick.png', 
          href: './categories/gaming/joysticks',
          types: [
            { typeId: 1, title: 'ps1', src: "/subcategory/joysticks/ps1.png", href: "./categories/gaming/joysticks/ps1" },
            { typeId: 2, title: 'ps2', src: "/subcategory/joysticks/ps2.png", href: "./categories/gaming/joysticks/ps2" },
            { typeId: 3, title: 'xbox', src: "/subcategory/joysticks/xbox.png", href: "./categories/gaming/joysticks/xbox" }
          ]
        },
        { 
          title: 'accesorios', 
          subCategoryId: 2, 
          src: '/subcategories/accesorios.png', 
          href: './categories/gaming/accesorios',
          types: [
            { typeId: 1, title: 'auriculares', src: "/subcategory/accesorios/auriculares.png", href: "./categories/gaming/accesorios/auriculares" },
            { typeId: 2, title: 'cargadores', src: "/subcategory/accesorios/cargadores.png", href: "./categories/gaming/accesorios/cargadores" },
            { typeId: 3, title: 'fundas', src: "/subcategory/accesorios/fundas.png", href: "./categories/gaming/accesorios/fundas" }
          ]
        },
        { 
          title: 'consolas', 
          subCategoryId: 3, 
          src: '/subcategories/consolas.png', 
          href: './categories/gaming/consolas',
          types: [
            { typeId: 1, title: 'ps4', src: "/subcategory/consolas/ps4.png", href: "./categories/gaming/consolas/ps4" },
            { typeId: 2, title: 'xbox one', src: "/subcategory/consolas/xboxone.png", href: "./categories/gaming/consolas/xboxone" },
            { typeId: 3, title: 'nintendo switch', src: "/subcategory/consolas/switch.png", href: "./categories/gaming/consolas/switch" }
          ]
        },
        { 
          title: 'sillas', 
          subCategoryId: 4, 
          src: '/subcategories/sillas.png', 
          href: './categories/gaming/sillas',
          types: [
            { typeId: 1, title: 'gaming', src: "/subcategory/sillas/gaming.png", href: "./categories/gaming/sillas/gaming" },
            { typeId: 2, title: 'oficina', src: "/subcategory/sillas/oficina.png", href: "./categories/gaming/sillas/oficina" }
          ]
        },
        { 
          title: 'perifericos', 
          subCategoryId: 5, 
          src: '/subcategories/perifericos.png', 
          href: './categories/gaming/perifericos',
          types: [
            { typeId: 1, title: 'teclados', src: "/subcategory/perifericos/teclados.png", href: "./categories/gaming/perifericos/teclados" },
            { typeId: 2, title: 'ratones', src: "/subcategory/perifericos/ratones.png", href: "./categories/gaming/perifericos/ratones" },
            { typeId: 3, title: 'monitores', src: "/subcategory/perifericos/monitores.png", href: "./categories/gaming/perifericos/monitores" }
          ]
        }
      ]
    },
    {
      categoryId: 2,
      title: 'Holder',
      src: "/category/holder.png",
      href: "./categories/holder",
      subcategory: [
        { 
          title: 'soporte tv', 
          subCategoryId: 6, 
          src: '/category/holder/soporte_tv.png', 
          href: './categories/holder/soporte_tv',
          types: [
            { typeId: 1, title: 'fijo', src: "/subcategory/soporte_tv/fijo.png", href: "./categories/holder/soporte_tv/fijo" },
            { typeId: 2, title: 'inclinable', src: "/subcategory/soporte_tv/inclinable.png", href: "./categories/holder/soporte_tv/inclinable" },
            { typeId: 3, title: 'articulado', src: "/subcategory/soporte_tv/articulado.png", href: "./categories/holder/soporte_tv/articulado" }
          ]
        },
        { 
          title: 'soporte auto', 
          subCategoryId: 7, 
          src: '/category/holder/soporte_auto.png', 
          href: './categories/holder/soporte_auto',
          types: [
            { typeId: 1, title: 'parabrisas', src: "/subcategory/soporte_auto/parabrisas.png", href: "./categories/holder/soporte_auto/parabrisas" },
            { typeId: 2, title: 'ventilacion', src: "/subcategory/soporte_auto/ventilacion.png", href: "./categories/holder/soporte_auto/ventilacion" },
            { typeId: 3, title: 'carga', src: "/subcategory/soporte_auto/carga.png", href: "./categories/holder/soporte_auto/carga" }
          ]
        },
        { 
          title: 'A/V', 
          subCategoryId: 8, 
          src: '/category/holder/av.png', 
          href: './categories/holder/av',
          types: [
            { typeId: 1, title: 'hdmi', src: "/subcategory/av/hdmi.png", href: "./categories/holder/av/hdmi" },
            { typeId: 2, title: 'rca', src: "/subcategory/av/rca.png", href: "./categories/holder/av/rca" },
            { typeId: 3, title: 'optico', src: "/subcategory/av/optico.png", href: "./categories/holder/av/optico" }
          ]
        },
        { 
          title: 'soporte tablets', 
          subCategoryId: 9, 
          src: '/category/holder/soporte_tablets.png', 
          href: './categories/holder/soporte_tablets',
          types: [
            { typeId: 1, title: 'mesa', src: "/subcategory/soporte_tablets/mesa.png", href: "./categories/holder/soporte_tablets/mesa" },
            { typeId: 2, title: 'auto', src: "/subcategory/soporte_tablets/auto.png", href: "./categories/holder/soporte_tablets/auto" },
            { typeId: 3, title: 'pared', src: "/subcategory/soporte_tablets/pared.png", href: "./categories/holder/soporte_tablets/pared" }
          ]
        }
      ]
    },
    {
      categoryId: 3,
      title: 'Movilidad',
      src: "/category/Movilidad.png",
      href: "./categories/movilidad",
      subcategory: [
        { 
          title: 'monopatín', 
          subCategoryId: 10, 
          src: '/category/movilidad/monopatin.png', 
          href: './categories/movilidad/monopatin',
          types: [
            { typeId: 1, title: 'eléctrico', src: "/subcategory/monopatin/electrico.png", href: "./categories/movilidad/monopatin/electrico" },
            { typeId: 2, title: 'manual', src: "/subcategory/monopatin/manual.png", href: "./categories/movilidad/monopatin/manual" }
          ]
        }
      ]
    },
    {
      categoryId: 4,
      title: 'Sonido',
      src: "/category/sonido.png",
      href: "./categories/sonido",
      subcategory: [
        { 
          title: 'auriculares', 
          subCategoryId: 11, 
          src: '/category/sonido/auriculares.png', 
          href: './categories/sonido/auriculares',
          types: [
            { typeId: 1, title: 'over-ear', src: "/subcategory/auriculares/over-ear.png", href: "./categories/sonido/auriculares/over-ear" },
            { typeId: 2, title: 'in-ear', src: "/subcategory/auriculares/in-ear.png", href: "./categories/sonido/auriculares/in-ear" },
            { typeId: 3, title: 'wireless', src: "/subcategory/auriculares/wireless.png", href: "./categories/sonido/auriculares/wireless" }
          ]
        }
      ]
    },
    {
      categoryId: 5,
      title: 'Home',
      src: "/category/hogar.png",
      href: "./categories/hogar",
      subcategory: [
        { 
          title: 'cámaras de seguridad', 
          subCategoryId: 12, 
          src: '/category/hogar/camaras_seguridad.png', 
          href: './categories/hogar/camaras_seguridad',
          types: [
            { typeId: 1, title: 'interior', src: "/subcategory/camaras_seguridad/interior.png", href: "./categories/hogar/camaras_seguridad/interior" },
            { typeId: 2, title: 'exterior', src: "/subcategory/camaras_seguridad/exterior.png", href: "./categories/hogar/camaras_seguridad/exterior" },
            { typeId: 3, title: 'domo', src: "/subcategory/camaras_seguridad/domo.png", href: "./categories/hogar/camaras_seguridad/domo" }
          ]
        },
        { 
          title: 'ventiladores', 
          subCategoryId: 13, 
          src: '/category/hogar/ventiladores.png', 
          href: './categories/hogar/ventiladores',
          types: [
            { typeId: 1, title: 'de pie', src: "/subcategory/ventiladores/de_pie.png", href: "./categories/hogar/ventiladores/de_pie" },
            { typeId: 2, title: 'de techo', src: "/subcategory/ventiladores/de_techo.png", href: "./categories/hogar/ventiladores/de_techo" },
            { typeId: 3, title: 'de escritorio', src: "/subcategory/ventiladores/de_escritorio.png", href: "./categories/hogar/ventiladores/de_escritorio" }
          ]
        },
        { 
          title: 'parlantes', 
          subCategoryId: 14, 
          src: '/category/hogar/parlantes.png', 
          href: './categories/hogar/parlantes',
          types: [
            { typeId: 1, title: 'bluetooth', src: "/subcategory/parlantes/bluetooth.png", href: "./categories/hogar/parlantes/bluetooth" },
            { typeId: 2, title: 'multimedia', src: "/subcategory/parlantes/multimedia.png", href: "./categories/hogar/parlantes/multimedia" },
            { typeId: 3, title: 'portátil', src: "/subcategory/parlantes/portatil.png", href: "./categories/hogar/parlantes/portatil" }
          ]
        },
        { 
          title: 'tumbonas', 
          subCategoryId: 15, 
          src: '/category/hogar/tumbonas.png', 
          href: './categories/hogar/tumbonas',
          types: [
            { typeId: 1, title: 'jardin', src: "/subcategory/tumbonas/jardin.png", href: "./categories/hogar/tumbonas/jardin" },
            { typeId: 2, title: 'piscina', src: "/subcategory/tumbonas/piscina.png", href: "./categories/hogar/tumbonas/piscina" }
          ]
        },
        { 
          title: 'infladores', 
          subCategoryId: 16, 
          src: '/category/hogar/infladores.png', 
          href: './categories/hogar/infladores',
          types: [
            { typeId: 1, title: 'manual', src: "/subcategory/infladores/manual.png", href: "./categories/hogar/infladores/manual" },
            { typeId: 2, title: 'eléctrico', src: "/subcategory/infladores/electrico.png", href: "./categories/hogar/infladores/electrico" }
          ]
        }
      ]
    }
  ];  
  
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const container = document.getElementById("categories-container");
    if (container) {
      setIsOverflowing(container.scrollWidth > container.clientWidth);
    }
  }, [categories]);

  const handleScrollLeft = () => {
    const container = document.getElementById("categories-container");
    if (container) {
      container.scrollBy({ left: -200, behavior: "smooth" }); // Ajusta este valor según el tamaño de las imágenes
      setScrollLeft(container.scrollLeft - 200);
    }
  };

  const handleScrollRight = () => {
    const container = document.getElementById("categories-container");
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" }); // Ajusta este valor según el tamaño de las imágenes
      setScrollLeft(container.scrollLeft + 200);
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="overflow-hidden w-full flex items-center justify-evenly px-4 ">
      <button
        onClick={handleScrollLeft}
        className={`w-10 h-10 flex items-center justify-center p-2 bg-white rounded-full shadow-md z-10`}
      >
        &#8249;
      </button>
      <div  className="flex space-x-6 p-2 overflow-x-auto scrollbar-hide me-4 md:me-0">
        {categories.map(category => (
          <Link href={category.href} key={category.categoryId}>
          <button
            
            className="p-4 rounded-lg hover:bg-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition duration-200"
          >
            <div className="flex flex-col">
              <div className="relative w-24 h-24">
                <Image
                  src={category.src}
                  fill={true}
                  alt={`${category.title} category`}
                  className="hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="">{category.title}</h3>
            </div>
          </button>  
          </Link>
        ))}
      </div>
      <button
        onClick={handleScrollRight}
        className={`w-10 h-10 flex items-center justify-center p-2 bg-white rounded-full shadow-md z-10`}
      >
        &#8250;
      </button>

      </div>

    </section>
  );
}

export default CategoriesNav;
