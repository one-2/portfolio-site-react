import NavSublist from "./NavSublist";

export default function NavPanelLinksList({ subtitleAndLinksList }) {
  // Puts the sublists into a single container
  // Note: Paths must be absolute paths or the URL params are appended
  let allNavSublists = [];
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
  );
}
