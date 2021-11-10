export const BASE_URL = "http://localhost:4000";

const client = async (endPoint, params) => {
  const response = await fetch(`${BASE_URL}/${endPoint}`, params);
  if (!response.ok) {
    return Promise.reject(response);
  }
  let data;
  try {
    data = await response.json();
  } catch {
    data = response;
  }
  return await data;
};

export default client;
