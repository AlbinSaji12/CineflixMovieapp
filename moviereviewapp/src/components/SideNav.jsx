import React from "react";


function SideNav() {
  return (
    <div className="flex flex-col justify-center px-8 py-2.5 text-xl font-medium tracking-wider leading-5 text-white max-w-[264px]">
      <div className="text-2xl font-extrabold tracking-widest leading-5 underline">
        Menu
      </div>
      <div className="flex gap-2.5 justify-center mt-8 text-center whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81a4f7583cff5639d3b227954f936ee0d283983e0b7ae8081f274220e088786f?"
          className="flex-1 shrink-0 w-full aspect-[1.22] fill-white"
        />
        <div>Home</div>
      </div>
      <div className="flex gap-2.5 justify-center mt-8 text-center whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9fa3b16c2e0a60498e35c536b190699784e85d7c907b1c1ecdb969447f758a2?"
          className="flex-1 shrink-0 w-full aspect-[1.33] fill-white"
        />
        <div>Categories</div>
      </div>
      <div className="text-2xl font-extrabold tracking-widest leading-5 underline mt-[586px]">
        Settings
      </div>
      <div className="flex gap-2.5 mt-8 text-center whitespace-nowrap">
        <img
          loading="lazy"
          srcSet="..."
          className="flex-1 shrink-0 w-full rounded-full border-white border-solid aspect-[1.11] border-[3px]"
        />
        <div>Account</div>
      </div>
      <div className="flex gap-2.5 justify-center mt-3 text-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9747057ac0bc5a51724b8fbfad146a005dc4d2c81d36ba9cbc4b30ecf5be61e?"
          className="flex-1 shrink-0 w-full aspect-square fill-white"
        />
        <div>Log out</div>
      </div>
    </div>
  );
}

export default SideNav;


