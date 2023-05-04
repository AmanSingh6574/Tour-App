


import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";



function Home() {


  return (
    <div>
      <Navbar />
      <Hero
        btntext="Travel Plan"
        url="/"
        btn="btn"
        text="Choose Your Favourite Destination"
        title="Your Journey Your Story"
        src="https://images.unsplash.com/photo-1562428247-1898424e2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      />

     

      <div className="w-full mx-auto text-center mt-10 mb-10">
        <h1 className="font-bold text-3xl tracking-wide mb-2">
          Popular Destination
        </h1>
        <p className="text-sm text-gray-600">
          Tours give you the opportunity to see a lot, within a time frame
        </p>
      </div>

      <div className="p-6 flex gap-14 flex-wrap justify-center items-center">
        <div className="w-[500px] text-center flex flex-col gap-8">
          <h2 className="font-semibold text-xl">Taal Volcano, Batangas</h2>
          <p className="text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ducimus laudantium excepturi illum illo iste ea quos eligendi iusto
            quis. Beatae voluptatum incidunt repudiandae animi mollitia, quam
            eveniet maiores magnam?
          </p>
        </div>

        <div className=" w-[400px] h-[300px]">
          <img
            className="rounded-2xl shadow-2xl  cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://images.unsplash.com/photo-1606047557233-88cc1e4d368c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className=" hidden  p-6 lg:flex gap-14 flex-wrap justify-center items-center">
        <div className=" w-[400px] h-[300px] ">
          <img
            className="rounded-2xl shadow-2xl mt-6 cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-[500px] text-center flex flex-col gap-8 ">
          <h2 className="font-semibold text-xl">Mt.Daguldul, Bantangas</h2>
          <p className="text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ducimus laudantium excepturi illum illo iste ea quos eligendi iusto
            quis. Beatae voluptatum incidunt repudiandae animi mollitia, quam
            eveniet maiores magnam?
          </p>
        </div>
      </div>

      <div className="lg:hidden p-6 flex gap-14 flex-wrap justify-center items-center">
        <div className="w-[500px] text-center flex flex-col gap-8 ">
          <h2 className="font-semibold text-xl">Mt.Daguldul, Bantangas</h2>
          <p className="text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ducimus laudantium excepturi illum illo iste ea quos eligendi iusto
            quis. Beatae voluptatum incidunt repudiandae animi mollitia, quam
            eveniet maiores magnam?
          </p>
        </div>
        <div className=" w-[400px] h-[300px] ">
          <img
            className="rounded-2xl shadow-2xl  cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <div className="p-6 flex gap-14 flex-wrap justify-center items-center">
        <div className="w-[500px] text-center flex flex-col gap-8">
          <h2 className="font-semibold text-xl">Taal Volcano, Batangas</h2>
          <p className="text-gray-800 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            ducimus laudantium excepturi illum illo iste ea quos eligendi iusto
            quis. Beatae voluptatum incidunt repudiandae animi mollitia, quam
            eveniet maiores magnam?
          </p>
        </div>

        <div className=" w-[400px] h-[300px]">
          <img
            className="rounded-2xl shadow-2xl  cursor-pointer hover:brightness-105 hover:scale-105 transition-all duration-300"
            src="https://images.unsplash.com/photo-1522611471186-922142b0bf8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
