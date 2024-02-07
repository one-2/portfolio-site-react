import NavLinksLayout from "./NavLinksLayout";

export default function NavLinkList({ subtitle, links } ) {
    return (
        <div className=''>
            <h3 className='fs-4'>
                {subtitle}
            </h3>
            <ul className='row list-unstyled justify-content-center'>
                <NavLinksLayout links={ links } />
            </ul>
        </div>
    );
}
