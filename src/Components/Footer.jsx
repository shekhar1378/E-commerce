import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[100%] px-6 py-10 ">
      <div className="container mx-auto flex justify-between mt-12 text-[#424244] ">
        <div className="w-[70%] flex flex-row mt-44 ">
          <div className="w-[15%]">
            <ul className="footer-links">
              <li>About</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
            <ul className="footer-links mt-4">
              <li>Terms</li>
              <li>Careers</li>
              <li>Back to top</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
            <ul className="footer-links mt-4">
              <li>Made with Love</li>
            </ul>
          </div>

          <div className="w-[70%] ml-10 ">
            <p>Store Location & Hours:</p>
            <p className="footer-para">270 Ponsonby Road, Auckland 1011</p>
            <p className="footer-para">Monday to Saturday 9:30am - 5:00pm</p>
            <p className="footer-para">Sunday 9:30am - 4:30pm</p>
            <p className="footer-para">
              Click & Collect is available within store hours
            </p>
          </div>
        </div>

        <div className="w-[40%] text-xl text-[#424244] inline font-semibold ">
          <div className="footer-conatct-link">
            <span>Tel:</span> <a href="tel:+64-9-378-7988">+64-9-378-7988</a>
          </div>
          <div className="footer-conatct-link">
            {/* <span>Email:</span>{" "} */}
            <a href="mailto:studio@everyday-needs.com">
              studio@everyday-needs.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
