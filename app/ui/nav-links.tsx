'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
    {name: "Home", href: "/dashboard", icon: HomeIcon},
    {name: 'invoices', href: "/dashboard/invoices", icon: DocumentDuplicateIcon},
    {name: 'customers', href: "/dashboard/customers", icon: UserGroupIcon},
];

export default function NavLinks() {   
    const pathname = usePathname();
    return (
        <>  
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-{48px} items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-blue-600 md:flex-one md:justify-start md:p-2 md:px-3"
                        >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:inline">{link.name}</p>
                        </Link>
                );
            })}
        </>
    );
}
