import NavLinkList from './NavLinkList';

export default function NavPanel({ title, [{subtitle, links}] }) {
    return (
        <div className='container border border-primary'>
            {/* TODO: fix border size */}
            <div className='m-3'>
                <h2 className='fs-2 text-center'>
                    Map
                </h2>
            </div>
            <div>
                <div>
                    <NavLinkList subtitle='' links={links} />
                </div>
            </div>
        </div>
    )
}