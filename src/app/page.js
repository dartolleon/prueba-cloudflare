import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return(
    <div className="flex justify-center flex-col items-center pt-10">
      <Image src="https://images.ecestaticos.com/XDdD4yQ2fr5L-QTY2uqNp80-zlI=/0x0:2272x1514/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fbc9%2F012%2F94b%2Fbc901294bb01bc3395dc54cf0271a316.jpg" 
      alt="imageCaballo"
      width={800}
      height={800}
      />
      <h1>HOMEMEMEMEMEMEMEME</h1>
    </div>
  )
}