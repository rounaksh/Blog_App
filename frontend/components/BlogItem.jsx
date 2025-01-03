import { assets, blog_data } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <Link
            href={`/blogs/${id}`}
            shallow={true}
            className='cursor-default max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] duration-500 hover:scale-105 transform transition'
        >
            <Image
                src={image} alt='blog_pic_1'
                width={400}
                height={400}
                className='border-b border-black' />
            <p
                className='ml-5 mt-5 py-1 px-2 inline-block bg-black text-white text-sm rounded-sm'
            >{category}</p>
            <div className="p-5">
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p
                    className='mb-3 text-sm tracking-tight text-gray-700 line-clamp-4'
                    style={{
                        WebkitUserModify: 'read-write-plaintext-only',
                    }}
                >{description}</p>
                <div
                    className='inline-flex items-center pt-2 font-semibold text-center duration-300 hover:scale-105 transform transition hover:border-b hover:border-black'
                >
                    Read More
                    <Image
                        src={assets.arrow}
                        alt='read_more'
                        className='ml-1'
                        width={12}
                    />
                </div>
            </div>
        </Link>
    )
}

export default BlogItem