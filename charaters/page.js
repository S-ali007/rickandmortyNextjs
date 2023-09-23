
import Image from "next/image";
import Link from "next/link";




    async function getData() {
      const data = await fetch("https://rickandmortyapi.com/api/character");

      const res = await data.json();
      
      return res
    }


  export default  async function Characters() {

    const characters=await getData();
    console.log(characters)

    return(
       <div>
      <div className="flex justify-center">
        <h1 className="text-[50px] font-serif  p-[20px]   uppercase">
          {" "}
          characters
        </h1>
      </div>
      <div className="flex  flex-wrap justify-center p-[20px] ">
        {characters?.results?.map((item) => (
          <div  key={item.id} className="w-[23%] flex hover:scale-125 cursor-pointer p-3 hover:underline">
          <div  className=" ">
            <Image width={200} height={200}  src={item.image} alt={item.type}/>
            <p className="text-[20px]  font-bold font-serif ">{item.name}</p>
            <div>{item.gender}</div>
          </div> 
          </div>
        ))}
     </div>

      <div className="flex justify-center ">
        <Link
          className="text-[50px] font-serif border-[5px] p-[20px]  rounded-xl bg-orange-300"
          href={"/"}
        >
          BACK To Home
        </Link>
      </div>
    </div>
  )}

