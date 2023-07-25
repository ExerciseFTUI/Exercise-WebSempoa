import { useState } from "react"

import { InputText } from "../../../../components/Inputs/"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

function TambahGuruPage() {
  const [namaLengkap, setNamaLengkap] = useState("")
  const [namaPanggilan, setNamaPanggilan] = useState("")
  const [alamat, setAlamat] = useState("")
  const [telp, setTelp] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [pendidikan, setPendidikan] = useState("")

  function handleGender(e) {
    setGender(e.target.value)
  }

  function handleSubmit(e) {
    if (pendidikan == "") {
      e.preventDefault()
      return
    }
  }

  return (
    <div id="tambah-guru-page" className="h-full p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full h-full p-4 rounded-lg flex"
      >
        <div className="w-full flex flex-col gap-5 mr-16">
          <InputText
            value={namaLengkap}
            setValue={setNamaLengkap}
            name="Nama Lengkap"
            required={true}
          />

          <InputText
            value={namaPanggilan}
            setValue={setNamaPanggilan}
            name="Nama Panggilan"
            required={true}
          />

          <InputText
            value={alamat}
            setValue={setAlamat}
            name="Alamat"
            required={true}
          />

          <InputText
            value={telp}
            setValue={setTelp}
            name="No. Telepon"
            required={true}
          />
        </div>

        <div className="w-full text-lg flex flex-col gap-5">
          <InputText
            value={email}
            setValue={setEmail}
            name="Email"
            required={true}
          />

          <div
            id="change-gender"
            className="flex items-center justify-between text-lg"
          >
            <p className="h-fit">Jenis Kelamin</p>

            <div className="flex items-center gap-16">
              <label
                htmlFor="male-checkbox"
                className="cursor-pointer relative text-orange-sempoa flex items-center"
              >
                <input
                  id="male-checkbox"
                  type="checkbox"
                  value="laki-laki"
                  className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa"
                  checked={gender == "laki-laki" ? true : false}
                  onChange={handleGender}
                />

                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-5 w-5 text-orange-sempoa absolute left-0 top-1 ease-in-out duration-200"
                  style={{
                    opacity: gender == "laki-laki" ? "100%" : "0%",
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
                  value="perempuan"
                  className="appearance-none h-5 w-5 border-2 rounded border-orange-sempoa"
                  checked={gender == "perempuan" ? true : false}
                  onChange={handleGender}
                />

                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-5 w-5 text-orange-sempoa absolute left-0 top-1 ease-in-out duration-200"
                  style={{
                    opacity: gender == "perempuan" ? "100%" : "0%",
                  }}
                />

                <span className="ml-2">Perempuan</span>
              </label>
            </div>
          </div>

          <div className="flex justify-between">
            <label htmlFor="select-education">Pendidikan Terakhir</label>

            <select
              title="select-education"
              name="select-education"
              required={true}
              value={pendidikan}
              onChange={(e) => setPendidikan(e.target.value)}
              className="outline-none border-orange-sempoa border-2 text-orange-sempoa w-1/3 px-4 py-2 rounded-full"
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
            type="submit"
            className="bg-orange-sempoa text-white self-end py-2 px-4 w-fit whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200"
          >
            Tambah Guru
          </button>
        </div>
      </form>
    </div>
  )
}

export default TambahGuruPage
