import Image from "next/image";
import type { AuthorDetails } from "../content/team";

export const Avatar = ({ name, picture, jabatan }: AuthorDetails) => (
  <div className="flex items-center flex-shrink-0 md:justify-start">
    <div className="w-[32px] h-[32px]">
      <Image
        src={picture}
        height={32}
        width={32}
        loading="lazy"
        title={name}
        className="w-full rounded-full"
        alt={name}
      />
    </div>
    <dl className="ml-2 text-sm font-medium leading-4 text-left whitespace-no-wrap">
      <dt className="sr-only">Name</dt>
      <dd className="text-gray-900 dark:text-white">{name}</dd>
      <p className="text-sm text-gray-400 dark:text-gray-300">{jabatan}</p>
    </dl>
  </div>
);
