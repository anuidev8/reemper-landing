//mutations
import cookiesMutation from "@/apollo/mutations/cookies.graphql";

export const state = () => ({
  cookie: false,
});

export const actions = {
  setCookies({ commit }, data) {
    new Promise((resolves, reject) => {
      this.app.apolloProvider.clients.defaultClient
        .mutate({
          mutation: cookiesMutation,
          variables: data && data,
        })
        .then((res) => resolves(res))
        .catch((err) => reject(err));
    });
  },
};
