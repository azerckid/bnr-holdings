"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const NAV_ITEMS = [
    { label: "회사소개", href: "/about" },
    { label: "FMCG유통", href: "/fmcg" },
    { label: "산업자재유통", href: "/industry" },
    { label: "물류사업", href: "/logistics" },
    { label: "연락처", href: "/contact" },
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className=" bg-white sticky top-0 z-50 p-2">
            <div className="mx-auto w-full max-w-[1320px] px-4 flex items-center justify-between py-2">
                <Link href="/" className="font-bold text-lg text-blue-800">BNR Holdings</Link>
                <div className="hidden md:flex gap-6 items-center">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex gap-2 ml-6">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="outline">로그인</Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button>회원가입</Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                    </div>
                </div>
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="메뉴 열기">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="p-0 w-full max-w-full">
                            <div className="flex flex-col gap-6 mt-8 px-6">
                                {NAV_ITEMS.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-lg"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-2 mt-8">
                                    <SignedOut>
                                        <SignInButton mode="modal">
                                            <Button variant="outline" className="w-full">로그인</Button>
                                        </SignInButton>
                                        <SignUpButton mode="modal">
                                            <Button className="w-full">회원가입</Button>
                                        </SignUpButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <UserButton afterSignOutUrl="/" />
                                    </SignedIn>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
} 