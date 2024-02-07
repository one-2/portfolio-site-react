import { Link } from 'react-router-dom';

export default function ListItem({ to, text }) {
    return (
        <li className='col d-flex align-items-center justify-content-center text-center m-1 pt-1 pb-1 border border-primary rounded-4 bg-primary'>
            {/* v TODO: Make bold */}
            <Link to={to} className='fs-5 text-white' style={{ textDecoration: 'none' }}>
                {text}
            </Link>
        </li>
    )
}
