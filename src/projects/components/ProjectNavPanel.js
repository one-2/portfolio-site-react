import NavPanel from "../../navPanel/NavPanel";

export default function ProjectNavPanel() {
  const title = 'Desert Nights'

  const subtitleAndLinksList = [ // TODO: refactor into backend
    {
      'subtitle': 'Data days',
      'links':
        [
          { to: '/Projects/DataAnalysisSuite', text: 'Analysis suite' },
          { to: '/Projects/WebScraper', text: 'Web scraper' },
          { to: '/Projects/DataConcatenator', text: 'Concatenator' }
        ]
    },
    {
      'subtitle': 'Web dev',
      'links':
        [
          { to: '/Projects/ThisWebsite', text: 'This Site' },
        ]
    },
    {
      'subtitle': 'Robotics',
      'links':
        [
          { to: '/Projects/SumoBots', text: 'SumoBots' },
        ]
    }
  ];

  return (
    <div className='container'>
      <NavPanel title={title} subtitleAndLinksList={subtitleAndLinksList} />
    </div>
  )
}
