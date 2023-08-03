import axios from "axios";

export async function getAllCabang() {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/cabang/getAllCabang`
  );
  return data.data;
}

export async function addAdmin(username, password, role, cabangId) {
  const body = {
    username: username,
    password: password,
    role: role,
    cabangId: cabangId,
  };

  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/register`,
    body
  );

  return data;
}

export async function getKupon(cabangId) {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/kupon/getKuponByCabang/${cabangId}`
  );

  return data;
}

export async function addKupon(bundle, kuponId, cabangId) {
  const body = {
    bundle: bundle,
    kuponId: kuponId,
    cabangId: cabangId,
  };

  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/kupon/addKupon`,
    body
  );

  return data;
}

export async function createNewCabang({namaCabang, namaPemilik, kode, alamat, notelp, email,}){
  const body = {
    namaCabang: namaCabang,
    namaPemilik: namaPemilik,
    kode: kode,
    alamat: alamat,
    notelp: notelp,
    email: email,
  };

  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/cabang/createCabang`,
    body
  );

  return data;
}

export async function addNewGuru({namaGuru, namaPanggilan, gender, alamatGuru, notelp, pendidikanTerakhir, emailGuru, cabangId}){
  const body = {
      namaGuru: namaGuru,
      namaPanggilan: namaPanggilan,
      gender: gender,
      alamatGuru: alamatGuru,
      notelp: notelp,
      pendidikanTerakhir: pendidikanTerakhir,
      emailGuru: emailGuru,
      cabangId: cabangId
  };

  const { data } = await axios.post(
    `${import.meta.env.VITE_API_URL}/guru/addGuru`,
    body
  );

  return data;
}

export async function updateMuridStatus({id_murid, status}){
  const body = {
    status: status
  };

  const { data } = await axios.put(
    `${import.meta.env.VITE_API_URL}/murid/change-status/${id_murid}`,
    body
  );

  return data;
}
