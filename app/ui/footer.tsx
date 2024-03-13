import Image from "next/image";
import Link from "next/link";
import Footer_Logo from "@/public/restaurant/footer-logo.png";

const Footer = () => {
    return (
        <footer className="grid grid-cols-[200px_minmax(900px,_1fr)] gap-4">
            <Image
                src={Footer_Logo}
                alt="Little Lemon Restaurant Logo"
                width={100}
            />
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <h1>Navigation</h1>
                    <Link className="block hover:text-gray-400" href="/">Home</Link>
                    <Link className="block hover:text-gray-400" href="#about">About</Link>
                    <Link className="block hover:text-gray-400" href="/menu">Menu</Link>
                    <Link className="block hover:text-gray-400" href="/reservation">Reservations</Link>
                    <Link className="block hover:text-gray-400" href="/login">Login</Link>
                </div>
                <div>
                    <h1>Contact</h1>
                    <Link className="block hover:text-gray-400" href="/">Phone Number</Link>
                    <Link className="block hover:text-gray-400" href="/">Email</Link>
                    <Link className="block hover:text-gray-400" href="/">Address</Link>
                </div>
                <div>
                    <h1>Social Media</h1>
                    <Link className="block hover:text-gray-400" href="https://www.instagram.com/littlelemonfood/" target="_blank">Instagram</Link>
                    <Link className="block hover:text-gray-400" href="https://twitter.com/littlelemonrhw" target="_blank">Twitter</Link>
                    <Link className="block hover:text-gray-400" href="https://www.linkedin.com/company/littlelemon/" target="_blank">LinkedIn</Link>
                </div>
                <div></div>
            </div>
        </footer>
    )
}

export default Footer;