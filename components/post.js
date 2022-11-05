import Link from "next/link";
import Date from "./date";

export default function Post({ title, short, date, rtime, link }) {
    return (
        <Link href={link} class="relative block p-2 overflow-hidden border bg-white border-slate-100 rounded-lg shadowhover">

            <div class="justify-between sm:flex">
                <div>
                    <h5 class="text-xl font-bold text-slate-900">
                        {title}
                    </h5>
                </div>
            </div>

            <div class=" sm:pr-8">
                <p class="text-sm text-slate-500">
                   {short}
                </p>
            </div>

            <dl class="flex mt-6">
                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-slate-600">Published</dt>
                    <dd class="text-xs text-slate-500">{date}</dd>
                </div>

                <div class="flex flex-col-reverse ml-3 sm:ml-6">
                    <dt class="text-sm font-medium text-slate-600">Reading time</dt>
                    <dd class="text-xs text-slate-500">{rtime}</dd>
                </div>
            </dl>
        </Link>
    );
}