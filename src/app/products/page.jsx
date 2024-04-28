import Image from "next/image";


const Products = () => {
    return(
        <div className="flex justify-center flex-col items-center pt-10">
            <Image src="https://media.tycsports.com/files/2023/10/18/632426/seleccion-argentina-vs-peru_1440x810_wmk.webp" 
            alt="foto argentina"
            width={1000}
            height={1000}
            />
            <h2>Products</h2>
        </div>
    )
}

export default Products;