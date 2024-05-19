import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="absolute bottom-0 w-full h-1/2">
        <img className="w-full h-full" src="/building.png" />
      </div>
      <main className="flex flex-col min-h-screen bg-white text-black">
        <Navbar />
        <section className="flex flex-col w-[500px] text-center m-auto gap-6 mb-16 items-center mt-2 h-full flex-1 ">
          <p className="text-6xl font-extrabold ">WE BUILD TECH FOR FREE </p>
          <p className="text-lg font-medium">We, the Zakritians community of talented developers, have decided to support great ideas by building tech projects at no cost.</p>
        </section>

        <section className="w-1/2 font-sans tracking-widest mt-72 m-auto mb-10">
          <p className="font-extrabold text-6xl">
            WE BELIEVE
            NOT EVERY SOUL
            FINDS SUPPORTING HANDS
            WE REALIZE
            AT TIMES, WE MUST UPHOLD ANOTHER
            IN TURN, THEY'LL STAND BY US ONE DAY
          </p>
        </section>

        <section className="bg-yellow-500">
          <div className="font-extrabold text-6xl p-10">
            <p>WHY FOR FREE ?</p>
            <p className="text-xl p-10">we have manythings to answer and also, have to figure out manythings ourselves, let us breathe and come back to you, stay tuned !..

            </p>
          </div>

        </section>
      </main>
    </>
  );
}
