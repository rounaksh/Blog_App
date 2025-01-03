import BlogItem from './BlogItem'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import { toast } from 'react-toastify'

const BlogList = () => {
    const [category, setCategory] = useState('All')
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blog')
            const data = await res.json()
            data.length && setBlogs(data)
            setIsLoading(false)
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <>
            <div
                className="flex justify-center gap-6 my-10"
            >
                <button
                    className={`transition-all duration-300 py-1 px-4 ease-in-out ${category === 'All' ? 'bg-black scale-110 text-white rounded-sm' : ''}`}
                    onClick={() => setCategory('All')}
                >
                    All
                </button>
                <button
                    className={`transition-all duration-300 py-1 px-4 ease-in-out ${category === 'Technology' ? 'bg-black scale-110 text-white rounded-sm' : ''}`}
                    onClick={() => setCategory('Technology')}
                >Technology</button>
                <button
                    className={`transition-all duration-300 py-1 px-4 ease-in-out ${category === 'Startup' ? 'bg-black scale-110 text-white rounded-sm' : ''}`}
                    onClick={() => setCategory('Startup')}
                >Startup</button>
                <button
                    className={`transition-all duration-300 py-1 px-4 ease-in-out ${category === 'Lifestyle' ? 'bg-black scale-110 text-white rounded-sm' : ''}`}
                    onClick={() => setCategory('Lifestyle')}
                >Lifestyle</button>
            </div>
            <div
                className={`flex flex-wrap justify-around gap-1 gap-y-10 mb-24 xl:mx-24 ${blogs ? '' : 'mt-24'}`}
            >
                {
                    isLoading ? (
                        <Loader />
                    ) : blogs ? (
                        blogs.filter(blog => category === 'All' || category === blog.category).map(blog => (
                            <BlogItem
                                key={blog._id}
                                title={blog.title}
                                description={blog.description}
                                category={blog.category}
                                image={blog.image}
                                id={blog.id}
                            />
                        ))
                    ) : (
                        <p>No Blogs Found!!</p>
                    )
                }
            </div>
        </>
    )
}

export default BlogList