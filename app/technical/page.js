import NavPageBuilder from "../_components/navPageBuilder"

export default function technical() {
  const data = [
    {
      title: 'Software',
      href: 'technical/software',
      data: [
        {
          title: 'Maze Search',
        },
        {
          title: 'Portfolio Site',
        }
      ]
    },
    {
      title: 'Learning Machines',
      href: 'technical/learningMachines',
      data: [
        {
          title: 'Tic Tac Toe vs AI',
        },
        {
          title: 'Musical Genre Classification',
        }
      ]
    },
    {
      title: 'Modeling',
      href: 'technical/modeling',
      data: [
        {
          title: 'Exxon Mobil Security Returns',
        },
        {
          title: 'Cellular Automata',
        },
        {
          title: 'ABMs',
        }
      ]
    }
  ];

  return <NavPageBuilder data={data} />;
}
