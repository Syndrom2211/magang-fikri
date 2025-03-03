import { DiscussionEmbed } from "disqus-react";

const Disqus = ({ post }) => {
    if (!post) {
        return <p>Loading comments...</p>; // Tambahkan handling jika post masih undefined
    }

    const disqusShortname = "CreativeMusicHub";
    const disqusConfig = {
        url: `https://creativemusichub.com/blogs/${post.slug}`,
        identifier: post.slug,
        title: post.title,
    };

    return (
        <>
            <h1 className="title">{post.title}</h1>
            <p>Posted by {post.author} at {post.date}</p>
            <img className="cover" height="300" width="100%" src={post.cover} alt={post.title} />

            <section className="content">
                {post.content}
            </section>

            {/* Pasang Disqus Component */}
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </>
    );
};

export default Disqus;
