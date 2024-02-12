import NavSublist from "./NavSublist";

export default function NavPanel({ title, subtitleAndLinksList }) {
  return (
    <div className='container border border-primary'>
      <div className='m-3'>
        <NavTitle title={title} />
      </div>
      <div>
        <AllNavSublists subtitleAndLinksList={subtitleAndLinksList} />
      </div>
    </div>
  )
}

function NavTitle({ title }) {
  <h2 className='fs-2 text-center'>
    {title}
  </h2>
}

function AllNavSublists({ subtitleAndLinksList }) {
  // Puts the sublists into a single container
  // Note: Paths must be absolute paths or the URL params are appended
  let allNavSublists = []
  for (const iterator of subtitleAndLinksList) {
    const subtitle = iterator.subtitle;
    const linksList = iterator.links;
    const sublist = (
      <div>
        <NavSublist subtitle={subtitle} links={linksList} />
      </div>
    );
    allNavSublists.push(sublist);
  }

  return (
    <div className='container'>
      {allNavSublists}
    </div>
  )
}
