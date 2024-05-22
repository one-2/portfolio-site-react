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
        projects: [
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
        projects: [
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
        projects: [
          {
            title: 'Exxon Mobil Security Returns',
          },
          {
            title: 'Cellular Automata',
          }
        ]
      }
    ]
  }

  return <NavPageBuilder data={data} />;
}
