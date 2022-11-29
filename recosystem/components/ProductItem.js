import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-xl font-medium tracking-wide text-black">
              {product.name}
            </h2>
          </a>
        </Link>
        {/* <p className="mb-2 text-black font-medium">{product.brand}</p> */}
        <p className="text-lg font-semibold p-1.5 tracking-wide text-black">
          &#8377; {product.price}
        </p>
        <button
          className="primary-button text-black"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
