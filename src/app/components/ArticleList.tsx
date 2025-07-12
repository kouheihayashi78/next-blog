import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            alt=""
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            width={1280}
            height={300}
          />
        </Link>
      </article>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link
          href="#"
          className="text-blue-700 text-sm font-bold uppercase pb-4"
        >
          Technology
        </Link>
        <Link href="#" className="text-slate-800 text-3xl font-bold hover:text-gray-700 pb-4">
          Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
        </Link>
        <p className="text-sm pb-3">
          By{" "}
          <Link href="#" className="text-slate-800 font-semibold hover:text-gray-800">
            David Grzyb
          </Link>
          , Published on April 25th, 2020
        </p>
        <Link href="#" className="text-slate-800 pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis
          dui porta volutpat. In sit amet posuere magna..
        </Link>
        <Link href="#" className="uppercase text-slate-800 hover:text-blue">
          Continue Reading <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default ArticleList;
