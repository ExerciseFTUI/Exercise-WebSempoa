import { useEffect, useState } from "react";
import Select from "react-select";

import { InputText } from "../../components/Inputs";

import { useQuery, useMutation, useQueryClient } from "react-query";

import logo from "../../assets/sempoa-logo.png";
import { addAdmin, getAllCabang } from "../../utils";

function TambahAdmin() {
  const queryClient = useQueryClient();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [selectedCabang, setSelectedCabang] = useState("");
  const [listCabang, setListCabang] = useState([]);

  function getListCabang() {
    setListCabang([]);
  }

  useEffect(() => {
    if (role == "ADMIN_CABANG") getListCabang();
  }, [role]);

  const cabangQuery = useQuery({
    queryKey: ["getAllCabang"],
    queryFn: () => getAllCabang(),
  });

  const adminMutation = useMutation({
    mutationFn: () => addAdmin(username, password, role, selectedCabang),
    onSuccess: () => {
      alert("Sukses menambahkan admin");
      clearState();
    },
    onError: (error) => {
      console.error(error);
      alert("Terdapat Kesalahan Silahkan Coba Lagi");
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (role == "") {
      return;
    }
    adminMutation.mutate();
  }

  function handleRoleChange(e) {
    setRole(e.target.value);

    if (e.target.value !== "ADMIN_CABANG") {
      setSelectedCabang("");
    }
  }

  function clearState() {
    setUsername("");
    setPassword("");
    setRole("");
    setSelectedCabang("");
  }

  return (
    <div
      id="tambah-admin-page"
      className="flex flex-col items-center justify-center"
    >
      <div className="flex flex-col md:flex-row text-center items-center justify-between w-full md:px-28 mb-6 md:m-0">
        <img
          alt="Sempoa's Logo"
          title="Logo Sempoa"
          src={logo}
          className="w-72 object-cover"
        />

        <h1 className="text-orange-darker text-3xl">Tambah Admin</h1>
      </div>

      <form
        id="form-tambah-admin"
        onSubmit={handleSubmit}
        className="text-lg max-w-xl flex flex-col gap-4 items-center"
      >
        <InputText
          name="Username"
          required
          value={username}
          setValue={setUsername}
          flexDirection="flex-col gap-2"
        />

        <InputText
          type="password"
          name="Password"
          required
          value={password}
          setValue={setPassword}
          flexDirection="flex-col gap-2 "
        />

        <div id="select-role" className="text-center space-y-2 w-full">
          <label htmlFor="pilih-role">Role</label>

          <div className="text-orange-sempoa relative">
            <select
              title="pilih-role"
              name="pilih-role"
              required
              value={role}
              onChange={(e) => handleRoleChange(e)}
              className="outline-none border-orange-sempoa border-2 text-orange-sempoa w-full px-4 py-2 rounded-full appearance-none cursor-pointer"
            >
              <option disabled></option>
              <option value="IBO">IBO</option>
              <option value="ADMIN_IBO">Admin IBO</option>
              <option value="ADMIN_CABANG">Admin Cabang</option>
            </select>

            <p className="absolute right-5 top-3 pointer-events-none text-sm">
              ▼
            </p>
          </div>
        </div>

        <div id="select-cabang" className="text-center space-y-2 w-full">
          <label htmlFor="pilih-cabang">Cabang</label>

          <Select
            name="pilih-cabang"
            required={role == "ADMIN_CABANG"}
            isDisabled={!(role == "ADMIN_CABANG")}
            placeholder=""
            isSearchable
            options={cabangQuery.data?.map((cabang) => ({
              value: cabang._id,
              label: cabang.namaCabang,
            }))}
            onChange={(selectedOption) =>
              setSelectedCabang(selectedOption.value)
            }
            styles={{
              control: (base, state) => ({
                // ...base,
                borderColor: "#FB9E23",
                border: "solid 2px",
                cursor: "pointer",
                background: "#FAFAFA",
                opacity: state.isDisabled ? "30%" : "100%",
                display: "flex",
                color: "#FB9E23",
                borderRadius: "2rem",
                margin: "0.5rem 0 1rem",
                paddingLeft: "0.5rem",
                height: "3rem",
              }),
              option: (base, state) => ({
                ...base,
                background:
                  state.isFocused || state.isSelected ? "#FB9E23" : "#FAFAFA",
                color:
                  state.isFocused || state.isSelected ? "#FAFAFA" : "#FB9E23",
              }),
            }}
          />
        </div>

        <button
          type="submit"
          title="tambah-admin"
          className="bg-orange-sempoa text-white w-fit py-2 px-4 whitespace-nowrap rounded-full hover:scale-90 ease-in-out duration-200"
        >
          Tambah Admin
        </button>
      </form>
    </div>
  );
}

export default TambahAdmin;
