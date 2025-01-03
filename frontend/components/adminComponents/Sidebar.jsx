import { assets } from "@/assets/assets"
import Image from "next/image"
import Link from "next/link"

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-slate-100">
            <div className="px-2 sm:pl-14 py-3 border  border-black">
                <Image
                    src={assets.logo}
                    width={120}
                    alt="logo"
                />
            </div>
            <div className="w-28 sm:w-80 h-full relative border border-black py-8">
                <div className="w-1/2 sm:w-4/5 absolute right-0">
                    <Link shallow={true} href={'/admin/addBlog'} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#000] transform transition hover:scale-y-110">
                        <Image
                            src={assets.add_icon}
                            width={28}
                            alt="dashboard"
                        />
                        <p>Add Blogs</p>
                    </Link>

                    <Link shallow={true} href={'/admin/blogList'} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#000] transform transition mt-3 hover:scale-y-110">
                        <Image
                            src={assets.blog_icon}
                            width={28}
                            alt="dashboard"
                        />
                        <p>All Blogs</p>
                    </Link>

                    <Link shallow={true} href={'/admin/subscriptions'} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white hover:shadow-[-5px_5px_0px_#000] transform transition mt-3 hover:scale-y-110">
                        <Image
                            src={assets.email_icon}
                            width={28}
                            alt="dashboard"
                        />
                        <p>Subscriptions</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar