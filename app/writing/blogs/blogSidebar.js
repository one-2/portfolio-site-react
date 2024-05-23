
import Sidebar from '../_components/sidebar.js/index.js';
import styles from './page.module.css';

const BlogSidebar = () => {
    const data = [
        {
            id: 0,
            title: '2024',
            data: [
                {
                    title: 'Going Over The Falls',
                    description: 'Courage, meditation, foolishness, obsession.',
                    date: 'T+54',
                    href: '/writing/blogs/all/goingOverTheFalls',
                    data: {
                        text: 'Courage is the first of human qualities because it is the quality which guarantees the others. - Aristotle\n\nGoing over the falls is a solemn and frantic experience.',
                    }
                },
                {
                    title: 'Shannon, Neumann, Yeager',
                    description: 'Characteristics of the greats.',
                    date: 'T+54',
                    href: '', // /writing/blogs/all/shannonNeumannYeager',
                    data: {
                        text: 'The atom\'s decay is a binomial distribution. A computer\'s clock ticks inside the chassis of an afterburning jet engine.',
                    }
                },
                {
                    title: 'A Road Cut From Silicon',
                    description: 'Paths to industrialism.',
                    date: 'T+54',
                    href: '', // /writing/blogs/all/aRoadCutFromSilicon',
                    data: {
                        text: 'A road cut from silicon stretches to the horizon.',
                    }
                },
                {
                    title: 'MMXXIV',
                    description: 'Our recent progress in information and artificial intelligence technology against a historical backdrop.',
                    date: 'T+54',
                    href: '', // /writing/blogs/all/mmxxiv',
                    data: {
                        text: 'We have built it as we were able. Now where will it take us?.',
                    }
                }
            ]
        },
    ];
    return (
        <div className={styles.main}>
            <Sidebar data={data} />
        </div>
    )
}

export default BlogSidebar;
