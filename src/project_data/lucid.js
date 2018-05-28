export default {
  title: 'Lucid',
  subtitle: 'Mixed-Reality Web App',
  description: 'Lucid is a mixed-reality application which allows users to design and experience psychedelic visualisations through their browser and virtual-reality headsets. Taking a low-resolution video feed from a user’s device, Lucid creates patterns using 3D geometry and shaders before rendering stereoscopically.',
  date: 2018,
  roles: ['Design','Development'],
  tools: ['React', 'Redux', 'Babel', 'Webpack', 'Three.js', 'Sketch App', 'Maxon Cinema 4D'],
  social: [
    { host: 'Github',
    url: 'https://github.com/ryanachten/Lucid' },
    { host: 'Behance',
    url: 'https://www.behance.net/gallery/66084939/Lucid-Mixed-Reality-Psychedelia' }
  ],
  liveSite: {
    label: 'lucidreality.herokuapp.com',
    url: 'https://lucidreality.herokuapp.com/',
    live: true
  },
  textureImg: 'lucid2.png',
  thumbImg: 'lucid.png',
  videoDocUrl: 'https://vimeo.com/272136707',
  sections: [
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1286b366084939.5b0b3d2063f62.jpg' },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c6bb666084939.5b0b3d2064968.png' },
    { type: 'text', header: 'Stack',
      content: "This application leverages an array of excellent resources including Three.js for visualisations, React and Google’s Material Design language for user interface, Redux for state management, and Webpack for bundling."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/56c97666084939.5b0a88494c863.jpg'},
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a4ec7966084939.5b0a80f93ab3b.png' },
    { type: 'text', header: 'Process',
      content: "Lucid takes a low-resolution video feed from the user’s device. This video is used for a material texture which is then applied to mesh geometry. Mesh rotation is controlled by the user’s device orientation, allowing the user to view the interior of the geometry simply by moving their head. The scene is then passed through a number of shaders before being rendered out stereoscopically for virtual-reality headsets."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/79a99066084939.5b0a80f93afe4.jpg' },
    { type: 'text', header: 'Shape',
      content: "The Shape settings panel is used to control the user’s view of the geometry as well as the shape of the geometry."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b7526d66084939.5b0a80f93a737.jpg' },
    { type: 'text', subheader: 'Overview / World View',
      content: "By clicking the ‘Get Overview’ button, users can get an outside perspective of how the shape, texture and shaders are affecting the rendered output. This is handy when designing lucid experiences."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dafb0066084939.5b0a8564b4dc5.png' },
    { type: 'text', subheader: 'Shape Geometry',
      content: "The ‘Shape Geometry’ drop-down allows users to control what 3D shape the video texture is rendered on, affecting the output of the visualisation dramatically."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ea7d5766084939.5b0a80f93bc44.jpg' },
    { type: 'text', header: 'Texture',
      content: "Texture settings are used to control how the video texture is mapped onto the geometry."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/56c4c766084939.5b0a8214b3c31.png' },
    { type: 'text', subheader: 'Tile Count',
      content: "Tile count defines how many repetitions of the video texture are to be applied. The repetitions are applied seamlessly by being flipped horizontally and vertically at each row and column, making for interesting patterns."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c8344b66084939.5b0a81eab1746.png' },
    { type: 'text', subheader: 'Rotate Texture',
      content: "Rotate texture indicates whether or not an offset should be applied to the texture UV mapping. If so, the speed of this offset can be controlled using the X and Y sliders."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d57e2166084939.5b0a8310b4178.jpg' },
    { type: 'text', header: 'Shader',
      content: "Lucid features a shader pipeline which allows users to activate and rearrange various filters before the scene is rendered."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ecdf0166084939.5b0a8310b3a26.png' },
    { type: 'text', subheader: 'Shader Types',
      content: "The fragment shaders included in the application either further distort the visual output (such as those featured above), or act as utilities for adjusting the colour, brightness or contrast of the image."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c34e9c66084939.5b0a8310b3371.png' },
    { type: 'text', subheader: 'Shader Order',
      content: "The order in which shaders are arranged is super important when designing visualisations. Accordingly, Lucid allows users to drag-and-drop shaders to taste."
    },
    { type: 'image', url:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1ed0fc66084939.5b0b4ec67be87.jpg' },
  ]
};
