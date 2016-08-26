export default (state) => {
  return {
    teamName: state.team.name,
    token: state.team.token,
    isLoggedIn: state.team.isLoggedIn,
    isQuizmaster: state.team.isQuizmaster,
    nextQuestion: state.team.nextQuestion,
    currentQuestion: state.team.currentQuestion
  }
}
