import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
   <main className="bg-purple-100">
    <section className="grid grid-cols-2 h-[50vh]">
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="text-4xl font-bold">The Best URL shortner.</p>
      <p className="font-bold px-32 text-center">Copy and paste the URL to shorten in a straight and simple manner. No need to Login. Most of the url shortners track you but fear not we are safe.</p>
       <div className='flex gap-4 justify-center m-2'>
                <Link href="/shorten"><button className='cursor-pointer py-1 font-bold bg-purple-500 shadow-lg p-3 rounded-lg text-white'>Try Now</button></Link>
                <Link href="/github"><button className='cursor-pointer py-1 font-bold bg-purple-500 shadow-lg p-3 rounded-lg text-white'>GitHub</button></Link>
            </div>
      </div>
      <div className="flex justify-start relative items-center"><Image src={"/vector.jpg"} fill={true} alt="Vector Image" className="mix-blend-darken"/>
      </div>
  
    </section>
   </main>
  );
}
