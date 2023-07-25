import { Link, Outlet, useLocation } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../../components/Contexts/UserContext"

export default function Civitas() {
  const page = useLocation().pathname.split("/")[3]

  const namaCabang = sessionStorage.getItem("cabangName")
    ? sessionStorage.getItem("cabangName")
    : "Cabang Sempoa"

  return (
    <div className="bg-orange-sempoa flex flex-col w-full overflow-hidden">
      <div className="bg-orange-darker font-Inter text-white py-6 px-12 flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex md:flex-col items-end md:items-start gap-2">
          <h1 className="font-bold text-2xl">{namaCabang}</h1>
          <h2 className="font-extralight text-md">Kota, Provinsi</h2>
        </div>

        <div className="flex items-end gap-4">
          <Link
            to="/dashboard/daftar-civitas/murid"
            className="bg-white text-black border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
            style={
              page == "murid"
                ? { background: "#FAFAFA", color: "#000000" }
                : { background: "transparent", color: "#FAFAFA" }
            }
          >
            Data Murid
          </Link>
          <Link
            to="/dashboard/daftar-civitas/guru"
            className="text-white border-white border-2 rounded-xl px-4 py-1 ease-in-out duration-200"
            style={
              page == "guru"
                ? { background: "#FAFAFA", color: "#000000" }
                : { background: "none", color: "#FAFAFA" }
            }
          >
            Data Guru
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
}
