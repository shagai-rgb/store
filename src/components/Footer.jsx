"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-screen h-[440px] bg-black mt-[140px] bottom-0 flex justify-center items-center">
      <div className="w-[1170px] justify-between flex flex-row">
        <div className="text-white flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-2xl">Exclusive</h1>
            <div className="font-medium text-xl">Subscribe</div>
            <div className="font-light text-base">
              Get 10% off your first order
            </div>
          </div>
          <div className="h-12 w-[217px] border-white border rounded-[4px] gap-8 justify-center flex items-center border-solid">
            <input
              type="text"
              className="w-[130px] h-6 bg-transparent border-spacing-0"
              placeholder="Enter your email"
            />
            <button>
              <img src="/footer/image.png" className="w-6 h-6" alt="" />
            </button>
          </div>
        </div>
        <div className="text-white flex flex-col gap-6">
          <h1 className="font-medium text-xl">Support</h1>
          <div className="flex flex-col gap-4 w-[175px] font-light">
            <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
            <div>exclusive@gmail.com</div>
            <div>+88015-88888-9999</div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-6">
          <h1 className="font-medium text-xl w-[123px]">Account</h1>
          <div className="flex flex-col gap-4 font-light">
            <div>My Account</div>
            <div>Login / Register</div>
            <div>Cart</div>
            <div>Wishlist</div>
            <div>Shop</div>
          </div>
        </div>
        <div className="text-white flex flex-col w-[109px] gap-6">
          <h1 className="font-medium text-xl ">Quick Link</h1>
          <div className="flex flex-col gap-4 font-light">
            <div>Privacy Policy</div>
            <div>Terms Of Use </div>
            <div>FAQ</div>
            <div>Contact</div>
          </div>
        </div>
        <div className="text-white flex flex-col gap-6">
          <h1 className="font-medium text-xl">Download App</h1>
          <div className="flex flex-col gap-2">
            <h1 className="w-[198px] text-xs font-normal opacity-75">
              Save $3 with App New User Only
            </h1>
            <div className="flex gap-2">
              <img src="/footer/image-qr.png" className="w-20 h-20" alt="" />
              <div className=" flex flex-col gap-1">
                <img
                  src="/footer/google-play.png"
                  className="w-[110px] h-10"
                  alt=""
                />
                <img
                  src="/footer/app-store.png"
                  className="w-[110px] h-10"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <img src="/footer/icon-fb.png" className="w-6 h-6" alt="" />
            <img src="/footer/icon-twit.png" className="w-6 h-6" alt="" />
            <img src="/footer/icon-ig.png" className="w-6 h-6" alt="" />
            <img src="/footer/icon-link.png" className="w-6 h-6" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
