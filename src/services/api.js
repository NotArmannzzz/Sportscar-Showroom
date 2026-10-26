// const API_URL = "http://127.0.0.1:8000/api";

// export async function login(email, password) {
//   const response = await fetch(`${API_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Login gagal.");
//   }

//   return data;
// }

// export async function getCars(token) {
//   const response = await fetch(`${API_URL}/cars`, {
//     headers: {
//       Accept: "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Gagal mengambil data mobil.");
//   }

//   return data;
// }
