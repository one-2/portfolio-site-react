import NavPanelLinksList from "./components/NavPanelLinksList";

export default function NavPanel({ title, subtitleAndLinksList }) {
  return (
    <div className='container border border-primary'>
      <div className='m-3'>
        <NavTitle title={title} />
      </div>
      <div>
        <NavPanelLinksList subtitleAndLinksList={subtitleAndLinksList} />
      </div>
    </div>
  )
}

function NavTitle({ title }) {
  <h2 className='fs-2 text-center'>
    {title}
  </h2>
}
