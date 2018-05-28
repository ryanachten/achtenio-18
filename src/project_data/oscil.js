export default {
  title: 'Oscil',
  subtitle: 'Audio-Visual Web App',
  description: "Oscil is an audio-visual web application which takes audio information via a user’s microphone input and uses the resulting waveform to drive various visualisations. These visualisations are intended to be used in both a performance context or simply to accompany leisurely playing of music.",
  date: 2018,
  roles: ['Design','Development'],
  tools: ['React', 'Redux', 'Babel', 'Webpack', 'Three.js', 'p5.js', 'Canvas API', 'Web Audio API', 'Sketch App', 'Maxon Cinema 4D'],
  social: [
    { host: 'GitHub',
    url: 'https://github.com/ryanachten/Oscil' },
    { host: 'Behance',
    url: 'https://www.behance.net/gallery/64019463/Oscil-Audio-Visual-Web-App' }
  ],
  liveSite: {
    label: 'oscil.herokuapp.com',
    url: 'https://oscil.herokuapp.com/',
    live: true
  },
  textureImg: 'oscil.png',
  thumbImg: 'oscil.png',
  videoDocUrl: 'https://vimeo.com/265857715',
  sections: [
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e466c64019463.5ada9e2d69c5d.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6cba0964019463.5ada601c2cab1.png' },
    { type: 'text', header: 'Dependencies',
      content: "Oscil was originally developed as a static site using plain old JavaScript. Where the previous static site required bloated boilerplates and was unreliably slow when switching visual libraries, the decision to adopt libraries such as React and the Webpack bundler has helped not only increase the application’s performance but also its maintainability."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/6ef6c264019463.5ad99b8e47190.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/27c4b564019463.5ad99b8e485d4.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/87299564019463.5ad9b4785f522.png' },
    { type: 'text', header: 'AudioAnalyser',
      content: "The role of the AudioAnalyser component is to transform the audio waveform from the user’s microphone into something useful for the canvas components. Using the Web Audio API, the waveform is passed through a number of nodes controlled by the Audio Settings GUI."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/90dd8364019463.5ad99b8e48e23.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/502f8c64019463.5ad9b478600f5.png' },
    { type: 'text', header: 'Audio Sampling',
      content: "There are a number of methods for using audio information in visualisations. The three most common methods used in Oscil’s current visualisations are:\n\n Taking a normalized sample from the first index of the audio waveform\n\n Taking a normalized sample from an index in the waveform which increments each animation frame (and resets once it gets to the end) \n\n Applying the information from each index of the waveform to a different element"
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7ee6d564019463.5ad9c2e861e4c.jpg' },
    { type: 'text', header: 'Visualisations',
      content: "The React application was born out a need to cohesively house various experiments created using the HTML Canvas API, p5.js, and Three.js developed over the course of last year. These visualisations tend to be based on generative or natural algorithms, inspired by the likes of Shiffman’s Nature of Code and Bohnacker et al’s Generative Design (often refactored from Processing)."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/4698e264019463.5ad9b47861296.png' },
    { type: 'text', subheader: 'Visual Renderers',
      content: "Visuals created using three different visual libraries, HTML Canvas API, p5.js, and Three.js, require slightly different initialisations and removal processes. Therefore a component unique to each library was created to handle individual requirements of these ‘renderers’."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/23810d64019463.5adab34341732.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d54db64019463.5ada7cb98c586.png' },
    { type: 'text', subheader: 'Visual Types',
      content: "Visuals created using three different visual libraries, HTML Canvas API, p5.js, and Three.js, require slightly different initialisations and removal processes. Therefore a component unique to each library was created to handle individual requirements of these ‘renderers’."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/0a282164019463.5ad9a680de0fc.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/12005264019463.5ad99b8e47c21.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fdf89d64019463.5ad99b8e4940a.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d422a964019463.5adab2b98f9bb.jpg' },
  ]
};
