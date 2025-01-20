// src/components/DashboardContent.jsx


export default function DashboardContent() {
  const alerts = [
    { timestamp: '2024-10-30 06:21:45', tipo: 'Tipo1', descripcion: 'Descripción de alerta 1' },
    { timestamp: '2024-10-30 06:48:35', tipo: 'Tipo2', descripcion: 'Descripción de alerta 2' },
    { timestamp: '2024-10-30 07:11:06', tipo: 'Tipo3', descripcion: 'Descripción de alerta 3' },
    { timestamp: '2024-10-30 07:15:25', tipo: 'Tipo4', descripcion: 'Descripción de alerta 4' },
    { timestamp: '2024-10-30 07:18:36', tipo: 'Tipo5', descripcion: 'Descripción de alerta 5' },
    { timestamp: '2024-10-30 07:21:49', tipo: 'Tipo6', descripcion: 'Descripción de alerta 6' },
  ];

  return (
    <div className="ml-[21px] flex-1 w-[84.5vw] ">
      <div className=" flex gap-[20px] mt-[-8px] justify-center items-center w-[10vw] h-[90px]">
        <h2 className="ml-[14px] text-[24.7px] font-bold text-black">Dashboard</h2>
        <span className="material-symbols-outlined text-gray-350 mt-[2.5px] bg-gray-200 flex items-center justify-center text-[22px] cursor-pointer ">
          edit
        </span>
      </div>

      {/* Dashboard */}
      <div className="w-[82.1vw] h-[375px] rounded-xl pl-[0.6vw]  bg-white">
        <div className="flex gap-4 justify-center items-center w-[8.3vw] pt-[10px] pb-[18px]">
          <p className="text-[17px] font-bold text-black">dbo.Alertas</p>
          <span className="material-symbols-outlined text-[20px] font-extrabold mt-[2px] cursor-pointer">
            keyboard_arrow_down
          </span>
        </div>




        <table className=" bg-white w-[81vw] rounded-tl-xl rounded-tr-xl overflow-hidden ">
          <thead className="bg-blue-570 text-white text-left">
          <tr>
  <th className="p-[10.9px] w-[30vw] text-[16px] flex gap-[9px] items-center border-r border-blue-570 font-bold">
    Timestamp
    <div className="flex flex-col cursor-pointer">
      <span className="material-symbols-outlined text-[12px] h-[13px] font-semibold">
        keyboard_arrow_up
      </span>
      <span className="material-symbols-outlined text-[12px] font-semibold">
        keyboard_arrow_down
      </span>
    </div>
  </th>
  <th className="p-[10.9px] w-[26vw] text-[16px] relative font-bold">
    Tipo Alerta
    <div className="absolute flex flex-col top-[11px] cursor-pointer left-[104px] ">
      <span className="material-symbols-outlined text-[12px] h-[13px] font-semibold">
        keyboard_arrow_up
      </span>
      <span className="material-symbols-outlined text-[12px] font-semibold">
        keyboard_arrow_down
      </span>
    </div>
  </th>
  <th className="p-[10.9px] text-[16px] w-[20vw] relative font-bold">
  Descripción
  <div className="absolute flex flex-col cursor-pointer top-[11px] left-[108px] ">
    <span className="material-symbols-outlined text-[12px] h-[13px] font-semibold">
      keyboard_arrow_up
    </span>
    <span className="material-symbols-outlined text-[12px] font-semibold">
      keyboard_arrow_down
    </span>
  </div>
</th>

</tr>

          </thead>
          <tbody>
            {alerts.map((alert, index) => (
              <tr
                key={index}
                className={`${index % 2 === 1 ? 'bg-blue-100' : 'bg-white'
                  } border-b-[1px] border-l-[2px] border-r-[1px] border-gray-300`}
              >
                <td className="p-[11.5px] text-[13px] text-gray-700">{alert.timestamp}</td>
                <td className="p-[11.5px] text-[13px] text-gray-700">{alert.tipo}</td>
                <td className="p-[11.5px] text-[13px] text-gray-700">{alert.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
