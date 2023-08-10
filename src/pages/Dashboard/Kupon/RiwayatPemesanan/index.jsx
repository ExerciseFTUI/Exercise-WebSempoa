import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RiwayatPemesanan() {
  const URL = import.meta.env.VITE_API_URL;
  const [kupon, setKupon] = useState([]);

  const cabangId = sessionStorage.getItem("cabangId") ? sessionStorage.getItem("cabangId") : "";

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${URL}/`, {
          params: {
            cabang: `${cabangId}`,
          },
        });
        setKupon(data);
      } catch (error) {
        toast.warn("No Data Found!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };
    getData();
  }, [cabangId]);
  console.log(kupon);

  const handleInputChange = async (e) => {
    const { value } = e.target;
    try {
      const { data } = await axios.get(`${URL}/`, {
        //////filter
        params: {
          nama: `${value}`,
          cabang: `${cabangId}`,
        },
      });
      setKupon(data);
    } catch (error) {
      toast.warn("Something went wrong", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      handleInputChange(e);
    }
  };

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row items-center space-x-2">
          <input type="search" className="rounded-3xl px-5 p-2 w-full max-w-xs focus:outline-none" placeholder="Search" onKeyDown={handleKeyDown} />

          <CiSearch className="text-4xl text-white" />
        </div>

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
              {kupon.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="3"></td>
                  <td colSpan="2">No results found</td>
                  <td colSpan="3"></td>
                </tr>
              ) : (
                kupon.map((data, i) => {
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
