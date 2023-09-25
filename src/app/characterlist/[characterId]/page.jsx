import getCharacter from "../../../../services/getCharacters";
import Image from "next/image";
import Link from "next/link";

export default async function page(props) {
  const getList = getCharacter();
  const list = await getList;

  const currentId = props.params.characterId;
  const currentdetail = list.results[currentId - 1];

  console.log(list.results[currentId - 1], currentId, "hh");

  return (
    <div className="w-full flex justify-center h-screen items-center">
      <div className="max-w-[500px] w-full ">
        <h1 className="text-[20px] font-bold">
          {" "}
          Character No :{currentdetail.id}
        </h1>
        <div className=" flex justify-center items-center">
          <Image
            width={300}
            height={300}
            src={currentdetail.image}
            alt={currentdetail.type}
          />
        </div>
        <div className=" flex justify-center items-center font-serif text-[20px] font-bold ">
          {currentdetail.name}
        </div>
        <div className="max-w-[500px] w-full flex flex-col justify-center items-center ">
          <div className="flex items-center w-full justify-center gap-[150px] mt-[15px] ">
            <div className="text-[16px] font-bold">Gender:</div>
            <div>{currentdetail.gender}</div>
          </div>
          <div className="flex items-center w-full justify-center gap-[140px] mt-[15px] ">
            <div className="text-[16px] font-bold">Status:</div>
            <div>{currentdetail.status}</div>
          </div>
          <div className="flex items-center w-full justify-center gap-[130px] mt-[15px] ">
            <div className="text-[16px] font-bold">Origin:</div>
            <div>{currentdetail.origin.name}</div>
          </div>
          <div className="flex items-center w-full justify-center gap-[20px] mt-[15px] ">
            <div className="text-[16px] font-bold">Type:</div>
            <div>{currentdetail.type}</div>
          </div>
          <div className="flex items-center w-full justify-center gap-[20px] mt-[15px] ">
            <div className="text-[16px] font-bold">Location:</div>
            <div>{currentdetail.location.name}</div>
          </div>
          <Link className="max-w-[200px] w-full text-[18px] font-bold flex justify-center p-[10px] border rounded-[10px] bg-teal-700 text-[#fff] hover:bg-slate-400" href={"/characterlist"} >Back</Link>
        </div>
      
      </div>
    </div>
  );
}


export async function generateStaticParams(){
    const getList = getCharacter();
    const list = await getList;
    return list?.results?.map(list=>({characterId:list.id.toString()
    }))
}
