import { assets } from "@/assets/assets"
import Image from "next/image"

const Loader = () => {
    return (
        <div className="text-center m-auto w-full h-full flex justify-center items-center relative">
            <p className="text-lg font-semibold">
                Loading...
            </p>
            <Image
                src={assets.spinner}
                alt='spinner'
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32"
            />
        </div>
    )
}

export default Loader