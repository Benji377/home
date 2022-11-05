

export default function Skill({ title, short, progress }) {
    return (
        <div className="container p-2 overflow-hidden border bg-white border-slate-100 rounded-lg lg:w-4/5">

            <div className="justify-between sm:flex">
                <div>
                    <h5 className="text-xl font-bold text-slate-900">
                        {title}
                    </h5>
                </div>
            </div>

            <div className="sm:pr-8">
                <p className="text-sm text-slate-500">
                   {short}
                </p>
            </div>

            <div 
                className="bg-gray-200 rounded h-4 mt-5" 
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                >
                <div 
                    className="bg-green-400 rounded h-4 text-center" 
                    style={{width: `${progress}%`, transition: 'width 2s'}}
                    >
                </div>
            </div>
        </div>
    );
}