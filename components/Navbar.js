import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>AOS</h1>
            </div>
            <div>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/bloglar">Blog List</Link>
            </div>
        </nav>
    );
}

export default Navbar;