module.exports = {
  title: `정굥 개발일기`,
  description: `기술 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://wjdrbdyd.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `정규용`,
    bio: {
      role: `개발자`,
      description: ['정규용 입니다.'],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: ``, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: ``, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2019.04 ~ 2021.08 매트릭스투비',
        activity: '수출입 솔루션 개발',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.01',
        activity: '개인 블로그 개발 시작',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/wjdrbdyd/wjdrbdyd.github.io.git',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        date: '',
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2019.08 ~ 2020.02',  
        title: '2020년도 관세청 블록체인 수출입솔루션 개발',
        description:
          '프로젝트 내에서 수출입 솔루션 개발 담당',
        techStack: ['Egovframework3.0', 'Java', 'JavaScript','Tibero-SQL', 'HTML', 'CSS'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.04 ~ 2020.08',  
        title: '신세계I&C 모의해킹 및 수입 솔루션 개발',
        description:
          '모의해킹 취약점 해결 및 추가 수입 업무 페이지 개발',
          techStack: ['Java', 'JavaScript', 'Oracle-SQL','PL-SQL', 'HTML', 'CSS', 'Burp Suite', 'FindBug', 'PMD'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.08 ~ 2020.11',  
        title: 'CJ제일제당 수출입 솔루션 개발',
        description:
          'CJ제일제당 수출입 솔루션 개발',
          techStack: ['Java', 'JavaScript', 'Oracle-SQL','PL-SQL', 'HTML', 'CSS', 'FindBug', 'PMD'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      }, 
      {
        date: '2021.03 ~ 2021.08',  
        title: '솔브레인 수출입 솔루션 개발',
        description:
          '솔브레인 수출솔루션 개발 및 UbiReport 수출 및 수입 리포트 개발',
          techStack: ['SpringFramework','Java', 'JavaScript', 'MS-SQL', 'HTML', 'CSS', 'FindBug', 'PMD'],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      }, 
    ],
  },
};
