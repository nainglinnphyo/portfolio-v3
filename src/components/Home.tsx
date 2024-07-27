/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-lg max-sm:text-base">Naing Linn Phyo</h1>
        <h2 className="text-base max-sm:text-sm">Senior Backend Developer</h2>
      </div>
      <div className="max-sm:mt-4 mt-2">
        <p className="max-sm:text-sm">
          I'm a backend developer and team lead at{" "}
          <Link
            href="https://xsphere.co"
            passHref
            className="dark:text-green-500 text-[#0B652F] underline font-semibold"
          >
            xsphere.co
          </Link>
          , specializing in JavaScript, TypeScript, PHP, and Golang. With
          extensive experience in both frontend and backend development, I excel
          in creating powerful and responsive web applications. Currently, I
          lead the development of{" "}
          <Link
            href="https://farytaxi.com"
            passHref
            className="dark:text-green-500 text-[#0B652F] underline font-semibold"
          >
            Fary Taxi
          </Link>{" "}
          and Getbak, leveraging microservices technologies like gRPC and Redis
          to build efficient and scalable solutions.
        </p>
      </div>
    </div>
  );
}

export default Home;
