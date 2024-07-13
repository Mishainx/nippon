import ProductsIcon from "@/icons/ProductsIcon";

const SubCatNav = () => {

    const categories = [
        { id: 1, title: 'Electronics', src:"/category/gaming-nippon-game.png" },
        { id: 1, title: 'Electronics', src:"/category/gaming-nippon-game.png" }
        // Añade más categorías según sea necesario
];

return (
    <section>
      <nav className="flex space-x-4">
        {categories.map(category => (
          <button
            key={category.id}
            className="p-4 border rounded-lg hover:bg-gray-200"
          >
            <div className="text-2xl">
                <Image
                src={category.src}
                fill={true}
            />
            </div>
            <div>{category.title}</div>
          </button>
        ))}
      </nav>
    </section>
  );
}
  
  export default SubCatNav;
  