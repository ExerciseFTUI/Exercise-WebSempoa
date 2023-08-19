import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Rekapitulasi() {
  const URL = import.meta.env.VITE_API_URL;
  const page = useLocation().pathname.split("/")[3] || "siswa";

  const [showInformation, setShowInformation] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Aktif");
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const formatDate = (date) => {
    const trimmedDateString = date.substring(0, date.length - 5);
    const finalDateString = trimmedDateString.replace("T", " ");
    return finalDateString;
  };

  const handleMonth = (e) => {
    const month = e.target.value;
    setCurrentMonth(month);
  };

  const handleYear = (e) => {
    const year = e.target.value;
    setCurrentYear(year);
  };
  const handleStatus = (e) => {
    const status = e.target.value;
    setCurrentYear(status);
  };

  return (
    <div className="bg-orange-sempoa flex flex-col w-full h-screen relative">
      <div className="bg-orange-darker text-white flex justify-between items-center py-4 px-12">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">Rekapitulasi {page[0].toUpperCase() + page.slice(1, page.length)}</h1>

          <div className="flex gap-2">
            <Link
              to="/dashboard/rekapitulasi/siswa"
              className="bg-white text-black border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
              style={page == "siswa" ? { background: "#FAFAFA", color: "#000000" } : { background: "transparent", color: "#FAFAFA" }}>
              Siswa
            </Link>

            <Link
              to="/dashboard/rekapitulasi/status"
              className="text-white border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
              style={page == "status" ? { background: "#FAFAFA", color: "#000000" } : { background: "none", color: "#FAFAFA" }}>
              Status
            </Link>

            <Link
              to="/dashboard/rekapitulasi/kupon"
              className="text-white border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
              style={page == "kupon" ? { background: "#FAFAFA", color: "#000000" } : { background: "none", color: "#FAFAFA" }}>
              Kupon
            </Link>

            <button title="information" className="font-bold px-4 rounded-full border-2 border-white outline-none" onClick={() => setShowInformation(true)}>
              i
            </button>
          </div>
        </div>

        <div className="flex flex-col self-end items-center md:flex-row gap-6">
          {page == "status" && (
            <div className="flex flex-col self-end items-center md:flex-row gap-6">
              <h1 className="text-white font-medium">Status</h1>
              <select className="select select-bordered border-2 text-white" defaultValue={currentStatus} onChange={handleStatus}>
                <option className="text-black">Aktif</option>
                <option className="text-black">Lulus</option>
                <option className="text-black">Cuti</option>
                <option className="text-black">Keluar</option>
              </select>
            </div>
          )}
          <h1 className="text-white font-medium">Bulan</h1>
          <select className="select select-bordered border-2 text-white" defaultValue={currentMonth} onChange={handleMonth}>
            <option className="text-black">1</option>
            <option className="text-black">2</option>
            <option className="text-black">3</option>
            <option className="text-black">4</option>
            <option className="text-black">5</option>
            <option className="text-black">6</option>
            <option className="text-black">7</option>
            <option className="text-black">8</option>
            <option className="text-black">9</option>
            <option className="text-black">10</option>
            <option className="text-black">11</option>
            <option className="text-black">12</option>
          </select>
          <h1 className="text-white font-medium">Tahun</h1>
          <select className="select select-bordered border-2 text-white" onChange={handleYear}>
            <option className="text-black">{new Date().getFullYear()}</option>
            <option className="text-black">{new Date().getFullYear() + 1}</option>
          </select>

          <button className="btn text-white border-2 font-bold" onClick={() => getData()}>
            submit
          </button>
        </div>
      </div>

      <div className="absolute w-full h-full z-10 p-12 backdrop-blur-sm ease-in-out duration-300" style={{ top: showInformation ? 0 : "-100%" }}>
        <div id="information-tab" className="bg-white w-full h-full p-8 rounded-3xl border-2 border-black space-y-2 font-medium relative">
          <p>BL = Murid Aktif Bulan Lalu</p>
          <p>B = Murid Baru</p>
          <p>RA = Murid Re-Aktif</p>
          <p>K = Murid Keluar</p>
          <p>C = Murid Cuti</p>
          <p>L = Murid Lulus</p>
          <p>A = Murid Aktif</p>
          <p>KPN = Kupon (Kupon Tersedia)</p>
          <p>KPNTTL = Kupon Total (Kupon terpakai)</p>

          <button title="close-tab" className="absolute top-4 right-8 text-2xl outline-none font-extrabold border-2 border-black rounded-full px-2 hover:scale-90 ease-in-out duration-200" onClick={() => setShowInformation(false)}>
            ✕
          </button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
