import Link from "next/link";

export default function Card({ post }) {
    return (
        <div className="card-post">
            <div className="card-post__top">
                <img src={post.frontmatter.cover_image} alt='' />
            </div>
            <div className="card-post__info">
                <div className="card-post__tag">
                    <a href=""> {post.frontmatter.date}</a>
                </div>
                <div className="card-post__tag">
                    <a href="">{post.frontmatter.type}</a>
                </div>
                <h3 className="card-post__title">
                    {post.frontmatter.title}
                </h3>
                <Link href={`/blog/${post.slug}`}>
                    <a className='btn'>Leer Más</a>
                </Link>
            </div>
        </div>
    )
}