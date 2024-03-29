import React, { useState, useEffect } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useLocation } from "react-router-dom"

export default function Invoice() {
  const URL = import.meta.env.VITE_API_URL
  const userId = sessionStorage.getItem("userId")
    ? sessionStorage.getItem("userId")
    : "276"
  const cabangId = sessionStorage.getItem("cabangId")
    ? sessionStorage.getItem("cabangId")
    : ""
  const namaCabang = sessionStorage.getItem("cabangName")
    ? sessionStorage.getItem("cabangName")
    : "Cabang Sempoa"
  const [muridFilter, setMuridFilter] = useState([])
  const [namaMurid, setNamaMurid] = useState("")
  const location = useLocation()
  const { currentMonth, currentYear } = location.state ? location.state : ""
  const [thisMonth, setThisMonth] = useState(
    currentMonth === undefined ? new Date().getMonth() + 1 : currentMonth
  )
  const [thisYear, setThisYear] = useState(
    currentYear === undefined ? new Date().getFullYear() : currentYear
  )

  const getData = async () => {
    try {
      const params = new URLSearchParams({
        cabang: `${cabangId}`,
        id: `${userId}`,
      })
      const { data } = await axios.post(
        `${URL}/murid/filter-by-invoice?${params}`
      )
      setNamaMurid(data.nama)
      setMuridFilter(data.pembayaran)
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
      })
    }
  }

  const generateInvoice = async (invoiceId) => {
    try {
      const params = new URLSearchParams({
        cabang: `${cabangId}`,
        id: `${userId}`,
        invoiceId: `${invoiceId}`,
      })

      await axios.get(`http://localhost:5000/murid/generateInvoice?${params}`)
      window.location.href = `http://localhost:5000/murid/generateInvoice?${params.toString()}`
    } catch (error) {
      toast.warn("Generate Invoice Failed", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    handleDateChange()
  }, [thisMonth, thisYear])

  const formatDate = (date) => {
    const trimmedDateString = date.substring(0, date.length - 5)
    const finalDateString = trimmedDateString.replace("T", " ")
    return finalDateString
  }

  const handleMonth = (e) => {
    const month = e.target.value
    setThisMonth(month)
  }

  const handleYear = (e) => {
    const year = e.target.value
    setThisYear(year)
  }

  const [invoiceObj, setInvoiceObj] = useState({
    invoice: {
      bulan: `${thisMonth}-${thisYear}`,
      status: "Paid",
      kupon: "",
      tipe: "Iuran Bulanan",
      harga: null,
      jenis_pembayaran: "Cash",
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInvoiceObj((prevObject) => ({
      ...prevObject,
      invoice: {
        ...prevObject.invoice,
        bulan: `${thisMonth}-${thisYear}`,
        [name]: value,
      },
    }))
  }

  const handleDateChange = () => {
    setInvoiceObj((prevObject) => ({
      ...prevObject,
      invoice: {
        ...prevObject.invoice,
        bulan: `${thisMonth}-${thisYear}`,
      },
    }))
  }

  const timeout = (delay) => {
    return new Promise((res) => setTimeout(res, delay))
  }

  const createInvoice = async () => {
    if (
      invoiceObj.invoice.harga === null ||
      invoiceObj.invoice.harga === "" ||
      invoiceObj.invoice.kupon === ""
    ) {
      toast.warn("Please fill in all the fields!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      return
    }
    try {
      const response = await axios.put(
        `${URL}/murid/invoice/${userId}`,
        invoiceObj
      )
      toast.success("Response: Success", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      getData()
      await timeout(3000)
    } catch (error) {
      const message = error.response.data.error
      toast.warn(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }

  const handleGenerateInvoice = (invoiceId) => {
    console.log(invoiceId)
    console.log(userId)
    console.log(cabangId)
    generateInvoice(invoiceId)
  }

  return (
    <div className="flex flex-col bg-orange-sempoa overflow-x-hidden">
      <div className="flex justify-between items-center bg-orange-darker font-Inter text-white p-6 px-12">
        <div className="space-y-2">
          <h1 className="font-bold text-2xl">{namaCabang}</h1>
          <h2 className="font-extralight text-md">Kota, Provinsi</h2>
        </div>
        <span className="text-3xl font-bold">Invoice</span>
      </div>

      <div className="px-12 p-6 space-y-4 grid">
        <h1 className="text-white text-2xl">{"Invoices: " + namaMurid}</h1>
        <div className="flex">
          <div className="flex justify-end gap-2">
            <h1 className="text-white my-3">CREATE INVOICE FOR:</h1>
            <h1 className="text-white font-medium my-3 ml-10">Bulan</h1>
            <select
              className="select select-bordered text-white"
              defaultValue={thisMonth}
              onChange={handleMonth}
            >
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
            <h1 className="text-white font-medium my-3">Tahun</h1>
            <select
              className="select select-bordered text-white"
              defaultValue={thisYear}
              onChange={handleYear}
            >
              <option className="text-black">{new Date().getFullYear()}</option>
              <option className="text-black">
                {new Date().getFullYear() + 1}
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 space-x-2 pb-6">
          <div className="col-span-1">
            <div className="flex flex-col gap-1">
              <span className="text-white">Status</span>
              <select
                onChange={handleInputChange}
                name="status"
                className="select select-bordered text-black rounded-3xl bg-white lg:w-[24rem] border-white"
              >
                <option className="text-black">Paid</option>
                <option className="text-black">Pending</option>
              </select>
              <span className="text-white">Kupon</span>
              <input
                onChange={handleInputChange}
                name="kupon"
                type="text"
                id="kupon"
                className="max-w-[24rem] p-3 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
              />
            </div>
          </div>

          <div className="col-span-1 pl-6">
            <div className="flex flex-col gap-1">
              <span className="text-white">Tipe Invoice</span>
              <select
                onChange={handleInputChange}
                name="tipe"
                className="select select-bordered text-black rounded-3xl bg-white lg:w-[24rem] border-white"
              >
                <option className="text-black">Iuran Bulanan</option>
                <option className="text-black">Lainnya</option>
              </select>
              <span className="text-white">Harga</span>
              <input
                onChange={handleInputChange}
                name="harga"
                type="text"
                id="harga"
                className="max-w-[24rem] p-3 px-6 bg-[#FAFAFA] border-2 border-orange-sempoa rounded-3xl focus:outline-none"
              />
            </div>
          </div>

          <div className="col-span-1 pl-6">
            <div className="flex flex-col gap-1">
              <span className="text-white">Jenis Pembayaran</span>
              <select
                onChange={handleInputChange}
                name="jenis_pembayaran"
                className="select select-bordered text-black rounded-3xl bg-white lg:w-[24rem] border-white"
              >
                <option className="text-black">Cash</option>
                <option className="text-black">EDC</option>
                <option className="text-black">Debit</option>
              </select>
              <span className="text-orange-sempoa">Harga</span>
              <button
                onClick={createInvoice}
                className="btn text-white max-w-[24rem] rounded-3xl"
              >
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto bg-white rounded-3xl">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="normal-case text-lg">Bulan</th>
                <th className="normal-case text-lg">Status</th>
                <th className="normal-case text-lg">Kupon</th>
                <th className="normal-case text-lg">Tanggal</th>
                <th className="normal-case text-lg">Jenis Pembayaran</th>
                <th className="normal-case text-lg">Print</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {muridFilter.length == 0 ? (
                <tr>
                  <th></th>
                  <td colSpan="3"></td>
                  <td colSpan="3">No Invoices found</td>
                  <td colSpan="2"></td>
                </tr>
              ) : (
                muridFilter.map((data, i) => {
                  return (
                    <tr key={i} className="border-hidden hover text-black">
                      <th></th>
                      <td>{data.bulan}</td>
                      <td>{data.status}</td>
                      <td>{data.kupon}</td>
                      <td>{formatDate(data.tanggal)}</td>
                      <td>{data.jenis_pembayaran}</td>
                      <td>
                        <button
                          onClick={() => handleGenerateInvoice(data._id)}
                          className="btn"
                        >
                          print
                        </button>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}
