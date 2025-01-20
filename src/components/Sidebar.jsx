import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="w-[16vw] overflow-y-auto bg-white text-blue-570 h-full shadow-lg fixed left-0 top-0 scrollbar-hide">
            <div className=" flex justify-evenly items-center  w-[16vw] h-[73px] border-b-[0.9px] border-gray-300 ">
                <img src="https://shorturl.at/K5R1j" className="mr-[4.1vw]  h-[60px] mt-2 w-[115px] object-cover " alt="" />
                <span className="material-symbols-outlined text-gray-300 cursor-pointer text-[23px]">
                    menu_open
                </span>
            </div>

            <div  className="uppercase font-bold pt-[26.5px] h-[73px] w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw] text-[15px]">    
            <Link to="/Dashboard" >
                Dashboard
            </Link>
            </div>

            <nav className="mt-6 ">
                <ul>
                    <li className="uppercase w-[13vw]  font-bold text-black flex justify-between ml-[1.7vw] text-[15px]"><p>PRODUCCIÓN</p> <span className="material-symbols-outlined text-blue-570 font-semibold cursor-pointer">
                        keyboard_arrow_up
                    </span> </li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px] ">
                        browse_activity
                    </span><p>Monitorización</p></li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        history
                    </span><p>Histórico</p></li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        settings
                    </span><p>Control</p></li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        date_range
                    </span><p>Planificar</p></li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        autostop
                    </span><p>Automatizar</p></li>
                    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
                    </ul>

                    <ul className="mt-6">
                    <li className="uppercase w-[13vw]  font-bold text-black flex justify-between ml-[1.7vw] text-[15px]"><p>CALIDAD</p> <span className=" cursor-pointer material-symbols-outlined text-blue-570 font-semibold">
                        keyboard_arrow_up
                    </span> </li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        widgets
                    </span><p>Submenu1</p></li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        widgets
                    </span><p>Submenu2</p></li>
                    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
                    </ul>
                    <ul className="mt-6">
                    <li className="uppercase w-[13vw]  font-bold text-black flex justify-between ml-[1.7vw] text-[15px]"><p>MANTENIMIENTO</p> <span className="material-symbols-outlined text-blue-570 font-semibold cursor-pointer">
                        keyboard_arrow_up
                    </span> </li>
                      <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        widgets
                    </span><p>Submenu1</p></li>
                    <li className="mt-5 flex gap-4 text-[15px] text-gray-450 pl-[2vw] cursor-pointer"><span className="material-symbols-outlined text-[22.2px]">
                        widgets
                    </span><p>Submenu2</p></li>
                    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
                </ul>
            </nav>
        </aside>
    );
}
