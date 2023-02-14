type Education = {
  degree: string
  year: string
}

type ISocial = {
  name: string
  link: string
}

export interface IContact extends ISocial {
  text: string
}

type IInfo = {
  socials: ISocial[]
  user: {
    fullName: string
  }
  landing: {
    intro: string
  }
  about: string[]
  education: Education[]
  contacts: IContact[]
  websiteRepo: string
}

const info: IInfo = {
  socials: [
    {
      name: 'GitHub',
      link: 'https://github.com/ken-027',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kenneth-andales/',
    },
    {
      name: 'CodePen',
      link: 'https://codepen.io/kean7296',
    },
    {
      name: 'Codewars',
      link: 'https://www.codewars.com/users/ken@27',
    },
  ],
  user: {
    fullName: 'Kenneth Andales',
  },
  contacts: [
    {
      name: 'Gmail',
      text: 'keanolida7296@gmail.com',
      link: 'mailto:keanolida7296@gmail.com',
    },
    {
      name: 'Phone Number',
      text: '+63 (907) 236 3667',
      link: 'tel:+639072363667',
    },
    {
      name: 'Upwork',
      text: 'Kenneth Andales',
      link: 'https://www.upwork.com/freelancers/~0135c2e932c50f312f',
    },
    {
      name: 'Discord',
      text: 'KenNeth#2394',
      link: 'https://discord.com/users/1003602086493167686',
    },
    {
      name: 'Skype',
      text: 'Kenneth Andales',
      link: 'https://join.skype.com/invite/xogJWKdJvCa9',
    },
    {
      name: 'Whatsapp',
      text: '+63 (907) 236 3667',
      link: 'https://wa.me/639072363667',
    },
    // {
    // 	name: 'Viber',
    // 	text: '+63 (907) 236 3667',
    // 	icon: FaViber,
    // 	link: '',
    // },
  ],
  landing: {
    intro:
      "I am a Full Stack Developer. I have gained experience as a developer. Currently, I'm focused on building website, desktop, mobile and API services.",
  },
  about: [
    "Hello, My name is Kenneth, I'm a self-taught developer and I'd love coding challenges, learning trend technologies, and programming languages.",
    'My interest in programming started months after I shifted my course from a BS in Architecture to a BS in Information Technology. When I answered programming activities in our school, I got motivated bit by bit until I roled as a programmer in our Thesis group and developed a sales and inventory system.',
    "Fast-forward to today, I've gained experience as a developer, and now my main focus these days is to develop different kinds of applications like desktop and mobile. Learning trend technologies is my habit while I'm still waiting and looking for an opportunity to work and continue to grow my career as a developer.",
  ],
  education: [
    {
      degree: 'Bachelor of Sciene in Information Technology',
      year: '2014-2018',
    },
    {
      degree: 'Bachelor of Sciene in Architecture',
      year: '2013-2014',
    },
  ],
  websiteRepo: 'https://github.com/ken-027/react-portfolio',
}

export default info
