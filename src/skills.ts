type Skill = {
  name: string
  skills: ISkill[]
}

type ISkill = {
  name: string
  description: string
  rating: number
}

type ISkills = {
  language: Skill
  frontend: Skill
  backend: Skill
  database: Skill
}

const skills: ISkills = {
  language: {
    name: 'Programming Languages',
    skills: [
      {
        name: 'HTML',
        description: 'I can code this language from the scratch',
        rating: 8,
      },
      {
        name: 'CSS',
        description: 'This is a css',
        rating: 8,
      },
      {
        name: 'SASS',
        description: 'This is a sass',
        rating: 7,
      },
      {
        name: 'Javascript',
        description: 'This is a js',
        rating: 8,
      },
      {
        name: 'PHP',
        description: 'This is a PHP',
        rating: 8,
      },
      {
        name: 'TypeScript',
        description: 'This is a TypeScript',
        rating: 7,
      },
      {
        name: 'Python',
        description: 'This is a Python',
        rating: 5,
      },
      {
        name: 'Visual Basic',
        description: 'This is a Visual Basic',
        rating: 5,
      },
      {
        name: 'C#',
        description: 'This is a c#',
        rating: 5,
      },
      {
        name: 'Rust',
        description: 'This is a Rust',
        rating: 5,
      },
    ],
  },
  frontend: {
    name: 'Frontend Frameworks',
    skills: [
      {
        name: 'Bootstrap',
        description: 'This is a bootstrap',
        rating: 8,
      },
      {
        name: 'Tailwindcss',
        description: 'This is a tailwindcss',
        rating: 8,
      },
      {
        name: 'JQuery',
        description: 'This is a jquery',
        rating: 8,
      },
      {
        name: 'React',
        description: 'This is a jquery',
        rating: 7,
      },
    ],
  },
  backend: {
    name: 'Backend Frameworks',
    skills: [
      {
        name: 'Express JS',
        description: 'This is a expressjs',
        rating: 6,
      },
      {
        name: 'CodeIgniter',
        description: 'This is a codeigniter',
        rating: 8,
      },
      {
        name: 'Laravel',
        description: 'This is a laravel',
        rating: 7,
      },
      {
        name: '.NET',
        description: 'This is a .net',
        rating: 7,
      },
      {
        name: 'Next.js',
        description: 'This is a next.js',
        rating: 7,
      },
    ],
  },
  database: {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB',
        description: 'This is a mongodb',
        rating: 7,
      },
      {
        name: 'MySQL',
        description: 'This is a mysql',
        rating: 8,
      },
      {
        name: 'SQLite',
        description: 'This is a sqlite',
        rating: 7,
      },
      {
        name: 'PostgreSQL',
        description: 'This is a postgresql',
        rating: 5,
      },
    ],
  },
}

export default skills
