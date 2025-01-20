import { Link, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="w-[15.5vw] overflow-y-auto bg-white text-blue-570 h-full shadow-lg fixed left-0 top-0 scrollbar-hide">
            <div className=" flex gap-2 items-center pl-[18px]  w-[16vw] h-[73px] border-b-[0.9px] border-gray-200 ">
                <img src="https://shorturl.at/K5R1j" className="mr-[4.1vw]  h-[60px] mt-2 w-[115px] object-cover " alt="" />
                <span className="material-symbols-outlined text-gray-300 cursor-pointer text-[20px]">
                    menu_open
                </span>
            </div>

            <div  className="uppercase font-bold flex items-center font-sans h-[64px] pt-[2px] w-[12.5vw] border-b-[0.9px] border-gray-200 ml-[1.7vw] text-[11.5px]">    
            <Link to="/Dashboard" >
                Dashboard
            </Link>
            </div>

            <nav className="mt-5 ">
                <ul>
                    <li className="uppercase w-[13vw]  font-extrabold text-gray-700 flex gap-[95px] items-center ml-[1.7vw] text-[11.5px]"><p>PRODUCCIÓN</p> <span className="material-symbols-outlined text-blue-570 text-[22.5px] font-medium cursor-pointer">
                        keyboard_arrow_up
                    </span> </li>
                    <li className="mt-6 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        browse_activity
                    </span><p>Monitorización</p></li>
                    <li className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        history
                    </span><p>Histórico</p></li>
                    <li className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        settings
                    </span><p>Control</p></li>
                    <li className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        date_range
                    </span><p>Planificar</p></li>
                    <li className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        autostop
                    </span><p>Automatizar</p></li>
                    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
                    </ul>

                    <ul className="mt-5">

                    <li className="uppercase w-[13vw]  font-extrabold text-gray-700 flex gap-[123.5px] items-center ml-[1.7vw] text-[11.5px]"><p>CALIDAD</p> <span className="material-symbols-outlined text-blue-570 text-[22.5px] font-medium cursor-pointer">
                        keyboard_arrow_up
                    </span> </li>
                  
                    <li className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        widgets
                    </span><p>Submenu1</p></li>
                    <li  className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        widgets
                    </span><p>Submenu2</p></li>
                    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
                    </ul>
                    <ul className="mt-5">

                    <li className="uppercase w-[13vw]  font-extrabold text-gray-700 flex gap-[74px] items-center ml-[1.7vw] text-[11.5px]"><p>MANTENIMIENTO</p> <span className="material-symbols-outlined text-blue-570 text-[22.5px] font-medium cursor-pointer">
                        keyboard_arrow_up
                    </span> </li>

                    <li className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        widgets
                    </span><p>Submenu1</p></li>
                    <li  className="mt-5 flex items-center gap-4 text-[12px] font-medium text-gray-450 pl-[1.8vw] cursor-pointer"><span className="material-symbols-outlined text-[17.5px] ">
                        widgets
                    </span><p>Submenu2</p></li>
                    <li className=" mt-5 w-[12.5vw] border-b-[0.9px] border-gray-300 ml-[1.7vw]"></li>
                </ul>
            </nav>
        </aside>
    );
}
