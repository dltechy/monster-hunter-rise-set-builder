module.exports = (eslint) => {
  const { CLIEngine } = eslint;
  const cli = new CLIEngine({});

  return {
    '*.{js,jsx,ts,tsx}': (files) =>
      `eslint --ext .js,.jsx,.ts,.tsx --max-warnings=0 --fix ${files
        .filter((file) => !cli.isPathIgnored(file))
        .join(' ')}`,
  };
};
