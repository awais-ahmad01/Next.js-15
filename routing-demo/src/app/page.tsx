import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-3xl mt-5">Welcome home!</h1>
      <div className="text-center mt-7">
        <Link href="/blog" className="text-2xl text-blue-600 p-5 hover:text-blue-800">Blog</Link>
      <Link href="/products" className="text-2xl text-blue-600 p-5 hover:text-blue-800" >Products</Link>
      </div>
    </>
  );
}
