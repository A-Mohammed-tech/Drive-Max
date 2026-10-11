import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { ProductIllustration } from "./Graphics";

/** One product category. `onEnquire` receives the product title. */
export default function ProductCard({ product, onEnquire }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-brand-navy/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-blue to-brand-navy">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProductIllustration
            kind={product.kind}
            className="absolute inset-0 m-auto h-[82%] w-[82%] transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-brand-red transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-extrabold text-brand-navy">{product.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-600">{product.description}</p>
        <Button
          variant="outline"
          icon={ArrowRight}
          className="mt-6 w-full"
          onClick={() => onEnquire(product.title)}
        >
          Enquire about this
        </Button>
      </div>
    </article>
  );
}
