import { Project } from "./project";

function generateProjects() {
    let projectNames = ['Java', 'Home', 'School', 'Etc']
    let testProjects = []

    projectNames.forEach(proj => {
        const newProj = new Project(proj);
        testProjects.push(newProj);
    });

    return testProjects;
}

export { generateProjects };


