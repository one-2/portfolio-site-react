import NavLinkList from './NavLinkList';

export default function NavPanel({ links }) {
    return (
        <div className='container border border-secondary'>
            {/* TODO: fix border size */}
            <div className='mt-3 mb-3'>
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