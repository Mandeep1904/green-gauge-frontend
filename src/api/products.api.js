const API_ROOT = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BASE_URL = `${API_ROOT}/api/products`;

export const fetchProductsByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/${category}`);
  if (!res.ok) throw new Error("|=| Failed to fetch products |=|");
  return res.json();
};
