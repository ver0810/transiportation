"use client";

import Link from "next/link";

const defaultButtonStyle: string =
  "flex items-center justify-center border-none px-[10px] py-[20px] text-[15px] w-[120px] uppercase cursor-pointer ";

export function ButtonComponent({ text, className, styleSpan, href }: any) {
  return (
    <div className="h-full flex items-center justify-center">
      <button
        className={`${defaultButtonStyle} h-[40%] from-[#0f2a3f] to-[#14e0e3] ${className}`}>
        <Link href={`${href}`}>
          <span
            className={`whitespace-nowrap text-white inline-block font-extrabold ${styleSpan}`}>
            {text}
          </span>
        </Link>
      </button>
    </div>
  );
}
