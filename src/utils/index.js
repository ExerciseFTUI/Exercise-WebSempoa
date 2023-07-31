import axios from "axios";

console.log(import.meta.env.VITE_API_URL);

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
