import Link from 'next/link';
import Image from 'next/image';


export default function Social({ name, link, description }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center">
                    <Image
                        src={`/socials/${name.toLowerCase()}_socials.svg`}
                        width={48}
                        height={48}
                        alt={name}
                    />
                </div>
                <div className="ml-4">
                    <h2 className="font-semibold">{name}</h2>
                    <p className="mt-2 text-sm text-gray-500">{description}</p>
                </div>
            </div>
        </a>
    )
}