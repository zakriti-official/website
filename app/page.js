import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PastWork from "@/components/PastWork";
import Image from "next/image";
import { FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-col min-h-screen bg-white text-black">
        <Navbar />
        <section className="flex flex-col w-[500px] text-center m-auto gap-6 mb-16 items-center mt-2 h-full flex-1 ">
          <p className="text-6xl font-extrabold ">WE BUILD TECH FOR FREE </p>
          <p className="text-lg font-medium">
            We, the Zakritians community of talented developers, have decided to
            support great ideas by building tech projects at no cost.
          </p>
        </section>

        <div className="absolute bottom-0 w-full h-1/2">
          <img className="w-full h-full" src="/building.png" />
        </div>
      </main>

      <section className="w-1/2 flex items-center font-sans m-auto h-screen ">
        <p className="font-extrabold tracking-widest text-6xl">
          WE BELIEVE NOT EVERY SOUL FINDS SUPPORTING HANDS WE REALIZE AT TIMES,
          WE MUST UPHOLD ANOTHER IN TURN, THEY'LL STAND BY US ONE DAY...
        </p>
      </section>

      <section className="bg-yellow-500 font-extrabold text-6xl py-16 px-24 flex flex-col gap-12">
        <div className="flex items-center  gap-4 ">
          <p>WHAT WE DO ?</p>
          <div className="h-28 pb-4">
            <img src="/announce.png" className="w-full h-full" />
          </div>
        </div>
        <div className="flex gap-16 px-16 justify-between">
          <div className="flex flex-col gap-3 items-center w-1/2">
            <p className="text-4xl">Free tech</p>
            <p className="text-base font-normal">
              We're here to assist startups which had innovative ideas but
              struggling with developing specific features. We're offering 3-4
              hours of our free time to help address these challenges. While we
              won't be building entire websites, we'll focus on key features to
              move their projects forward.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center w-1/2">
            <p className="text-4xl">Paid tech</p>
            <p className="text-base font-normal">
              In addition to our assistance efforts, we also operate an agency
              dedicated to transforming innovative ideas into functional code.
              Our specialty lies in crafting websites swiftly, economically, and
              with dynamic, powerful user interfaces that leave a lasting
              impact.
            </p>
          </div>
        </div>
      </section>
      <PastWork />

      <section className="text-2xl py-16 px-24 mx-auto text-white ">
        <div className="bg-black p-1 rounded-full">
          <button className="border-4 border-white bg-black px-4 py-2 rounded-full font-semibold ">
            LETS CONNECT AND TALK
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
