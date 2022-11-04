import Link from 'next/link';
import Image from 'next/image';


export default function Social({ name, link, description }) {
    return (
        <a href={link}>
            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center">
                    <Image
                        src={`/socials/${name.toLowerCase()}_socials.svg`}
                        width={48}
                        height={48}
                        alt={name}
                    />
                </div>
                <div class="ml-4">
                    <h2 class="font-semibold">{name}</h2>
                    <p class="mt-2 text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </a>
    )
}