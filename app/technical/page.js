import NavPageBuilder from "../_components/navPageBuilder"

export default function technical() {
  const data = {
    header: {
      title: "Technical",
    },
    grid: [
      {
        title: 'Software',
        href: 'technical/software',
        data: [
          'Maze Search',
          'Portfolio Site',
        ]
      },
      {
        title: 'Learning Machines',
        href: 'technical/learningMachines',
        data: [
          'Tic Tac Toe vs AI',
          'Musical Genre Classification',
        ]
      },
      {
        title: 'Modeling',
        href: 'technical/modeling',
        data: [
          'Exxon Mobil Security Returns',
          'Cellular Automata',
          'ABMs',
        ]
      }
    ]
  }

  return <NavPageBuilder data={data} />;
}
