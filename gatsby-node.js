exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: '/fs/',
    redirectInBrowser: true,
    toPath: '/event/better-budget-data-quest-free-state/',
  });
};
