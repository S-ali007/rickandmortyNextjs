import getCharacter from '../../../services/getCharacters';
import Link from 'next/link';
import Image   from 'next/image';


async function characterlist() {
    const getList=getCharacter();
    const list= await getList;
    console.log(list)
  return (
    <div>
    <div className="flex justify-center">
      <h1 className="text-[30px] font-serif  p-[20px]   uppercase">
        {" "}
        characters
      </h1>
    </div>
    <div className="flex  flex-wrap justify-center p-[20px] ">
      {list?.results?.map((item) => (
        <Link href={`/characterlist/${item.id}`}  key={item.id} className="w-[23%] flex hover:scale-125 cursor-pointer p-3 hover:underline">
        <div  className=" ">
          <Image width={200} height={200}  src={item.image} alt={item.type}/>
          <p className="text-[20px]  font-bold font-serif ">{item.name}</p>
          <div>{item.gender}</div>
        </div> 
        </Link>
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
  )
}

export default characterlist
