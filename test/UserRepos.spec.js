import { render } from "@testing-library/vue";
import UserRepos from "@/components/UserRepos.vue";

describe("UserRepos", () => {
  it("should not crash", () => {
    render(UserRepos, {});
  });
});
