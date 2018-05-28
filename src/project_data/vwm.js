export default {
  title: 'VWM',
  subtitle: 'Psychology Test Web App',
  description: 'Visual Working Memory is a test designed to measure individual differences in working memory. Working memory is the ability to remember information for long enough to use it. This is a core function of the human information processing system.',
  date: 2017,
  roles: ['Design', 'Development'],
  credits:  [
              {name: 'Jonathan Peters', role: 'Research & Pilot Study'}
            ],
  tools: ['Firebase', 'D3.js', 'Three.js', 'Sketch App', 'Maxon Cinema 4D'],
  social: [
    { host: 'Github',
    url: 'https://github.com/ryanachten/VWM' },
    { host: 'Behance',
    url: 'https://www.behance.net/gallery/64144681/Visual-Working-Memory-Psychology-Web-App' }
  ],
  liveSite: {
    label: 'Under Redevelopment',
    live: false
  },
  textureImg: 'vwm.png',
  thumbImg: 'vwm.png',
  videoDocUrl: 'https://vimeo.com/263614649',
  sections: [
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/cd21ef64144681.5ac95f806b35b.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b1b2964144681.5ac94c699e154.png' },
    { type: 'text', header: 'Stack',
      content: "VWM was built using an array of web technologies, including Three.js (for rendering stimuli), D3.js (for graphing user results), and Firebase (for authentication and database storage)."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7790b164144681.5ac96540516cf.jpg' },
    { type: 'text', header: 'Stimulus',
      content: "An important aspect in designing VWM was deciding on what stimuli to use and how they should be presented. The aim was to use unique stimuli, so that there was little chance that any participant would have had prior experience to draw on in responding.\n\n It was important to find a method of stimulus generation that could be employed to procedurally generate many items and utilise stimuli that were not tied to any specific situation or culture."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d195e764144681.5ac89d504518e.png' },
    { type: 'text', header: 'Stimulus',
      content: "Lissajous figures (made by mapping the path of a point travelling in harmonic motion along axes set at right angles to each other) appeared to have potential. Through the addition of a z-axis, 3-dimensional forms were created. These forms, when projected onto a 2-dimensional screen created figures which appeared to be more difficult to accurately encode.\n\n It was hoped that a verbal description for each figure would not suffice for telling them apart."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b1334e64144681.5ac8a3ca1e8e3.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/567f0a64144681.5ac8a19685c73.png' },
    { type: 'text', header: 'Lissajous Phase Shift',
      content: "By manipulating lissajous frequencies, figures of different complexity could be created. Through phase shifting the waveform on any of the axes, figures of similar complexity could be created. Using this process, five sets (defined by frequency combinations) of figures were created for this test, each set contained three figures (created through phase shifting)."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/06178464144681.5ac89254644b7.png' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/186a6864144681.5ac94db51194d.jpg' },
    { type: 'text', header: 'N-Back',
      content: "VWM is loosely based on the n-back task and the delayed matching to sample task. VWM contains four variants named 0- 1-, 2-, and 3-back. The numbers correspond to the number of intervals between a figure's presentation and its expected recognition from three options."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/29366f64144681.5ac895d9266a8.png' },
    { type: 'text',
      content: "When a target is present in the options section, it will be accompanied by the other two members of the set to which that target belongs. The order of samples is randomly generated at runtime, but samples from the same set cannot repeat until n+1 trials have passed."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c98f464144681.5ac958344f5da.png' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/fb817464144681.5ac94db511d4e.jpg' },
    { type: 'text', header: 'Results',
      content: "After completing the 3-back stage, participants are presented with a results page. Here users can view their success rate for each of the n-back stages as well as the time they took to complete them."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/69737364144681.5ac950b9b0bea.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b1244964144681.5ac8986689d49.jpg' },
  ]
};
