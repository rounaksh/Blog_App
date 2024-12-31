import { blog_data } from '@/assets/assets'
import BlogItem from './BlogItem'
import { useState } from 'react'

const BlogList = () => {
    const [category, setCategory] = useState('All')

    return (
        <div>
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
                className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24"
            >
                {blog_data.filter(blog => category === 'All' || category === blog.category).map(blog => (
                    <BlogItem
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        category={blog.category}
                        image={blog.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogList