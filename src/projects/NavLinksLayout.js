import ListItem from './ListItem'

export default function NavLinksLayout({ links }) {
    // Paths must be absolute paths or the URL params are appended
    const allLinkListItems = links.map((link) =>
        <ListItem to={link.to} text={link.text} />);

    let layout = [];
    let previous;

    // for every link in links
    for (let idx = 0; idx < allLinkListItems.length; idx++) {
        const current = allLinkListItems[idx];
        if (idx % 2 === 0) {
            // if the link index is [0, 2, ...], cleanly divisible by two, add it to a temp variable
            previous = current;
        } else {
            // if the link index is [1, 3, ...], add the current link and the temp to a row
            layout.push(
                <div className='row justify-content-center'>
                    {previous}
                    {current}
                </div>
            )
            // wipe the temp
            previous = null;
        }
    }
    // when there are no more links,
    // if there is still an element to be added, add the temp to a row
    if (previous != null) {
        layout.push(
            <div className='row'>
                {previous}
            </div>
        )
    }

    return layout;
}