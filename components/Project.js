import Link from 'next/link';
import Date from './date';

export default function Project({ id, title, content, link, language, status, startdate, enddate }) {
    return (
            <section>
                <section className="body-font text-gray-600">
                    <div className="container mx-auto px-5 py-12">
                        <div className="mx-auto mb-10 flex flex-col items-center rounded-lg border-b border-gray-200 bg-white p-5 sm:flex-row">
                            <div className="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center sm:mr-10 sm:h-32 sm:w-32">
                                <img src="/images/block.png" />
                            </div>
                            <div className="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
                                <h1 className="title-font mb-2 text-2xl font-bold text-black">{title}</h1>
                                <p className="text-base leading-relaxed">{content}</p>
                                <div className="font-bold text-gray-800 md:flex">
                                    <div className="flex w-full space-x-3 md:w-1/2">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Start</h2>
                                            <p><Date dateString={startdate} /></p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">End</h2>
                                            <p><Date dateString={enddate} /></p>
                                        </div>
                                    </div>
                                    <div className="flex w-full space-x-3 md:w-1/2">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Language</h2>
                                            <p>{language}</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Status</h2>
                                            <p>{status}</p>
                                        </div>
                                    </div>
                                </div>
                                <a href={link} className="mt-3 inline-flex items-center text-indigo-500">
                                    Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-2 h-4 w-4" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
    );
}