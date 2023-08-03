import { useState } from "react"

import { InputText } from "../../../../components/Inputs/"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { addNewGuru } from "../../../../utils"

import { useMutation } from "react-query"
import { toast, ToastContainer } from "react-toastify"


function TambahGuruPage() {
  const cabangId = sessionStorage.getItem("cabangId")

  const [namaLengkap, setNamaLengkap] = useState("")
  const [namaPanggilan, setNamaPanggilan] = useState("")
  const [alamat, setAlamat] = useState("")
  const [telp, setTelp] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [pendidikan, setPendidikan] = useState("")

  const mutation = useMutation({
    mutationFn: () =>
      addNewGuru({
        namaGuru: namaLengkap,
        namaPanggilan: namaPanggilan,
        gender: gender,
        alamatGuru: alamat,
        notelp: telp,
        pendidikanTerakhir: pendidikan,
        emailGuru: email,
        cabangId: cabangId
      }),
    onSuccess: () => {
      toast.success("Guru baru berhasil didaftarkan", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTimeout(() => {navigate("/cabang")}, 3000)
    },
    onError: (error) => {
      toast.warn("Gagal untuk mendaftarkan guru baru", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTimeout(() => {}, 3000)
    },
  })

  function handleGender(e) {
    setGender(e.target.value)
  }

  function handleSubmit(e) {
    if (pendidikan == "") {
      e.preventDefault()
      return
    }
    mutation.mutate()
  }

  return (
    <div id="tambah-guru-page" className="min-h-[calc(100vh-132px)] p-4">
      <form
        className="bg-white w-full h-full p-4 rounded-lg flex flex-col gap-4 md:flex-row"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <InputText
            value={namaLengkap}
            setValue={setNamaLengkap}
            name="Nama Lengkap"
            required={true}
            flexDirection="flex-col xl:flex-row gap-2 lg:justify-between"
            className="w-full lg:w-auto"
          />

          <InputText
            value={namaPanggilan}
            setValue={setNamaPanggilan}
            name="Nama Panggilan"
            required={true}
            flexDirection="flex-col xl:flex-row gap-2 lg:justify-between"
            className="w-full lg:w-auto"
          />

          <InputText
            value={alamat}
            setValue={setAlamat}
            name="Alamat"
            required={true}
            flexDirection="flex-col xl:flex-row gap-2 lg:justify-between"
            className="w-full lg:w-auto"
          />

          <InputText
            value={telp}
            setValue={setTelp}
            name="No. Telepon"
            required={true}
            flexDirection="flex-col xl:flex-row gap-2 lg:justify-between"
            className="w-full lg:w-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-lg flex flex-col gap-4">
          <InputText
            value={email}
            setValue={setEmail}
            name="Email"
            required={true}
            flexDirection="flex-col xl:flex-row gap-2 lg:justify-between"
            className="w-full lg:w-auto"
          />

          <div
            id="change-gender"
            className="flex flex-col xl:flex-row items-center justify-between gap-2 text-lg"
          >
            <p className="h-fit">Jenis Kelamin</p>

            <div className="flex gap-6">
              <label
                htmlFor="male-checkbox"
                className="cursor-pointer relative text-orange-sempoa flex items-center"
              >
                <input
                  id="male-checkbox"
                  type="checkbox"
                  value="Male"
                  className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa"
                  checked={gender == "Male" ? true : false}
                  onChange={handleGender}
                />

                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-5 w-5 text-orange-sempoa absolute left-0 top-1 ease-in-out duration-200"
                  style={{
                    opacity: gender == "Male" ? "100%" : "0%",
                  }}
                />

                <span className="ml-2">Laki-laki</span>
              </label>

              <label
                htmlFor="female-checkbox"
                className="cursor-pointer relative text-orange-sempoa flex items-center"
              >
                <input
                  id="female-checkbox"
                  type="checkbox"
                  value="Female"
                  className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa"
                  checked={gender == "Female" ? true : false}
                  onChange={handleGender}
                />

                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-5 w-5 text-orange-sempoa absolute left-0 top-1 ease-in-out duration-200"
                  style={{
                    opacity: gender == "Female" ? "100%" : "0%",
                  }}
                />

                <span className="ml-2">Perempuan</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-2">
            <label htmlFor="select-education">Pendidikan Terakhir</label>

            <select
              title="select-education"
              name="select-education"
              required={true}
              value={pendidikan}
              onChange={(e) => setPendidikan(e.target.value)}
              className="outline-none border-orange-sempoa border-2 text-orange-sempoa w-full px-4 py-2 rounded-full lg:w-auto"
            >
              <option disabled></option>
              <option value="S3">S3</option>
              <option value="S2">S2</option>
              <option value="S1">S1</option>
              <option value="SMA">SMA/SMK</option>
              <option value="SMP">SMP</option>
              <option value="SD">SD</option>
            </select>
          </div>

          <button
            title="submit-add-guru"
            type="button"
            onClick={handleSubmit}
            className="bg-orange-sempoa text-white self-end py-2 px-4 w-fit whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200"
          >
            Tambah Guru
          </button>
        </div>
      </form>
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

export default TambahGuruPage
