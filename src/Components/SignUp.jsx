import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <div>
      <Navbar />
      <Hero
        btntext="Travel Plan"
        btn="btn active"
        text="Explore The World with us"
        title="Sign Up"
        src="https://images.unsplash.com/photo-1564622598035-61122bd729ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      />
      <div className="flex flex-col md:w-[700px] mx-auto p-4 text-center mb-10">
        <form action="">
          <div className="mt-4 mb-4">
            <label htmlFor="">
              <input
                className="w-full rounded-md p-2 text-gray-600 border-2 border-slate-600 "
                type="text"
                name="text"
                id="text"
                placeholder="Name"
                required
              />
            </label>
          </div>

          <div className="mt-4 mb-4">
            <label htmlFor="">
              <input
                className="w-full rounded-md p-2 text-gray-600 border-2 border-slate-600 "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <button className="text-center w-full bg-slate-300 rounded-xl border-2 text-black hover:text-white">
                Sign Up
              </button>
            </label>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
