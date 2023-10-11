import React from "react";
import Herosection from "../../../components/Fragments/Herosection";

const Taglines = () => {
  const title = "TAGLINE";
  return (
    <>
      <main className="h-full w-full">
        <Herosection content={title} />

        <div className="my-24 md:grid md:grid-cols-2 lg:my-36 xl:mx-12 ">
          <div className="p-6 md:p-4 ">
            <img className="xl:h-24 xl:w-[600px] " src="https://www.uniquip.co.id/wp-content/uploads/2023/01/LOGO-PROVEN-PRODUCTS-PROVEN-SERVICES.png" />
          </div>
          <div className="p-4 text-sm">
            <p className="text-blue-800 md:w-[440px] xl:w-[550px]">
              <strong>PROVEN PRODUCTS & PROVEN SERVICES</strong> is the United Equipment Indonesia’s tagline in the form of a commitment to all partners and stakeholders as a provider of equipment and services that are suitable for our
              customers’ needs, for sustainable collaboration towards success.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Taglines;
