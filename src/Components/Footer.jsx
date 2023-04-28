import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="flex flex-col border bg-gray-900 text-white gap-20 p-28 w-full">
      <div className="flex flex-wrap gap-10 justify-between">
        <div>
          <h1 className="font-bold text-3xl mb-2">Trippy</h1>
          <p className="text-sm text-slate-300">
            Choose your favourite destination
          </p>
        </div>
        <div className="flex gap-3">
          <div className="cursor-pointer">
            <BsInstagram size={25} />
          </div>
          <div className="cursor-pointer">
            <BsFacebook size={25} />
          </div>
          <div className="cursor-pointer">
            <BsLinkedin size={25} />
          </div>
          <div className="cursor-pointer">
            <BsTwitter size={25} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 justify-between ">
        <div>
          <h3 className="font-bold mb-2 tracking-wide text-xl">Project</h3>
          <ul className="leading-8">
            <li>Changing</li>
            <li>Status</li>
            <li>Licence</li>
            <li>All Versions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 tracking-wide text-xl">Community</h3>
          <ul className="leading-8">
            <li>GitHub</li>
            <li>Issues</li>
            <li>Project</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 tracking-wide text-xl">Help</h3>
          <ul className="leading-8">
            <li>Support</li>
            <li>Troubleshooting</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 tracking-wide text-xl">Others</h3>
          <ul className="leading-8">
            <li>Terms Of Service</li>
            <li>Privacy Policy</li>
            <li>Licence</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
