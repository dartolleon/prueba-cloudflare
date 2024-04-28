'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [ 
    {
        title: "Home",
        href:"/",
    },
    {
        title: "Nosotros",
        href:"/nosotros",
    },
    {
        title: "Products",
        href:"/products",
    },
    {
        title: "Usuario",
        href:"/usuario",
    },
]



const Header = () => {
    const pathName = usePathname();
  return (
    <div className="bg-blue-200 flex h-16 justify-center items-center gap-4">
        {links.map(link => (
            <li className="p-3" key={link.title}>
                <Link className={`bg-red-500 p-2  ${pathName === link.href ? "bg-blue-300 font-bold border-2 border-black rounded-md" : ""} `} href={link.href} >{link.title} </Link>
            </li>
        ))}
    </div>
  )
}

export default Header;