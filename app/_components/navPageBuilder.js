import Link from 'next/link';
import styles from './navPageBuilder.module.css';

export default function NavPageBuilder({ data }) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Learning Machines.</h1>
      </div>
      {convertDataToGrid(data)}
    </div>
  );
}

function convertDataToGrid(data) {
  const grid = data.map((section) => buildSection(section));
  return <div className={styles.grid}>{grid}</div>;
}

function buildSection(section) {
  return (
    <div className={styles.section}>
      <Link href={section.href}>
        <div className={styles.card}>
        <h2>{section.title}</h2>
          {section.data.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>

      </Link>
    </div>
  )
}