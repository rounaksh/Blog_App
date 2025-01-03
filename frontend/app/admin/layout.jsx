import { assets } from "@/assets/assets";
import Sidebar from "@/components/adminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

export default function AdminLayout({ children }) {
    return (
        <>
            <div className="flex">
                <ToastContainer theme="dark" autoClose={2000} position="bottom-center" />
                <Sidebar />
                <div
                    className="flex flex-col w-full"
                >
                    <div
                        className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black"
                    >
                        <h3 className="font-medium">
                            Admin Dashboard
                        </h3>
                        <Image
                            src={assets.profile_icon}
                            width={40}
                            alt="profile_icon"
                        />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}