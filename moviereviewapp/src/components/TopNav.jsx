import * as React from "react";
import svg from "../assets/cini logo.svg";
import svg1 from "../assets/search btn.svg";


function TopNav() {
  return (
    <div className="sticky top-0 w-full bg-slate-950">
      <div className="flex justify-between items-center w-full px-5 py-2.5">
        <div className="flex gap-3 items-center">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 aspect-square fill-white w-[52px]"
          />
          <div className="flex gap-1 items-center">
            <img src={svg} alt="Cini Logo" />
          </div>
        </div>
        <div className="flex gap-2.5 items-center px-5 py-2.5 text-xl font-medium leading-5 text-center border-purple-500 border-solid border-[3px] rounded-[100px] text-violet-950">
        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '50px', border: '2px solid #9F64BC' }}>
          <input type="text" placeholder="search movies"
            style={{ flex: 1, border: 'none', outline: 'none', borderRadius: '50px', padding: '10px 20px', background: 'none', width: '400px'}}
            placeholderStyle={{ color: '#421F71' }}
          />
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', marginLeft: '300px' ,marginRight: '10px'}}>
            <img src={svg1} alt="Search Icon" />
          </button>
        </div>
        </div>
        <div className="login">
          <button style={{ color: "white", border: "none", borderRadius: "10px", padding: "10px 20px", background: "#5B0988", cursor: "pointer" , width: "110px", height: "40px", fontSize: "20px", textAlign: "center", fontFamily: "sans-serif"}}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default TopNav;

