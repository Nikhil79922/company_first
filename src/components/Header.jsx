
/* eslint-disable no-unused-vars */
// src/components/Header.jsx

import { useForm } from "react-hook-form"
export default function Header() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  

  return (
    <header className="flex items-center justify-between h-[73px] border-b-[0.9px] border-gray-300 bg-gray-200 w-[84.5vw]">
      <div className="flex h-[73px] items-center ">
        <span className="material-symbols-outlined cursor-pointer text-gray-350 bg-white flex items-center justify-center w-[2.8vw] text-[23px] rounded-tl-[8px] rounded-bl-[8px] ml-[21px]  h-[42px]">
          search
        </span>
        <input type="text" name="search" {...register("search")} placeholder="Search Tasks"  className=" h-[42px] font-bold outline-none w-[14vw] text-[12px] " />
        <span className="material-symbols-outlined text-gray-350 bg-white flex items-center justify-center w-[2.8vw] text-[23px] cursor-pointer h-[42px] rounded-tr-[8px] rounded-br-[8px] ">
          login
        </span>
        <span className="material-symbols-outlined cursor-pointer bg-gray-200 text-gray-350 flex items-center justify-center w-[3vw] text-[24px] h-[42px] ml-[8px]">
          mic
        </span>
      </div>
      <div className="flex gap-3 mr-[21px]">
        <span className="material-symbols-outlined cursor-pointer text-gray-350 bg-gray-200 flex items-center justify-center text-[25px]">
          folder
        </span>
        <span className="material-symbols-outlined cursor-pointer text-gray-350 bg-gray-200 flex items-center justify-center text-[25px] ">
          notifications
        </span>
        <div className="h-[35px] w-[35px] ml-[8px] cursor-pointer rounded-full border-[1px] border-white ">
          <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png" alt="" />
        </div>

      </div>
    </header>
  );
}
