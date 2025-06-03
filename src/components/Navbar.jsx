export default function Navbar () {
    return (
        <nav className="flex flex-row justify-between ml-20 mr-20 pt-10 bg-white:fixed z-50 ">
            <h1 className="text-2xl font-bold">
                <span>Event</span>
                <span className="pl-2 text-purple-600">Hive</span>
            </h1>
            <div className="">
                <button className="pr-10 text-sm">Login</button>
                <button className="bg-purple-600 border rounded p-2 pl-10 pr-10 text-white">Signup</button>
            </div>
        </nav>
    );
}