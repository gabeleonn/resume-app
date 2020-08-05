import { createReducer } from 'reduxsauce';
import { Types } from '../actions';

export const initialState = {
  data: {
    userName: '',
    jobTitle: '',
    bio: '',
    email: '',
    picture: '',
    socialMedia: {
      instagram: '',
      github: '',
      linkedin: '',
    },
    experience: [],
    education: [],
    projects: [],
    languages: [],
    skills: [],

  },
  loading: false,
};

export const fetchInfo = (state = initialState) => {
  return {
    ...state,
    loading: true,
  };
};

export const enInfo = (state = initialState) => {
  return {
    ...state,
    loading: false,

  };
};

export const ptInfo = (state = initialState) => {
  return {
    ...state,
    loading: false,
    data: {
      userName: 'Gabriel Leon',
      jobTitle: 'Desenvolvedor Javascript Fullstack',
      bio: 'Apaixonado por computadores desde muito cedo. Aprendi com meu pai a formatar e trocar peças do meu computador. Depois de descobrir o mundo do software. Nesse período tive meu primeiro contato com programação. Criei e modifiquei diversas CMS. Desenvolvi jogos com FPX Creator, Unity. E enfim, depois de muito ver, entrei para a área de Design Gráfico, onde aprendi muito sobre UI/UX e hoje estudo o desenvolvimento backend com Java e Node.js.',
      email: 'gableonn@gmail.com',
      picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.business2community.com%2Fsocial-media%2Fimportance-profile-picture-career-01899604&psig=AOvVaw352wAC6rFqOz3cCEulZxVE&ust=1596675004338000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjxyYXsgusCFQAAAAAdAAAAABAD',
      socialMedia: {
        instagram: 'https://instagram.com/gabeleonn',
        github: 'https://github.com/gabeleonn',
        linkedin: 'https://linkedin.com/in/gabeleonn',
      },
      experience: [
        {
          isActual: true,
          company: 'DBM Contact Center',
          jobTitle: 'Captador de Recursos',
          since: 'Fevereiro de 2020',
          to: 'Atual',
          time: '6 meses',
          website: 'http://anistia.org.br',
        },
        {
          isActual: true,
          company: 'Freelancer',
          jobTitle: 'Desenvolvedor Web',
          since: 'Novembro de 2018',
          to: 'Atual',
          time: '1 ano e 9 meses',
          website: 'http://github.com/gabeleonn/',
        },
      ],
      education: [
        {
          college: 'Pontifícia Universidade Católica do Paraná', since: '2020', to: '2023', title: 'Análise e Desenvolvimento de Sistemas',
        },
        {
          college: 'Universidade Positivo', since: '2017', to: '2019', title: 'Tecnólogo em Marketing',
        },
      ],
      projects: [
        {
          name: 'Curriculo ReactJS',
          status: 'Em progresso',
          link: 'http://github.com/gabeleonn/react-app',
        },
      ],
      languages: [
        { language: 'Inglês', proficiency: 'Avançado' },
        { language: 'Francês', proficiency: 'Basico' },
        { language: 'Português', proficiency: 'Nativo' },
      ],
      skills: [
        'Web Design',
        'ReactJS',
        'HTML/CSS',
        'Mobile Design',
        'Node.js',
        'MVC',
        'SCRUM',
        'Spring Boot',
      ],

    },
  };
};

export const handlers = {
  [Types.FETCH_INFO]: fetchInfo,
  [Types.PT_INFO]: ptInfo,
  [Types.EN_INFO]: enInfo,
};

export default createReducer(initialState, handlers);
