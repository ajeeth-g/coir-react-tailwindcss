import hero1 from "../assets/hero_1.jpg";
import hero2 from "../assets/hero_2.jpg";
import hero3 from "../assets/hero_3.jpg";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />
      <ProductCard
        title="Coir Fiber"
        description="Natural and durable fiber"
        image={hero2}
      />
      <ProductCard
        title="Coir Fiber"
        description="Natural and durable fiber"
        image={hero3}
      />
      <ProductCard
        title="Coir Fiber"
        description="Natural and durable fiber"
        image={hero2}
      />
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />{" "}
      <ProductCard
        title="Coir Pith"
        description="Premium quality coco peat"
        image={hero1}
      />
    </div>
  );
};

export default Products;
