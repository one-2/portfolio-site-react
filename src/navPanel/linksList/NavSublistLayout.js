import ListItem from './ListItem'

export default function NavSublistLayout({ links }) {
    // Builds the link layout for a Nav sublist
    const allLinkListItems = links.map((link) =>
        <ListItem to={link.to} text={link.text} />);
    let layout = [];
    let previous;

    // stack the links
    for (let idx = 0; idx < allLinkListItems.length; idx++) {
        const current = allLinkListItems[idx];
        if (idx % 2 === 0) {
            // if the link index is cleanly divisible by two, add it to a temp
            previous = current;
        } else {
            // else, add the current link and the temp to a row
            layout.push(
                <div className='row justify-content-center'>
                    {previous}
                    {current}
                </div>
            )
            previous = null;
        }
    }
    // when there are no loop iterations
    if (previous != null) {
        layout.push(
            <div className='row'>
                { previous }
            </div>
        )
    }

    return layout;
}