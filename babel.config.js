module.exports = {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic', // Configuração para React 17+ que elimina a necessidade de importar React manualmente
        },
      ],
      '@babel/preset-typescript', // Adiciona suporte a TypeScript
    ],
    plugins: [
      process.env.NODE_ENV !== 'production' && require.resolve('react-refresh/babel'), // Suporte ao React Refresh em desenvolvimento
    ].filter(Boolean), // Filtra valores falsos para garantir que o plugin React Refresh só seja adicionado no ambiente de desenvolvimento
  };