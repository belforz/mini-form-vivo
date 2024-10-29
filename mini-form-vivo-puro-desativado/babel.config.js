const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // Suporte ao JSX sem necessidade de importar React
      },
    ],
    '@babel/preset-typescript', // Suporte a TypeScript
  ],
  plugins: [
    !isProduction && 'react-refresh/babel',
  ].filter(Boolean), // Inclui o plugin apenas em desenvolvimento
};
