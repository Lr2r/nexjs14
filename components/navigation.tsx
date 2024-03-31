"use client";

import { usePathname } from "next/navigation"
import Link from "next/link";

export default function Navigation() {
    const path = usePathname ();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "pp": ""}
                    </li>
                <li>
                    <Link href="/">About</Link> {path === "/about" ? "here": ""}
                    </li>
            </ul>
        </nav>
    );
}