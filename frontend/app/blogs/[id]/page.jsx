'use client'
import { assets, blog_data } from "@/assets/assets"
import Footer from "@/components/Footer"
import Loader from "@/components/Loader"
import Image from "next/image"
import Link from "next/link"
import { use, useEffect, useState } from "react"

const page = ({ params }) => {
    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { id } = use(params)

    const fetchBlog = async () => {
        try {
            setIsLoading(true)
            const data = blog_data.find(blog => blog.id === Number(id))
            setBlog(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBlog()
    }, [])

    return (
        <>
            <div className="flex flex-col bg-gray-200 p-5 md:px-12 lg:px-28 h-screen">
                <div className="flex justify-between items-center">
                    <Link href={'/'}>
                        <Image
                            src={assets.logo}
                            alt='logo'
                            width={180}
                            className="w-[130px] sm:w-auto"
                        />
                    </Link>
                    <button
                        className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black hover:shadow-[-7px_7px_0px_#000] transform transition"
                    >
                        Get Started
                        <Image src={assets.arrow} alt='add_icon' />
                    </button>
                </div>
                {
                    isLoading ? (
                        <Loader />
                    ) : blog ? (
                        <>
                            <div className="text-center my-24">
                                <h1 className="text-2xl font-semibold max-w-[700px] mx-auto">{blog.title}</h1>
                                <Image
                                    src={blog.author_img}
                                    alt={blog.author}
                                    width={60}
                                    height={60}
                                    className="mx-auto mt-6 border border-white rounded-full"
                                />
                                <p className="text-sm sm:text-lg font-medium mt-2">{blog.author}</p>
                                <span className="text-sm font-light">{new Date(blog.date).toDateString()}</span>
                            </div>
                            <div className="mx-5 max-w-[800px] md:mx-auto mt-[-70px] mb-10">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={1280}
                                    height={720}
                                    className="border-4 border-white"
                                />
                                <h1 className="my-5 text-[26px] font-semibold">Introduction:</h1>
                                <p className="mb-10 text-sm sm:text-base">{blog.description}</p>

                                <h3 className="my-5 text-[18px] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, hic!</h3>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. Dicta, quidem? Quam asperiores vero consequuntur magni ipsam voluptatem nam modi numquam hic, quibusdam id natus. Delectus non id voluptatibus.</p>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. Dicta, quidem? Quam asperiores vero consequuntur magni ipsam voluptatem nam modi numquam hic, quibusdam id natus. Delectus non id voluptatibus.</p>

                                <h3 className="my-5 text-[18px] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, hic!</h3>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. Dicta, quidem? Quam asperiores vero consequuntur magni ipsam voluptatem nam modi numquam hic, quibusdam id natus. Delectus non id voluptatibus.</p>

                                <h3 className="my-5 text-[18px] font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, hic!</h3>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. Dicta, quidem? Quam asperiores vero consequuntur magni ipsam voluptatem nam modi numquam hic, quibusdam id natus. Delectus non id voluptatibus.</p>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. Dicta, quidem? Quam asperiores vero consequuntur magni ipsam voluptatem nam modi numquam hic, quibusdam id natus. Delectus non id voluptatibus.</p>

                                <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
                                <p className="my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, quasi. Dicta, quidem? Quam asperiores vero consequuntur magni ipsam voluptatem nam modi numquam hic, quibusdam id natus. Delectus non id voluptatibus.</p>

                                <div className="my-24">
                                    <p className="text-black font-semibold my-4">Share this blog on your social media</p>
                                    <div className="flex">
                                        <Image
                                            src={assets.facebook_icon}
                                            alt="facebook"
                                            width={40}
                                            height={40}
                                            className="cursor-pointer"
                                        />
                                        <Image
                                            src={assets.twitter_icon}
                                            alt="twitter"
                                            width={40}
                                            height={40}
                                            className="cursor-pointer"
                                        />
                                        <Image
                                            src={assets.googleplus_icon}
                                            alt="linkedin"
                                            width={40}
                                            height={40}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="text-center m-auto">
                            <h1 className="text-xl sm:text-5xl font-semibold max-w-[700px] mx-auto">Looks like your lost</h1>
                            <Link href={'/'} className="mt-10 inline-block py-3 px-6 border border-black hover:shadow-[-7px_7px_0px_#000] transform transition">Go Back</Link>
                        </div>
                    )
                }
            </div>
            <Footer />
        </>
    )
}

export default page