import React from "react";
import Herosection from "../../../components/Fragments/Herosection";

const Taglines = () => {
  const title = 'TAGLINE'
  return (
    <>
    <Herosection content={title} />

      <div className="my-24">
        <div className="p-6">
          <img src="https://www.uniquip.co.id/wp-content/uploads/2023/01/LOGO-PROVEN-PRODUCTS-PROVEN-SERVICES.png" />
        </div>
        <div className="p-4 text-sm">
          <p>
            <strong>PROVEN PRODUCTS & PROVEN SERVICES</strong> is the United Equipment Indonesia’s tagline in the form of a commitment to all partners and stakeholders as a provider of equipment and services that are suitable for our
            customers’ needs, for sustainable collaboration towards success.
          </p>
        </div>
      </div>
    </>
  );
};

export default Taglines;
