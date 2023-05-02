import { InMemoryCache } from "apollo-cache-inmemory";

export default function (context) {
  let currentPath = null;
  let isPathIsValid = false;
  if (process.client) {
    currentPath = window.location.href;
    isPathIsValid = currentPath.includes("dev") ? true : false;
  }
  return {
    httpLinkOptions: {
      uri: () => {
        let currentApiUrl;
        if (isPathIsValid) {
          currentApiUrl = "https://devapi.reemp.co/graphql";
        } else {
          currentApiUrl =
            process.env.NODE_ENV === "development"
              ? "https://devapi.reemp.co/graphql"
              : "https://api.reemp.co/graphql";
        }

        return currentApiUrl;
      },
      credentials: "same-origin",
      headers: {
        token: "gzgYiN5HmGvuPVnFh7xBB_eN-_gjIU_Fb7FLBHw9Cdg",
      },
    },
    //token: "gzgYiN5HmGvuPVnFh7xBB_eN-_gjIU_Fb7FLBHw9Cdg"
    /*   async getAuth() {
      return `gzgYiN5HmGvuPVnFh7xBB_eN-_gjIU_Fb7FLBHw9Cdg`;
    }, */
    cache: new InMemoryCache(),
    //¿¿wsEndpoint: 'ws://localhost:8000/graphql',
  };
}
