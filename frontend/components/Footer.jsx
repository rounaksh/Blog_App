import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
    return (
        <div
            className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center fixed bottom-0 w-full"
        >
            <Image
                src={assets.logo_light}
                alt="logo_light"
                width={120}
            />
            <p className="text-sm text-white cursor-default">
                Made with <span className="text-red-600">❤️</span> by{" "}
                <span className="font-semibold">Rounak Sharma</span>
            </p>
            <div className="flex">
                <Image
                    src={assets.facebook_icon}
                    alt="facebook_icon"
                    width={30}
                />
                <Image
                    src={assets.googleplus_icon}
                    alt="googleplus_icon"
                    width={30}
                />
                <Image
                    src={assets.twitter_icon}
                    alt="twitter_icon"
                    width={30}
                />
            </div>
        </div>
    )
}

export default Footer