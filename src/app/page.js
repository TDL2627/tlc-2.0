import Image from "next/image";
export default function Home() {
  return (
    <main className=" w-full text-center   grid content-between h-screen justify-center">
      <div className="mt-64 ">
        <h1 className="lg:text-8xl text-3xl font-black">The Learning Centre</h1>
        <p className="lg:text-2xl my-5">Coming Soon...</p>
      </div>
      <Image src="/kid.png" width={1000} height={1000} />
    </main>
  );
}
