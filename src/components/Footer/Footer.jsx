import React from "react";
import payPal from "../../assets/images/PayPal.svg.png";
import amazonPay from "../../assets/images/Amazon_Pay_logo.svg.png";
import americanExpress from "../../assets/images/American-Express-Color.png";
import masterCard from "../../assets/images/MasterCard_Logo.svg.png";
import apple from "../../assets/images/apple.webp";
import googlePlay from "../../assets/images/en_badge_web_generic.png";

export default function Footer() {
  return (
    <>
      <div className="footer bg-gray-200 py-8 mt-8">
        <div className="container">
          <h2 className="capitalize text-3xl">Get The FreshCart App</h2>
          <p className="capitalize text-gray-500 my-4">
            We Will Send You a link, open it on your phone to download the app
          </p>

          <div className="input flex items-center justify-between  flex-wrap md:flex-nowrap gap-4 px-4">
            <input
              type="email"
              className="w-full md:w-[85%] p-2 rounded border-0 focus:outline-none"
              name="linkApp"
              placeholder="Email .."
            />
            <button className="capitalize w-full md:w-[15%] mx-auto  rounded text-white bg-green-500  text-sm px-4 py-2">
              share app link
            </button>
          </div>
          <div className="flex my-4 items-center justify-between flex-wrap  border-gray-300 border-y py-6">
            <div className="flex items-center justify-center w-full xl:w-auto gap-2 flex-wrap">
              <h3 className="capitalize text-2xl text-center">payment partners</h3>
              <img src={amazonPay} className="w-20" alt="amazonPay" />
              <img
                src={americanExpress}
                className="w-20"
                alt="americanExpress"
              />
              <img src={masterCard} className="w-20" alt="masterCard" />
              <img src={payPal} className="w-20" alt="payPal" />
            </div>
            <div className="flex items-center justify-center w-full xl:w-auto gap-2 flex-wrap">
              <h3 className="capitalize text-2xl text-center">
                get deliveries with freshCart
              </h3>
              <img src={apple} className="w-24" alt="apple" />
              <img src={googlePlay} className="w-24" alt="googlePlay" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
