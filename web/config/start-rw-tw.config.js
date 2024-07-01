module.exports = {
  theme: {
    fontFamily: {
      sans: ['Public Sans', 'sans-serif'],
      serif: ['PT Serif', 'serif'],
    },
    extend: {
      backgroundImage: {
        'blank-state': 'url("/images/bg-empty-state.svg")',
        gradient: 'url("/images/bg-gradient.svg")',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        richBlack: '#021110' /* almost black, green */,
        selectiveYellow: '#ffb700',
        tinGray: '#7e7e7e' /* middle gray */,
        roseWhite: '#fff5f5',
        java: '#1ccabf' /* green / teal */,
        submarine: '#8ba19f' /* middle gray / icon color */,
        darkPastelRed: '#bf4723',
        montana: '#363d3b' /* dark gray / border color */,
      },
    },
  },
}
