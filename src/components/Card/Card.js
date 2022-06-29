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
                <div className="card-post__title">
                    <h3>
                        {post.frontmatter.title}
                    </h3>
                </div>
                <div className="card-post__button">
                <Link href={`/blog/${post.slug}`}>
                    <a className='btn'>Leer Más</a>
                </Link>
                </div>
                
            </div>
        </div>
    )
}