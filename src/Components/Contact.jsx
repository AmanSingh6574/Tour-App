import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        btn="btn active"
        title="Contact Us"
        src="https://images.unsplash.com/photo-1465778893808-9b3d1b443be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
      />

      <div className="w-full mx-auto mt-10 mb-10 p-4">
        <h1 className="text-center text-slate-600 font-semibold text-3xl mb-4 mt-10">
          Send a message to us!
        </h1>
        <div className="flex flex-col md:w-[700px] mx-auto p-4">
          <form action="" className="w-full">
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

            <div className="mt-4 mb-4">
              <label htmlFor="">
                <input
                  className="w-full rounded-md p-2 text-gray-600 border-2 border-slate-600 "
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </label>
            </div>

            <div className="mt-4 mb-4">
              <label htmlFor="">
                <textarea
                  className="w-full rounded-md p-2 text-gray-600 border-2 border-slate-600 "
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="message"
                ></textarea>
              </label>
            </div>

            <button className="text-center w-full bg-slate-300 rounded-xl border-2 text-black hover:text-white">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
