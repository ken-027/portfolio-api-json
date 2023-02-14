const fs = require('fs')
const path = require('path')

import works from './src/works'
import experiences from './src/experiences'
import skills from './src/skills'
import extraPrograms from './src/extraPrograms'
import info from './src/info'
import projects from './src/projects'
import restAPI from './src/restAPI'
import desktops from './src/desktops'
import mobiles from './src/mobiles'
const endpoint = path.join(__dirname, '../personal/api')

const workStringify = JSON.stringify(works)
const experiencesStringify = JSON.stringify(experiences)
const skillsStringify = JSON.stringify(skills)
const extraProgramsStringify = JSON.stringify(extraPrograms)
const infoStringify = JSON.stringify(info)
const projectsStringify = JSON.stringify(projects)
const restAPIStringify = JSON.stringify(restAPI)
const desktopsStringify = JSON.stringify(desktops)
const mobilesStringify = JSON.stringify(mobiles)

if (!fs.existsSync(endpoint)) {
  fs.mkdirSync(endpoint, { recursive: true })
}

if (!fs.existsSync(`${endpoint}/work`)) {
  fs.mkdirSync(`${endpoint}/work`, { recursive: true })
}

fs.writeFileSync(`${endpoint}/skills.json`, skillsStringify)
fs.writeFileSync(`${endpoint}/info.json`, infoStringify)
fs.writeFileSync(`${endpoint}/experiences.json`, experiencesStringify)
fs.writeFileSync(`${endpoint}/work/index.json`, workStringify)
fs.writeFileSync(`${endpoint}/work/extra-programs.json`, extraProgramsStringify)
fs.writeFileSync(`${endpoint}/work/projects.json`, projectsStringify)
fs.writeFileSync(`${endpoint}/work/rest-api.json`, restAPIStringify)
fs.writeFileSync(`${endpoint}/work/desktop.json`, desktopsStringify)
fs.writeFileSync(`${endpoint}/work/mobile.json`, mobilesStringify)
