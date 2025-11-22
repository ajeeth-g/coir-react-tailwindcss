import { useParams } from "react-router-dom";
import products from "../data/products.json";
import { images } from "../assets";
import aboutHero from "../assets/Home_1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="mx-auto space-y-24 mt-20">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden mx-auto w-full">
        <img
          src={aboutHero}
          alt="About us banner"
          className="w-full h-80 object-cover rounded-3xl shadow-md"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Products
          </h1>
        </div>
      </section>

      {product.detailSections.map((sec, idx) => {
        
        switch (sec.type) {
          case "textImage":
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start gap-6"
              >
                {sec.layout === "leftImage" && (
                  <div className="w-full md:w-1/2 flex items-center justify-center rounded-2xl">
                    <img
                      src={images[sec.image]}
                      alt={sec.title}
                      className="w-full rounded-2xl object-fit max-h-96"
                    />
                  </div>
                )}
                <div className="md:w-1/2 space-y-3">
                  <h2 className="text-4xl font-semibold mb-3">{sec.title}</h2>
                  <p className="text-gray-800">{sec.description}</p>
                </div>
                {sec.layout === "leftText" && (
                  <div className="w-full md:w-1/2 flex items-center justify-center rounded-2xl">
                    <img
                      src={images[sec.image]}
                      alt={sec.title}
                      className="w-full rounded-2xl object-fit max-h-96"
                    />
                  </div>
                )}
              </div>
            );
          case "specsUses":
            return (
              <div key={idx} className="flex flex-col md:flex-row gap-8">
                {/* Specs Table */}
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Specifications</h3>
                  <table className="w-full text-left border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2">
                          Specification
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sec.specs.map((s, j) => (
                        <tr key={j} className="even:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">
                            {s.label}
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            {s.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Uses List */}
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Uses</h3>
                  <ul className="space-y-2">
                    {sec.uses.map((u, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✔️</span>{" "}
                        {/* Custom bullet */}
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ProductDetail;
