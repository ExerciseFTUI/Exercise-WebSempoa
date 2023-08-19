import React from "react";
import { getKupon } from "../../../../utils";
import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StokKuponTc() {
  const cabangId = sessionStorage.getItem("cabangId") ? sessionStorage.getItem("cabangId") : "";

  const kuponQuery = useQuery({
    queryKey: ["getKupon", cabangId],
    queryFn: () => getKupon(cabangId),
  });

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row">
          <div className="overflow-x-auto bg-white rounded-3xl w-3/4">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="normal-case text-lg">No.</th>
                  <th className="normal-case text-lg">Bundle</th>
                  <th className="normal-case text-lg">Kupon ID</th>
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
                        <td>{data.bundle}</td>
                        <td>{data.kuponId}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col bg-white rounded-2xl mx-10 h-fit w-1/6 p-5 text-xs sm:text-sm md:text-base">
            <span className="font-bold">Statistik</span>
            <div className="bg-black h-[1.2px]"></div>
            <span className="mt-2">Total Kupon: {kuponQuery.data?.length}</span>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover={false} theme="dark" />
    </div>
  );
}
