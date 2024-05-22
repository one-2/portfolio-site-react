import Link from 'next/link';
import styles from './navPageBuilder.module.css';

export default function NavPageBuilder({ data }) {
  const header = (
    <div className={styles.header}>
      <h1>{data.header.title}</h1>
    </div>
  )
  const grid = convertDataToGrid(data);

  return (
    <div className={styles.main}>
      {header}
      {grid}
    </div>
  );
}

function convertDataToGrid(data) {
  const grid = data.grid.map((section) => {
    return (
      <Link href={section.href}>
        <div className={styles.card}>
          <h2>{section.title}</h2>
          {section.projects.map((project) => {
            return (<p><span>{project.title}</span></p>)
          }
          )}
        </div>
      </Link>
    )
  });
  return <div className={styles.grid}>{grid}</div>;
}
