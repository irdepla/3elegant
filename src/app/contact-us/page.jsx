import React from "react";
import Instagram from "../../../public/instagram.svg"
import Facebook from "../../../public/facebook.svg"
import Youtube from "../../../public/youtube.svg"
import Link from "next/link";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3d111181] py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Office</h2>
            <p className="text-gray-600 leading-relaxed">
              43111 Hai Trieu street, <br />
              District 1, HCMC <br />
              Vietnam <br />
              84-756-3237
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Social Media</h2>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com">
                <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Image src={Instagram} alt="Instagram" className="w-8 h-8" />
                </div>
              </Link>
              <Link href="https://www.facebook.com">
                <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Image src={Facebook} alt="Facebook" className="w-8 h-8" />
                </div>
              </Link>
              <Link href="https://www.youtube.com">
                <div className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors">
                  <Image src={Youtube} alt="Youtube" className="w-8 h-8" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;