import React from "react";

// import data
import { currency, currency1 } from "../data";

const Trade = () => {
  // item name state
  return (
    <section className="section text-darkblue" id="advantages">
      <div className="container mx-auto">
        <h2
          className="section-title text-center mb-16 text-gray"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          Découvrez nos avantages en travaillant avec nous.
        </h2>
        {/* items */}
        <div data-aos="fade-up" data-aos-offset="450">
          <div className="flex flex-col gap-[45px] lg:flex-row mb-12 lg:mb-6">
            {currency.map((item, index) => {
              // destructure item
              const { name, description } = item;
              return (
                // item
                <div
                  className="bg-white w-full rounded-2xl py-8 px-6"
                  key={index}
                >
                  <div className="flex flex-col justify-center items-center">
                    {/* item name */}
                    <div className="mb-3 flex items-center text-center gap-x-2 text-blue [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
                      <div className="text-[28px] font-bold">{name}</div>
                    </div>
                    {/* item description */}
                    <p className="text-center">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col gap-[45px] lg:flex-row">
            {currency1.map((item, index) => {
              // destructure item
              const { name, description } = item;
              return (
                // item
                <div
                  className="bg-white w-full rounded-2xl py-12 px-6"
                  key={index}
                >
                  <div className="flex flex-col justify-center items-center">
                    {/* item name */}
                    <div className="mb-3 flex items-center text-center gap-x-2 text-blue [text-shadow:_0_1px_0_rgb(0_0_0_/_60%)]">
                      <div className="text-[28px] font-bold">{name}</div>
                    </div>
                    {/* item description */}
                    <p className="text-center">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
