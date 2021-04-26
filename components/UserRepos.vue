<template>
  <div>
    <ul>
      <li v-for="repo in repositories" :key="repo">
        {{ repo.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import useUserRepos from "~/composables/useUserRepos";

export default defineComponent({
  setup() {
    const { repositories } = useUserRepos("nuxt-community");

    return { repositories };
  },
});
</script>
