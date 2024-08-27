import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link 
        href={href} 
        className='flex items-center justify-center py-2 px-4 text-base sm:text-xl text-[#F6F5F5] rounded hover:text-gray-300'>
           {title}
        </Link> 
    );
};

export default NavLink;
