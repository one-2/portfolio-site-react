import NavLinkList from './NavLinkList';

export default function NavPanel({ title, subtitleAndLinksList }) {
  return (
    <div className='container border border-primary'>
      <div className='m-3'>
        <h2 className='fs-2 text-center'>
          {title}
        </h2>
      </div>
      <div>
        <AllNavLinkListElements subtitleAndLinksList={ subtitleAndLinksList } />
      </div>
    </div>
  )
}

function AllNavLinkListElements({ subtitleAndLinksList }) {
  let listOfNavLinkLists = []
  for (const iterator of subtitleAndLinksList) {
    const subtitle = iterator.subtitle;
    const linksList = iterator.links;
    const element = (
      <div>
        <NavLinkList subtitle={subtitle} links={linksList} />
      </div>
    );
    listOfNavLinkLists.push(element);
  }
  return (
    <div className='container'>
      {listOfNavLinkLists}
    </div>
  )
}
