"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

interface Props {
  product: Product;
}

export default function AddToCart({ product }: Props) {
  const { addItem } = useCart();
  const [selectedPrep, setSelectedPrep] = useState(product.preparation[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizeOptions?.[0]?.label ?? "");
  const [weight, setWeight] = useState(0.2);
  const [quantity, setQuantity] = useState(6);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ product, quantity, weight, preparation: selectedPrep });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const selectedSizePrice = product.sizeOptions?.find((s) => s.label === selectedSize)?.price;

  return (
    <>
      {/* Preparation options */}
      <div className="mt-8">
        <p className="mb-3 text-sm font-medium text-navy">Preparation</p>
        <div className="flex flex-wrap gap-2">
          {product.preparation.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedPrep(opt)}
              className={`border px-4 py-2.5 text-sm transition-colors ${
                selectedPrep === opt
                  ? "border-navy bg-navy text-white"
                  : "border-border bg-white text-navy hover:border-navy"
              }`}
              style={{ borderRadius: "3px" }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Size selector (salmon, lobsters) */}
      {product.sizeOptions && product.sizeOptions.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 text-sm font-medium text-navy">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.sizeOptions.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelectedSize(opt.label)}
                className={`border px-4 py-2.5 text-sm transition-colors ${
                  selectedSize === opt.label
                    ? "border-navy bg-navy text-white"
                    : "border-border bg-white text-navy hover:border-navy"
                }`}
                style={{ borderRadius: "3px" }}
              >
                {opt.label} · £{opt.price.toFixed(2)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Weight selector (per-kg items like hot smoked salmon) */}
      {product.priceType === "per-kg" && (
        <div className="mt-6">
          <p className="mb-3 text-sm font-medium text-navy">Approximate weight</p>
          <div className="flex items-center gap-3">
            <select
              className="border border-border bg-white px-4 py-2.5 text-sm text-navy outline-none focus:border-navy"
              style={{ borderRadius: "3px" }}
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
            >
              <option value="0.1">100g</option>
              <option value="0.2">200g</option>
              <option value="0.3">300g</option>
              <option value="0.5">500g</option>
              <option value="1">1kg</option>
            </select>
            <span className="text-sm text-text-light">
              Estimated: £{(product.pricePerKg * weight).toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Quantity selector (per-piece items like oysters) */}
      {product.priceType === "per-piece" && (
        <div className="mt-6">
          <p className="mb-3 text-sm font-medium text-navy">Quantity</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border bg-white" style={{ borderRadius: "3px" }}>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2.5 text-sm text-navy transition-colors hover:bg-sand"
              >
                -
              </button>
              <span className="min-w-10 px-2 py-2.5 text-center text-sm font-medium text-navy">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2.5 text-sm text-navy transition-colors hover:bg-sand"
              >
                +
              </button>
            </div>
            <span className="text-sm text-text-light">
              Estimated: £{(parseFloat(product.price.replace(/[^0-9.]/g, "")) * quantity).toFixed(2)}
            </span>
          </div>
        </div>
      )}

      {/* Add to order button */}
      <button
        onClick={handleAdd}
        className={`mt-8 flex w-full items-center justify-center gap-2 px-6 py-4 text-sm font-medium tracking-wide text-white transition-colors md:w-auto ${
          added ? "bg-teal" : "bg-lobster hover:bg-lobster/90"
        }`}
        style={{ borderRadius: "3px" }}
      >
        {added ? (
          <>
            <Check className="h-4 w-4" />
            Added to Order
          </>
        ) : (
          <>
            Add to Order
            {selectedSizePrice && ` · £${selectedSizePrice.toFixed(2)}`}
          </>
        )}
      </button>
    </>
  );
}
