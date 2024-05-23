import Link from 'next/link';
import styles from './navPageBuilder.module.css';

export default function NavPageBuilder({ data }) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>{data.title}.</h1>
      </div>
      {convertToGrid(data.sections)}
    </div>
  );
}

function convertToGrid(sections) {
  const grid = sections.map((section) => buildSection(section));
  return <div className={styles.grid}>{grid}</div>;
}

function buildSection(section) {
  let body;
  if (section.data.summaryText != undefined) {
    body = section.data.summaryText;
  } else {
    body = section.data.list.map((item) => (
      <p>{item}</p>
    ));
  }

  return (
    <div className={styles.section}>
      <Link href={section.metadata.href}>
        <div className={styles.card}>
        <h2>{section.data.title}</h2>
        {body}
        </div>
      </Link>
    </div>
  )
}
