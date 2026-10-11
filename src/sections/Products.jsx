import { Phone } from "lucide-react";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import { products, company } from "../data/content";

export default function Products({ onEnquire }) {
  return (
    <Section id="products">
      <SectionHeading title="Our products">
        Spare parts and components for four-wheelers, made at our Chennai facility.
      </SectionHeading>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 100}>
            <ProductCard product={product} onEnquire={onEnquire} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex flex-col items-start justify-between gap-5 rounded-xl bg-mist p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h3 className="font-display text-xl font-extrabold text-brand-navy">
            Looking for a specific part?
          </h3>
          <p className="mt-1 text-slate-600">
            Send us the part details, or call {company.landline.display}.
          </p>
        </div>
        <Button href={company.landline.href} variant="secondary" className="shrink-0">
          <Phone size={18} aria-hidden="true" />
          Call us
        </Button>
      </Reveal>
    </Section>
  );
}
