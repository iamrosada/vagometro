export interface Keywords {
  [key: string]: string;
}

export const keywords: Keywords = {
  //FRONTEND
  html: 'HTML',
  html5: 'HTML',
  css: 'CSS',
  css3: 'CSS',
  javascript: 'JavaScript',
  js: 'JavaScript',
  typescript: 'TypeScript',
  ts: 'TypeScript',
  react: 'React',
  reactjs: 'React',
  'react.js': 'React',
  angular: 'Angular',
  angularjs: 'AngularJS',
  'vue.js': 'Vue.js',
  vuejs: 'Vue.js',
  vue: 'Vue.js',
  vue3: 'Vue.js',
  bootstrap: 'Bootstrap',
  sass: 'Sass',
  less: 'Less',
  redux: 'Redux',
  webpack: 'Webpack',
  babel: 'Babel',
  'responsive design': 'Responsive Design',
  'restful apis': 'RESTful APIs',
  restful: 'RESTful APIs',
  rest: 'RESTful APIs',
  graphql: 'GraphQL',
  ajax: 'AJAX',
  json: 'JSON',
  xml: 'XML',
  'ui/ux design': 'UI/UX Design',
  'frontend testing': 'Testes',
  stylus: 'Stylus',
  next: 'NextJS',
  nextjs: 'NextJS',
  'next.js': 'NextJS',
  blazor: 'Blazor',
  jquery: 'jQuery',
  edux: 'Edux',
  mobx: 'Mobx',
  vuex: 'Vuex',
  recoil: 'Recoil',
  leaflet: 'Leaflet',
  'leaflet.js': 'Leaflet',
  leafletjs: 'Leaflet',
  //Styled Components - multi-work keyword
  relay: 'Relay',
  figma: 'Figma',
  tailwind: 'Tailwind',
  spa: 'Single Page Applications',
  pwa: 'Progressive Web Apps',
  webassembly: 'WebAssembly',
  nuxt: 'Nuxt',
  'nuxt.js': 'Nuxt',
  nuxtjs: 'Nuxt',
  gastby: 'Gatsby',
  jekyll: 'Jekyll',
  hugo: 'Hugo',
  remix: 'Remix',

  //BACKEND
  kotlin: 'Kotlin',
  'node.js': 'Node.js',
  node: 'Node.js',
  nodejs: 'Node.js',
  'express.js': 'Express',
  express: 'Express',
  java: 'Java',
  'spring boot': 'Spring Boot',
  springboot: 'Spring Boot',
  spring: 'Spring Boot',
  python: 'Python',
  django: 'Django',
  ruby: 'Ruby',
  'ruby on rails': 'Ruby on Rails',
  rails: 'Ruby On Rails',
  php: 'PHP',
  laravel: 'Laravel',
  'asp.net': '.NET',
  '.net': '.NET',
  '.net core': '.NET',
  csharp: 'C#',
  'c#': 'C#',
  go: 'Go',
  golang: 'Go',
  flask: 'Flask',
  fastapi: 'FastAPI',
  'database management': 'Database Management',
  'api development': 'API Development',
  'authentication and authorization': 'Authentication and Authorization',
  oauth: 'OAuth',
  jwt: 'JWT',
  'security best practices': 'Security Best Practices',
  'c++': 'C++',
  C: 'C',
  soap: 'SOAP',
  rabbitmq: 'RabbitMQ',
  swagger: 'Swagger',
  perl: 'Perl',
  delphi: 'Delphi',
  cobol: 'Cobol',
  fortran: 'Fortran',
  grpc: 'GRPC',
  socket: 'Socket.io', //multi-word keyword
  postman: 'Postman',
  insomnia: 'Insomnia',
  apollo: 'Apollo',
  entity: 'Entity Framework',
  elixir: 'Elixir',
  haskell: 'Haskell',
  mq: 'IBM MQ',
  nestjs: 'NestJS',
  nest: 'NestJS',
  'nest.js': 'NestJS',
  hibernate: 'Hibernate',
  sqs: 'AWS SQS',
  s3: 'AWS S3',
  lambda: 'AWS Lambda',
  sns: 'AWS SNS',
  websocket: 'WebSocket',
  websockets: 'WebSocket',
  ssr: 'Server-Side Rendering',
  sse: 'Server-Sent Events',
  svelte: 'Svelte',
  deno: 'Deno',
  bun: 'Bun',
  symfony: 'Symfony',
  fastify: 'Fastify',
  groovy: 'Groovy',
  grails: 'Grails',

  //DATABASE
  sql: 'SQL',
  nosql: 'NoSQL',
  mongodb: 'MongoDB',
  mysql: 'MySQL',
  postgresql: 'PostgreSQL',
  elasticsearch: 'Elasticsearch',
  oracle: 'Oracle',
  redis: 'Redis',
  plsql: 'PL/SQL',

  //MOBILE
  android: 'Android',
  ios: 'iOS',
  swift: 'Swift',
  ionic: 'Ionic',
  cordova: 'Cordova',
  'apache cordova': 'Cordova',
  flutter: 'Flutter',
  //TODO: Search for multi-words keywords first, then split and search without multi-words keywords.
  native: 'React Native',
  xamarin: 'Xamarin',
  expo: 'Expo',

  //CLOUD
  microservices: 'Microsserviços',
  'micro serviços': 'Microsserviços',
  aws: 'AWS',
  cloudflare: 'Cloudflare',
  gcp: 'GCP',
  'Google Cloud Platform': 'GCP',
  azure: 'Azure',
  'web servers': 'Web Servers',
  nginx: 'Nginx',
  apache: 'Apache',
  docker: 'Docker',
  dockers: 'Docker',
  kafka: 'Kafka',
  'ci/cd': 'CI/CD',
  ci: 'CI/CD',
  cd: 'CI/CD',
  jenkins: 'Jenkins',
  terraform: 'Terraform',
  kubernetes: 'Kubernetes',
  kubernets: 'Kubernetes', //sic
  firebase: 'Firebase',
  tomcat: 'Tomcat',

  //TESTING,
  junit: 'JUnit',
  mockito: 'Mockito',
  teste: 'Testes',
  jest: 'Jest',
  enzyme: 'Enzyme',
  cypress: 'Cypress',
  selenium: 'Selenium',
  cucumber: 'Cucumber',
  tdd: 'TDD',
  bdd: 'BDD',
  ddd: 'DDD',

  //MISCELLANEOUS
  git: 'Git',
  github: 'GitHub',
  gitflow: 'GitFlow',
  scrum: 'Scrum',
  gitlab: 'Gitlab',
  'clean code': 'Clean Code',
  'clean architecture': 'Clean Architecture',
  lean: 'Lean',
  kanbam: 'Kanbam',
  salesforce: 'Salesforce',
  yaml: 'YAML',
  assembly: 'Assembly',
  linux: 'Linux',
  jira: 'Jira',
  maven: 'Maven',
  wordpress: 'WordPress',
  shell: 'Shell',
  meteor: 'Meteor.js',
  'meteor.js': 'Meteor.js',
  meteorjs: 'Meteor.js',
  blockchain: 'Blockchain',
  drupal: 'Drupal',
  magento: 'Magento',
  embarcado: 'Sistemas embarcados',
  embarcados: 'Sistemas embarcados',
  //Design Patterns - multi-word keyword
};
