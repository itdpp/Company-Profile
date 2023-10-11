import React from "react";
import Herosection from "../../../components/Fragments/Herosection";

const AboutValues = () => {
  const title = "Values";
  return (
    <>
      <main>
        <Herosection content={title} />

        <div className="text-center my-20 mx-8 ">
          <img className="items-center sm:mx-36 md:mx-44 lg:mx-80 xl:mx-[440px]" src="https://www.dpp.co.id/wp-content/uploads/2022/04/dpppppppp.png"></img>
          <p className="font-bold text-lg">S.M.A.R.T</p>
          <h4 className="font-semibold text-sm">Satisfaction - Morale - Adaptability - Responsibility - Teamwork</h4>
        </div>
        <div className="mx-6 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-x-8 lg:mb-32 lg:mx-20 xl:mx-44">
          <div className="mb-6">
            <h2 className="font-medium text-xl">UNITY</h2>
            <p className="text-blue-800">Understanding the working mechanism, structure, and culture of the organization as well as the political, social, and economic climate in which the organization operates.</p>
          </div>
          <div className="mb-6">
            <h2 className="font-medium text-xl">RESPONSIBILITY</h2>
            <p className="text-blue-800">The ability to work effectively and efficiently to achieve goals (results) and better/ exceeding standards.</p>
          </div>
          <div className="mb-24">
            <h2 className="font-medium text-xl">ENTHUSIASM</h2>
            <p className="text-blue-800">The desire to help or serve others (customers) in accordance with the needs of external and internal customers.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutValues;
