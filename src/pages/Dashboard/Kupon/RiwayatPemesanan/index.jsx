import React from "react";
import { getKupon } from "../../../../utils";
import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RiwayatPemesanan() {
  const cabangId = sessionStorage.getItem("cabangId") ? sessionStorage.getItem("cabangId") : "";
  const kuponQuery = useQuery({
    queryKey: ["getKupon", cabangId],
    queryFn: () => getKupon(cabangId),
  });

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="px-12 p-6 space-y-6">
        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">No.</th>
                <th className="normal-case text-lg">Req. ID</th>
                <th className="normal-case text-lg">Tanggal Pemesanan</th>
                <th className="normal-case text-lg">Pengirim</th>
                <th className="normal-case text-lg">Penerima</th>
                <th className="normal-case text-lg">Bundle</th>
                <th className="normal-case text-lg">Status</th>
                <th className="normal-case text-lg">Perubahan Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {kuponQuery.data?.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="3"></td>
                  <td colSpan="2">No results found</td>
                  <td colSpan="3"></td>
                </tr>
              ) : (
                kuponQuery.data?.map((data, i) => {
                  return (
                    <tr key={i} className="border-hidden hover text-black">
                      <th></th>
                      <td>{i + 1}</td>
                      <td>{data.k}</td>
                      <td>{data.k}</td>
                      <td>{data.l}</td>
                      <td>{data.k}</td>
                      <td>{data.k}</td>
                      <td>{data.k}</td>
                      <td>{data.k}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </div>
  );
}
