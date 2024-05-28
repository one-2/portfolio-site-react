import NavPageBuilder from "../_components/_navPageBuilder/navPageBuilder";

export default function writing() {
  const data = {
    title: 'Writing',
    sections: [
      {
        metadata: {
          href: '/writing/technicalEssays',
        },
        data: {
          title: 'Technical Essays',
          list: [
            'Learning From Machines',
            'Total (Statistical) Recall',
            'Achilles\' Spear',
            '... more',
          ]
        }
      },
      {
        metadata: {
          href: '/writing/blogs',
        },
        data: {
          title: 'Blogs',
          list: [
            'Shannon, Neumann, Yeager',
            'Going Over The Falls',
            'A Road Cut From Silicon',
            'MMXXIV',
          ]

        }
      }
    ]
  };

  return <NavPageBuilder data={data} />;
}
