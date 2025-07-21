import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="py-10 w-2/5 mx-auto rounded-lg shadow-md text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">404</h2>
        <p className="text-gray-600 mb-10">Not Found</p>
        <Link href="/" className="text-blue-600">Return Home</Link>
      </div>
    </div>
  );
}
