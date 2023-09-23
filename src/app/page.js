import Link from "next/link";

export default function Home() {
  return (
    <main >
      <h1 className="text-[70px] font-bold flex justify-center ">
      Rick And Morty 
      </h1>
      <div className="flex justify-center "><Link className="text-[50px]  text-[#fff]  font-serif border-[5px] p-[20px]  rounded-xl bg-orange-300" href={"/characterlist"}>CHARACTERS</Link></div>
      
    </main>
  )
}
