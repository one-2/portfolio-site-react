import NavSublistLayout from "./NavSublistLayout";

export default function NavSublist({ subtitle, links } ) {
    // Builds a titled sublist for the Nav panel
    return (
        <div className=''>
            <h3 className='fs-4'>
                {subtitle}
            </h3>
            <ul className='row list-unstyled justify-content-center'>
                <NavSublistLayout links={ links } />
            </ul>
        </div>
    );
}
