import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return(
    <div className="flex justify-center flex-col items-center pt-10">
      <Image src="https://i.ibb.co/phyFYnm/nueva-modificada.webp" 
      alt="imageCaballo"
      width={4096}
      height={4096}
      />
      <h1>HOMEMEMEMEMEMEMEME</h1>
    </div>
  )
}