import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { Link } from 'react-router-dom';
import { createContext, useContext, useState } from "react"

const SidebarContext = createContext();

export default function Dashboard({ children }) {
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <aside className="min-h-screen">
                <nav className="h-full flex flex-col bg-black border-r shadow-sm">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <Link to="/">
                            <div className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}>
                                <div className='font-cascadia text-2xl text-devlyGreen p-0 m-0'>Devly<span className='p-0 m-0 font-semibold font-sans text-2xl'>_</span></div>
                            </div>
                        </Link>

                        {/* <img src="logo.png" className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`} /> */}

                        <button onClick={() => setExpanded((curr) => !curr)} className="p-1.5 rounded-3xl bg-orange-100 hover:bg-orange-200">
                            {expanded ? <ChevronFirst color="#D73D00" /> : <ChevronLast color="#D73D00" />}
                        </button>
                    </div>

                    <div className="border-t border-gray-600 flex p-3">
                        <img src="user-286.png" className="w-10 h-10 rounded-md" />
                        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"} `}>
                            <div className="leading-4">
                                <h4 className="font-semibold text-gray-200">Emily Carter</h4>
                                <span className="text-xs text-gray-400">emilycarter@gmail.com</span>
                            </div>
                            <MoreVertical size={20} color="#ffffff" />
                        </div>
                    </div>

                    <SidebarContext.Provider value={{ expanded }}>

                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>
                </nav>
            </aside>
        </>
    )
};

export function DashboardItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-green-200 to-indigo-300 text-black-800" : "hover:bg-green-100 text-gray-500"}`}>
            {icon}
            <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-customTeal ${expanded ? "" : "top-2"}`}>

                </div>
            )}

            {!expanded && (
                <div className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-orange-100 text-customOrange text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
                    {text}
                </div>
            )}
        </li>
    )
};