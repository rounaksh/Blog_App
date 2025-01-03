const { NextResponse } = require("next/server")
import ConnectDB from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel"
import { writeFile } from 'fs/promises'

const LoadDB = async () => {
    await ConnectDB()
}

LoadDB()

export async function GET() {
    const blogs = await BlogModel.find({})
    if (!blogs || !blogs.length) return NextResponse.json({ success: false })
    return NextResponse.json(blogs)
}

export async function POST(req) {
    const formData = await req.formData()
    const timeStamp = Date.now()

    const image = formData.get('image')
    const imageByteData = await image.arrayBuffer()
    const imageBuffer = Buffer.from(imageByteData)
    const path = `public/banners/${timeStamp}_${image.name}`
    await writeFile(path, imageBuffer)
    const bannerImgUrl = `/banners/${timeStamp}_${image.name}`

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${bannerImgUrl}`,
        author_img: `${formData.get('authorImg')}`,
        date: `${Date.now()}`
    }

    await BlogModel.create(blogData)
    console.log('Blog Saved')

    return NextResponse.json({
        success: true,
        msg: 'Blog Saved Successfully'
    })
}