import Link from 'next/link';
import './nav.scss';

const Nav = () => {
    return (
        <div className="nav">
            <div className="leftSide">
                <Link href="/pages/home">
                    Nextjs Authentication
                </Link>
            </div>

            <div className="rightSide">
                <Link href='/pages/dashboard'>
                    Dashboard
                </Link>
            </div>
        </div>
    )
}

export default Nav;