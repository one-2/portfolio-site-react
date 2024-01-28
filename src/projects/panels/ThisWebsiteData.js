// Written by Stephen Elliott on 28/1/24.
// Renders the panel about this website for the Projects page.

function ThisWebsiteData() {
    const title = 'My Portfolio Site';
    const dateFrom = '23/15/42'
    const dateTo = '51/79/54'
    const overview = 'A brief overview of my project. I built a website from scratch using a combination of online learning, React, and React Bootstrap.'
    const skills = [
        // TODO: refactor into a separate data retrieval system. I don't want this hard-coded into my backend. Not scalable.
        'HTML, CSS, and Javascript',
        'React and React Bootstrap',
        'Frontend design and prototyping'
    ];
    const skillsList = buildSkillsList(skills);
    const fullStory = 'The building of this website is quite the tale, so strap in! I heard the first whisperings on a hot day, deep in the November haze...'

    return (
        {
            'title': title,
            'dateFrom': dateFrom,
            'dateTo': dateTo,
            'overview': overview,
            'skillsList': skillsList,
            'fullStory': fullStory
        }
    )
}

function buildSkillsList(skills) {
    // TODO: refactor into a separate module
    const skillsList = skills.map((skill) =>
        <li>
            {skill}
        </li>
    )

    return (
        <ul>{skillsList}</ul>
    );
}

export default ThisWebsiteData;
