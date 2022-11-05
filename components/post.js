import Link from "next/link";

export default function Post({ title, short, date, rtime, link }) {
    return (
        <Link href={link} className="relative block p-2 overflow-hidden border bg-white border-slate-100 rounded-lg shadowhover mx-auto">

            <div className="justify-between sm:flex">
                <div>
                    <h5 className="text-xl font-bold text-slate-900">
                        {title}
                    </h5>
                </div>
            </div>

            <div className=" sm:pr-8">
                <p className="text-sm text-slate-500">
                   {short}
                </p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-slate-600">Published</dt>
                    <dd className="text-xs text-slate-500">{date}</dd>
                </div>

                <div className="flex flex-col-reverse ml-3 sm:ml-6">
                    <dt className="text-sm font-medium text-slate-600">Reading time</dt>
                    <dd className="text-xs text-slate-500">{rtime}</dd>
                </div>
            </dl>
        </Link>
    );
}