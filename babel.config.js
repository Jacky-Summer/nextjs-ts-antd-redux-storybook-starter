module.exports = {
  presets: ['next/babel'],
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: true,
            minify: false,
          },
        ],
      ],
    },
    test: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
      ],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: true,
          },
        ],
      ],
    },
    production: {
      presets: ['next/babel'],
      plugins: [
        [
          'styled-components',
          {
            ssr: true,
            displayName: true,
          },
        ],
      ],
    },
  },
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: 'index.css',
      },
    ],
  ],
}
