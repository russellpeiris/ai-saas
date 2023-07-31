"use client";

import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="h-full space-y-4 py-4 flex flex-col bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href='/dashboard' className="flex items-center pl-3 mb-14">
                    LOGO
                </Link>
            </div>
        </div>
    );
}

export default Sidebar