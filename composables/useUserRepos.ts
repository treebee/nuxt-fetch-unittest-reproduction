import { useFetch, ref } from "@nuxtjs/composition-api";

const useUserRepos = (user: string) => {
  const repositories = ref([]);

  const { fetch: fetchUserRepositories } = useFetch(async () => {
    fetch(`https://api.github.com/orgs/${user}/repos`)
      .then(response => response.json())
      .then(data => {
        repositories.value = data;
      });
  });

  return { repositories, fetchUserRepositories };
};

export default useUserRepos;
