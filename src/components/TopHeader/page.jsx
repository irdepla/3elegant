"use client";
import React, { useState } from "react";
import Image from 'next/image'; 
import Link from 'next/link'; 
import Crossbar from "../../../public/Union.svg"
import Ticket from "../../../public/ticket-percent.svg"

const TopHeader = () => {
  const [isClosed, setIsClosed] = useState(false); 

  function toggle() {
    setIsClosed((prevState) => !prevState); 
  }

  return (
    <>
      {!isClosed && (
        <section className="top__header py-2 bg-[#38CB89]">
          <div className="top__header__wrapper flex justify-end">
            <div className="mr-[500px] flex gap-[14px]">
              <Image src={Ticket} alt="rasm qoy" />
              <p className="font-semibold">30% off storewide — Limited time!</p>
              <Link href="/shop">
                <span>Shop Now</span>
              </Link>
            </div>

            <button onClick={toggle}>
              <Image className="" src={Crossbar} alt="Close" />
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default TopHeader;
