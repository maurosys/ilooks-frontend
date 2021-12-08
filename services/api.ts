import axios          from "axios";
import {parseCookies} from "nookies";

// const { "nextilooks.auth": auth } = parseCookies();

// const api = axios.create({
//   baseURL: "http://localhost:3333",
// });

// if (auth) {
//   const token = JSON.parse(auth);

//   api.defaults.headers["Authorization"] = `Bearer ${token.token}`;
// }

// export default api;

export function getAPIClient(ctx?: any) {
  const {"nextilooks.auth": auth} = parseCookies(ctx);

/*
  HOMO: https://api-ilooks-homologacao.mybluemix.net
  DEV:  http://localhost:3333
  PRD:  https://api-ilooks.mybluemix.net
 */
  const api = axios.create({
                             baseURL: 'https://api-ilooks.mybluemix.net',
                           });

  if (auth) {
    const token = JSON.parse(auth);

    api.defaults.headers["Authorization"] = `Bearer ${token.token}`;
  }

  return api;
}

const api = getAPIClient();

// api.interceptors.request.use((config) => {
//   console.log(config);
//   return config;
// });

export default api;
