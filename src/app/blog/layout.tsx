import Link from 'next/link';
import { IoIosHome } from "react-icons/io";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
    <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
    <Link href="/">
        
        <IoIosHome className='text-gray-600'/>
        
      </Link>
    {children}
    </section>
    </main>
  );
}
