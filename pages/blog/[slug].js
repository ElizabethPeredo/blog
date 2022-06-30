import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import PostContainer from '../../src/containers/PostContainer/PostContainer'

export default function PostPage({
    frontmatter: { title, date, cover_image },
    slug,
    content, }) {
    return (
        <>
            <section className="container__medium container__post">

                <main className="container__post-info" >
                    <h1 id="title">{title}</h1>
                    <color1>Fecha de publicación: {date}</color1>
                </main>

                <main className="container__post-img" >
                    <img src={cover_image} alt='' />
                </main>

            </section>

            <PostContainer>
                <section dangerouslySetInnerHTML=
                    {{ __html: marked.parse(content), }}
                >
                </section>
            </PostContainer>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('posts', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}