import styles from './grid.module.css';

import Link from 'next/link'

const Grid = () => {
    // Get the hex and route data
    const hexes = buildHexElements();
    const routes = buildRoutes();

    // Combine the lists
    let allComponents = hexes
    for (let i = 0; i < routes.length; i++) {
        allComponents.splice(routes[i].index, 0, routes[i].route); // Add the route at its index.
    }
    return <div className={styles.grid}>{allComponents}</div>;
}

function buildHexElements() {
    const hexes = ['57', '65', '20', '6C', '69', '76', '65', '20', '69', '6E', '20', '61', '20', '66', '75', '74', '75', '72', '65', '20', '66', '65', '77', '20', '69', '6D', '61', '67', '69', '6E', '65', '64', '20', '70', '6F', '73', '73', '69', '62', '6C', '65', '2E'];
    const hexElements = hexes.map((val) => (
        <p>{val}</p>
    ));
    return hexElements;
}

function buildRoutes() {
    // Returns (<Route/>, index)
    const routeData = [
        ['Learning Machines', 'learningMachines', 3],
        ['•', '/', 13],         // ['Blog', 'blog', 13],
        ['•', '/', 20],         // ['Modeling', 'modeling', 20],
        ['•', '/', 27],         // ['Software', 'software', 27],
        ['•', '/', 37],         // ['Resume', 'resume', 37],
        ['Contact', 'contact', 47]
    ];
    const routeElements = routeData.map(
        ([title, route, index]) => ({
            'route': buildLink(title, route),
            'index': index
        })
    );
    return routeElements;
}

function buildLink(title, route) {
    return <Link href={route} className={styles.pop}>{title}</Link>;
}

export default Grid;
