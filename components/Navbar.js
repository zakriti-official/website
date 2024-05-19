import { FaHandsClapping } from "react-icons/fa6";

export default function Navbar() {
    return (
        <>
            <header className="py-6 px-10 flex justify-between">
                <div className="flex items-center gap-2">
                    <FaHandsClapping className="h-8 w-8 transition-all hover:scale-110" />
                    <p className="text-xl font-bold">Zakriti</p>
                </div>
                <div className="flex gap-6 text-xs">
                    <button className="p-2 border-b transition-all border-black font-semibold active:scale-90">JOIN US</button>
                    <button className="p-2 border border-black transition-all rounded-2xl px-4 font-semibold active:scale-90">LETS TALK</button>
                </div>
            </header>
        </>
    )
}