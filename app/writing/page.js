import NavPageBuilder from "../_components/navPageBuilder";

export default function writing() {
  const data = {
    header: {
      title: "Writing",
    },
    grid: [
      {
        title: 'Technical Essays',
        href: 'writing/technicalEssays',
        data: [
          'Learning From Machines',
          'Total (Statistical) Recall',
          'Achilles\' Spear',
          '... more',
        ]
      },
      {
        title: 'Blogs',
        href: 'writing/blogs',
        data: [
          'Shannon, Neumann, Yeager',
          'Going Over The Falls',
          'A Road Cut From Silicon',
          'MMXXIV',
        ]
      }
    ]
  }
  return <NavPageBuilder data={data} />;
}
