export const BASE_URL = "http://localhost:4000";

export default function (endPoint, params) {
  return fetch(`${BASE_URL}/${endPoint}`, params).then(async (response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    let data;
    try {
      data = await response.json();
    } catch {
      data = response;
    }
    return data;
  });
}
