// TODO: 
// 1. pull out the page generation to a separate file. Unify frontend for 
//    software and learning machines 'projects' pages.
// 2. tictactoe
// 3. portfolioSite
// Extension:
// - mazeSearcher

export default function software() {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <h1>Software.</h1>
      </div>
        <ProjectsGrid />
    </div>
  )
}
