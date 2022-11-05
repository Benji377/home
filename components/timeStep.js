/*
 * This functions returns a single timeline component.
 * Its attributes derive from Markdown syntax
 */
export default function TimeStep({ title, time, description }) {
    return (
        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-400">
            <h3 className="text-xl font-semibold tracking-wide">{title} </h3>
            <time className="text-xs tracking-wide uppercase text-gray-400">{time}</time>
            {/* We insert the description as HTML to allow some HTML syntax in the Markdown file */}
            <p className="mt-3" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}
