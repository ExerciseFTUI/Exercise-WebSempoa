import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../../../../components/Contexts/UserContext";

export default function DaftarMurid() {
  const URL = import.meta.env.VITE_API_URL;
  const [murid, setMurid] = useState([]);

  const { cabangId } = useContext(UserContext);

  const getData = async () => {
    try {
      const { data } = await axios.get(`${URL}/murid`);
      setMurid(data);
    } catch (error) {
      alert(error);
    }
  };

  const handleInputChange = async (e) => {
    const { value } = e.target;
    try {
      const { data } = await axios.get(`${URL}/murid/filter-by-nama`, {
        params: {
          nama: `${value}`,
        },
      });
      setMurid(data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex-auto bg-orange-sempoa overflow-x-hidden">
      <div className="px-12 p-6 space-y-6">
        <div className="flex flex-row items-center space-x-2">
          <input
            type="search"
            className="rounded-3xl px-5 p-2 focus:outline-none"
            placeholder="Search"
            onChange={handleInputChange}
          />
          <CiSearch className="text-4xl text-white" />
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">ID</th>
                <th className="normal-case text-lg">Kode</th>
                <th className="normal-case text-lg">Nama</th>
                <th className="normal-case text-lg">Jenis Kelamin</th>
                <th className="normal-case text-lg">Level</th>
                <th className="normal-case text-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {murid.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="3"></td>
                  <td colSpan="2">No results found</td>
                  <td colSpan="3"></td>
                </tr>
              ) : (
                murid.map((data, i) => {
                  return (
                    <tr key={i} className="border-hidden hover text-black">
                      <th></th>
                      <td>{data.id}</td>
                      <td>{data.kode}</td>
                      <td>{data.nama}</td>
                      <td>{data.jenis_kelamin}</td>
                      <td>{data.level_sekarang}</td>
                      <td>{data.status}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
