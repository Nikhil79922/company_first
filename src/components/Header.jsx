// src/components/Header.jsx
export default function Header() {
  return (
    <header className="flex items-center justify-between h-[73px] border-b-[0.9px] border-gray-300 bg-gray-100 w-[84vw]">
      <div className="flex">
        <span className="material-symbols-outlined text-gray-350 bg-white flex items-center justify-center w-[3vw] text-[29px] h-[48px] rounded-tl-[8px] rounded-bl-[8px] ml-[28px]">
          search
        </span>
        <input type="text" placeholder="Search Tasks" className=" outline-none w-[14.5vw] text-[15px] font-semibold " />
        <span className="material-symbols-outlined text-gray-350 bg-white flex items-center justify-center w-[3vw] text-[29px] h-[48px] rounded-tr-[8px] rounded-br-[8px] ">
          login
        </span>
        <span className="material-symbols-outlined bg-gray-100 text-gray-350 flex items-center justify-center w-[3vw] text-[29px] h-[48px] ml-[14px]">
          mic
        </span>
      </div>
      <div className="flex gap-3 mr-[23px]">
        <span className="material-symbols-outlined text-gray-350 bg-gray-100 flex items-center justify-center  text-[30px]">
          folder
        </span>
        <span className="material-symbols-outlined text-gray-350 bg-gray-100 flex items-center justify-center text-[30px] ">
          notifications
        </span>
        <div className="h-[39px] w-[39px] ml-[5px] rounded-full border-[1.7px] border-white ">
          <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png" alt="" />
        </div>

      </div>
    </header>
  );
}
