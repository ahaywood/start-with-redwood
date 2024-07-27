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
        auth: 'url("/images/bg-login.svg")',
      },
      backgroundPosition: {
        'center-top': 'center top',
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        charcoal: '#424242' /* dark gray */,
        richBlack: '#021110' /* almost black, green */,
        selectiveYellow: '#ffb700',
        tinGray: '#7e7e7e' /* middle gray */,
        roseWhite: '#fff5f5',
        java: '#1ccabf' /* green / teal */,
        gossamer: '#009788' /* darker shade of green / teal */,
        submarine: '#8ba19f' /* middle gray / icon color */,
        darkPastelRed: '#bf4723',
        montana: '#363d3b' /* dark gray / border color */,
        error: {
          lighter: '#db5e3b',
          DEFAULT: '#bf4723',
          darker: '#94371b',
        },
      },
      margin: {
        mainLeft: '7rem',
        mainRight: '4.125rem',
        sidebar: '286px',
      },
      padding: {
        mainLeft: '7rem',
        mainRight: '4.125rem',
        mainTop: '2rem',
        sidebar: '286px',
        18: '4.5rem',
      },
    },
  },
}
