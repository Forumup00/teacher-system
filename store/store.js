import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const postsArr = ref([]);

  const getPost = (post) => {
    postsArr.value.push(post);
  };

  return {
    postsArr,
    getPost,
  };
});
