export const getView = async (view) => {
  switch (view) {
    case "Home":
      return [{ name: "Home", link: "/" }];
    case "Login":
      return [
        { name: "Login", link: "/login" },
        { name: "Signup", link: "/signup" }, // Fixed typo (was "Signup" as link)
      ];
    case "Settings":
      return Array.from({ length: 4 }, (_, i) => ({
        name: `Option ${i + 1}`,
        link: "/",
      }));
    default:
      return [];
  }
};
