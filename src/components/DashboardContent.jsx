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
    <div className="ml-[27px] flex-1 w-[83vw] ">
      <div className="ml-[30px] flex gap-[20px] justify-center items-center w-[10vw] h-[90px]">
        <h2 className="text-[32px] font-bold text-gray-700">Dashboard</h2>
        <span className="material-symbols-outlined text-gray-350 bg-gray-100 flex items-center justify-center text-[28px] cursor-pointer ">
          edit
        </span>
      </div>

      {/* Dashboard */}
      <div className="w-[81.1vw] h-[472px] rounded-xl pl-[1.1vw]  bg-white">
        <div className="flex gap-5 justify-center items-center w-[11vw] pt-[10px] pb-[18px]">
          <p className="text-[23.5px] font-semibold text-gray-700">dbo.Alertas</p>
          <span className="material-symbols-outlined font-extrabold mt-[2px] cursor-pointer">
            keyboard_arrow_down
          </span>
        </div>
        <table className=" bg-white w-[79vw] rounded-tl-xl rounded-tr-xl overflow-hidden ">
          <thead className="bg-blue-570 text-white text-left">
          <tr>
  <th className="p-[14px] w-[20vw] text-[19.3px] flex gap-3 items-center border-r border-blue-570 font-semibold">
    Timestamp
    <div className="flex flex-col cursor-pointer">
      <span className="material-symbols-outlined text-[20px] h-[13px] font-bold">
        keyboard_arrow_up
      </span>
      <span className="material-symbols-outlined text-[20px] font-bold">
        keyboard_arrow_down
      </span>
    </div>
  </th>
  <th className="p-[14px] text-[19.3px] relative font-semibold">
    Tipo Alerta
    <div className="absolute flex flex-col top-[15px] cursor-pointer left-[126px] ">
      <span className="material-symbols-outlined text-[20px] h-[13px] font-bold">
        keyboard_arrow_up
      </span>
      <span className="material-symbols-outlined text-[20px] font-bold">
        keyboard_arrow_down
      </span>
    </div>
  </th>
  <th className="p-[14px] text-[19.3px] relative font-semibold">
  Descripción
  <div className="absolute flex flex-col cursor-pointer top-[15px] left-[137px] ">
    <span className="material-symbols-outlined text-[20px] h-[13px] font-bold">
      keyboard_arrow_up
    </span>
    <span className="material-symbols-outlined text-[20px] font-bold">
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
                className={`${index % 2 === 1 ? 'bg-blue-50' : 'bg-white'
                  } border-b border-l border-r`}
              >
                <td className="p-[15.6px] text-[15px] text-gray-700">{alert.timestamp}</td>
                <td className="p-[15.6px] text-[15px] text-gray-700">{alert.tipo}</td>
                <td className="p-[15.6px] text-[15px] text-gray-700">{alert.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
