'use client'

import { assets } from "@/assets/assets"
import Image from "next/legacy/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"

const page = () => {
    const [image, setImage] = useState(null)
    const [data, setData] = useState({
        title: '',
        description: '',
        category: 'Startup',
        author: 'Arther Reed',
        authorImg: '/author_img.png',
    })

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('category', data.category)
        formData.append('author', data.author)
        formData.append('authorImg', data.authorImg)

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                body: formData
            })
            if (res.ok) {
                console.log('Blog Saved')
                toast.success('Blog Saved Successfully')
                setImage(null)
                setData({
                    title: '',
                    description: '',
                    category: 'Startup',
                    author: 'Arther Reed',
                    authorImg: '/author_img.png',
                })
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-4/5 my-5 mx-auto"
            >
                <p className="text-xl font-semibold my-4 text-center">
                    Upload thumbnail
                </p>
                <label htmlFor="image">
                    <Image
                        className="cursor-pointer object-contain"
                        src={!image ? assets.upload_area : URL.createObjectURL(image)}
                        height={70}
                        layout="responsive"
                        priority={true}
                        alt="upload_area"
                    />
                </label>
                {/* Image Input */}
                <input
                    type="file"
                    name="image"
                    id="image"
                    required
                    hidden
                    onChange={(e) => setImage(e.target.files[0])}
                />

                {/* Title Input */}
                <input
                    className="mt-4 w-full sm:w-[500px
                    ] border text-gray-500 px-4 py-3 rounded-md outline-none"
                    type="text"
                    name="title"
                    value={data.title}
                    placeholder="Blog title"
                    required
                    onChange={handleChange}
                />

                {/* Description Input */}
                <textarea
                    className="mt-4 w-full sm:w-[500px
                    ] border text-gray-500 px-4 py-3 rounded-md outline-none"
                    type="text"
                    name="description"
                    value={data.description}
                    placeholder="Blog Description"
                    rows={6}
                    required
                    onChange={handleChange}
                />

                {/* Category Input */}
                <select
                    name="category"
                    className="w-full mt-4 px-4 py-3 border text-gray-500 rounded-md outline-none"
                    required
                    onChange={handleChange}
                    value={data.category}
                >
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>

                {/* Submit and Cancel Button */}
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="mt-8 w-1/2 mx-auto h-10 bg-black text-white rounded-md font-semibold flex items-center justify-center gap-2 hover:scale-105 transform transition"
                    >
                        <Image
                            src={assets.add_icon}
                            width={20}
                            height={20}
                            alt="add_icon"
                            className="bg-white rounded-full"
                        />
                        Add
                    </button>
                    <Link
                        href={"/admin/blogList"}
                        className="mt-8 w-1/2 mx-auto h-10 bg-red-600 text-white rounded-md font-semibold flex items-center justify-center gap-2 hover:scale-105 transform transition"
                        shallow={true}
                    >
                        Cancle
                    </Link>
                </div>
            </form>
        </>
    )
}

export default page