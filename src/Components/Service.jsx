import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import { ServiceMenu } from "./ServiceMenu.jsx";
import { Deals } from "./Deals.jsx";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        btn="btn active"
        title="Service"
        src="https://images.unsplash.com/photo-1629653403102-8033bbaff2bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      />

      <div className="w-full mx-auto text-center mt-10 mb-10">
        <h2 className="font-semibold text-xl tracking-wide text-slate-700">
          Themes You Can Explore
        </h2>

        <div className="w-full px-10 mt-10">
          <ul className="flex flex-wrap p-4 justify-around gap-10">
            {ServiceMenu.map(function (item, index) {
              return (
                <li
                  key={index}
                  className="min-w-[140px] p-4 text-center flex justify-center items-center flex-col shadow-xl rounded-xl"
                >
                  <img
                    className="h-[70px] w-[70px] mt-4 mb-4 cursor-pointer hover:-translate-y-2 transition-all duration-500"
                    src={item.url}
                    alt="not found"
                    loading="lazy"
                    key={item.index}
                  />
                  <h3 className="text-gray-500 tracking-wide font-semibold text-[15px]">
                    {item.title}
                  </h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="w-full mx-auto text-center mt-10 mb-10">
        <h2 className="font-semibold text-xl tracking-wide text-slate-700 mb-10">
          Experience Luxury Travel In India
        </h2>

        <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 self-center px-20 ">
          {Deals.map(function (item, index) {
            return (
              <div key={index}>
                <li className="flex items-center flex-col relative m-4">
                  <img
                    className="rounded-md shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer"
                    src={item.url}
                    alt="not found "
                    loading="lazy"
                  />
                  <h3 className="absolute font-semibold text-xl top-6 z-20 tracking-wider font-signature  text-white ">
                    {item.h2}
                  </h3>
                </li>
              </div>
            );
          })}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Service;
