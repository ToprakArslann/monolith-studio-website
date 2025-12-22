export default function Navbar() {
    return (
        <nav className=" fixed w-full flex items-center justify-between p-4 mix-blend-difference text-white">
            <div><a href="" className="text-2xl font-monument-bold">M - STUDIO</a></div>
            <div className="flex flex-row gap-10 items-center justify-center text-xl">
                <a href="">Home</a>
                <a href="">Index</a>
                <a href="">Studio</a>
            </div>
            <a href="" className="p-3 bg-white text-black text-xl">Contact</a>
        </nav>
    )
}