import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-y-10 my-20 items-center justify-around">
      <div>
        <SignIn />
      </div>
      <div>
        <Image src="/signin.svg" width={500} height={500} />
        <div className="text-3xl mt-5 text-center font-bold">
          <h1>
            What <span className="text-violet-700">you</span> waiting for?
          </h1>
          <h2>
            join us <span className="text-violet-700">now</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
