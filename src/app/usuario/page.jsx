import Image from "next/image";


const Usuario = () => {
    return(
        <div className="flex justify-center flex-col items-center pt-10">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg" 
            alt="foto new york"
            width={1000}
            height={1000}
            />
            <h2>USUARIO</h2>
        </div>
    )
}

export default Usuario;