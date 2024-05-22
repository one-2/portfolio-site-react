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
        projects: [
          {
            title: 'Learning From Machines',
          },
          {
            title: 'Total (Statistical) Recall',
          },
          {
            title: 'Achilles\' Spear',
          },
          {
            title: '... more',
          }
        ]
      },
      {
        title: 'Blogs',
        href: 'writing/blogs',
        projects: [
          {
            title: 'Shannon, Neumann, Yeager',
          },
          {
            title: 'Going Over The Falls',
          },
          {
            title: 'A Road Cut From Silicon',
          },
          {
            title: 'MMXXIV',
          }
        ]
      }
    ]
  }
  return <NavPageBuilder data={data} />;
}
