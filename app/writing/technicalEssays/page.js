import styles from './page.module.css'

// TODO: sort into beginner / advanced topics (to defer til later)

export default function EssayGrid() {
  return (
    <div className={styles.gridcontainer}>
      <div className={styles.description}>
        <h2>Essays</h2>
      </div>
      <div className={styles.grid1}>
        <div className={styles.box}>
          <h3>Teaching Machines</h3>
          <p>How can we teach a machine by example?</p>
        </div>
        <div className={styles.box}>
          <h3>Learning From Machines</h3>
          <p>Can we use machines to discover new things about our world?</p>
        </div>
        <div className={styles.box}>
          <h3>The Mystery of Generalisation</h3>
          <p>How is it possible for machines to succeed in tasks they have not previously seen?</p>
        </div>
        <div className={styles.box}>
          <h3>Achilles' Spear</h3>
          <p>What sort of tasks can learning machines do well?</p>
        </div>
        <div className={styles.box}>
          <h3>Mathematical Recall</h3>
          <p>How can we use mathematical constructs to store behavioural information, and recount these behaviours when the moment is right?</p>
        </div>
        <div className={styles.box}>
          <h3>The Sobering History of Artificial Intelligence</h3>
          <p>Trace the development of machine learning techniques, from the whispers of artificial intelligence in anthropomorphic automata to contemporary massive algorithmic learners - some of the most sophisticated technology we have invented.</p>
        </div>
        <div className={styles.box}>
          <h3>Is Machine Learning Science?</h3>
          <p>Explore where machine learning lifts away from the rigour of computer science.</p>
        </div>
        <div className={styles.box}>
          <h3>Algorithmic Bias</h3>
          <p>Find out what it means for an algorithm to be 'unfair' at a moral and mathematical level, and discuss some techniques for improving algorithm fairness.</p>
        </div>
      </div>
    </div>
  )
}
