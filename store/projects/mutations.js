export const setProjects = (state, projects) => {
  state.projects = projects
}

export const deleteProject = (state, index) => {
  state.projects.splice(index, 1)
}
