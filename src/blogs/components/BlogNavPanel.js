import NavPanel from "../../navPanel/NavPanel"

export default function BlogNavPanel() {
  const title = ''

  const linksFeb24 = [
    { to: '/Blogs/eg4', text: 'Around the World - Part Two.' },
    { to: '/Blogs/eg5', text: 'A Life On the Wind.' },
    { to: '/Blogs/eg6', text: 'Desert Nights.' },
  ]

  const linksJan24 = [
    { to: '/Blogs/eg1', text: 'Around the World - Part One.' },
    { to: '/Blogs/eg2', text: 'Catching Tides.' },
    { to: '/Blogs/eg3', text: 'The Way of the Road.' },
  ]

  const subtitleAndLinksList = [
    {
      subtitle: 'January 2024',
      links: linksJan24
    },
    {
      subtitle: 'February 2024',
      links: linksFeb24
    }
  ]

  return (
    <div className='container'>
      <NavPanel title={title} subtitleAndLinksList={subtitleAndLinksList} />
    </div>
  )
}
