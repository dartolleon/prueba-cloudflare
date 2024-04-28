import Image from "next/image";


const Config = () => {
    return(
        <div className="flex justify-center flex-col items-center pt-10">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/1200px-002_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg" 
            alt="foto leon"
            width={1000}
            height={1000}
            />
            <h2>CONFIG</h2>
        </div>
    )
}

export default Config;