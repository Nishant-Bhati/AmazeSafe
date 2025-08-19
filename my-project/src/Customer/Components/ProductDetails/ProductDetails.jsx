import { StarIcon } from "@heroicons/react/20/solid";
import { Rating } from "@mui/material";
import { almirah } from "../../../Data/almirah";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    navigate('/cart');
  }
  const params = useParams();
  const productId = params.productId;

  // Get the specific product from the array
  const product = almirah.find((p) => p.id == productId) || almirah[0];

  // Get similar products (excluding current product)
  const similarProducts = almirah.filter((p) => p.id != productId);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {product.toplevelCategory}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {product.secondLevelCategory}
                </a>
                <svg
                  fill="currentColor"
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <a
                href="#"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.thirdLevelCategory}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.title}
                src={`/${product.image}`}
                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {/* Show a few similar product images as thumbnails */}
              {similarProducts.slice(0, 4).map((item, index) => (
                <div key={index} className="max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    alt={item.title}
                    src={`/${item.image}`}
                    className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                {product.title}
              </h1>
              <p className="text-md opacity-50">
                Color: {product.color} | Size: {product.size} | Stock:{" "}
                {product.quantity} units
              </p>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-3">
                <p className="font-bold">
                  Offer Price: ₹{product.discountedPrice.toLocaleString()}
                </p>
                <p className="text-green-600 font-semibold">
                  {product.discountPercent}% off
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="mr-2">MRP:</span>
                <p className="font-bold line-through opacity-50">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>
              <p className="text-xs opacity-50">Inclusive of all taxes</p>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center space-x-3">
                  <Rating name="read-only" value={4} readOnly />
                  <p className="text-sm opacity-50">123 Reviews</p>
                </div>
              </div>

              <form className="mt-10">
                <button
                  onClick={handleAddToCart}
                  className="mt-10 flex w-full items-center justify-center rounded-md border cursor-pointer border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.productDescription}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Product Features
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">
                    {product.productDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Similar products */}
        <section className="pt-10">
          <h1 className="text-xl font-bold py-5 pl-28 pb-10">
            Similar Products
          </h1>
          <div className="flex flex-wrap space-y-5 justify-center">
            {similarProducts.map((item, index) => (
              <HomeSectionCard key={index} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
