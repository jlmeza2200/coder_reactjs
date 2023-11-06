import React from "react";

const Footer = () => {
  return (
    <div className="mx-70 py-28 bg-stone-50 text-black" sx={{"backgroundColor":'#f5f5f5'}} >
      <div className="text-center md:text-left lg:text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr,1fr,1fr,1fr] px-10 md:px-40 lg:px-40">
        <div>
          <h4 className="font-bold mb-30 text-secondary-500">ECOMMER</h4>
          <div className="pt-7 pb-7 sm:w-full md:w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-30 pb-7">About Us</h4>
          <p className="mb-30">Careers</p>
          <p className="mb-30">Our Stores</p>
          <p className="mb-30">Terms & Conditions</p>
          <p className="mb-30 pb-7">Privacy Policy</p>
        </div>

        <div>
          <h4 className="font-bold mb-30 pb-7">Customer Care</h4>
          <p className="mb-30">Help Center</p>
          <p className="mb-30">Track Your Order</p>
          <p className="mb-30">Corporate & Bulk Purchasing</p>
          <p className="mb-30 pb-7">Returns & Refunds</p>
        </div>

        <div>
          <h4 className="font-bold mb-30 pb-7">Contact Us</h4>
          <p className="mb-30">50 north Whatever Blvd, Washington, DC 10501</p>
          <p className="mb-30 break-words">Email: mredwardroh@gmail.com</p>
          <p className="mb-30">(222)333-4444</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
