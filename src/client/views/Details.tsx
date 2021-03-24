import * as React from 'react';
import * as moment from 'moment';
import { useParams, Link } from 'react-router-dom';
import type { IBlog } from '../utils/types';

const Details: React.FC<DetailsProps> = props => {

    const { blogid } = useParams();
    const [blog, setBlog] = React.useState<IBlog>(null);  // {} (a blank object is still considered true)

    React.useEffect(() => {
        (async () => {
            const res = await fetch(`/api/blogs/${blogid}`);
            const blog = await res.json();
            setBlog(blog);
        })();
    }, []);

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <article className="card shadow my-2">
                        <div className="card-body">
                            <h1 className="card-text text-center">{blog?.title}</h1>
                            <h4 className="card-text text-center text-muted mb-5">by <b>{blog?.name}</b> on <i>{moment(blog?.created_at).format("MMM Do, YYYY")}</i></h4>
                            <div className="card-text px-5">{blog?.content.split('\n').map((para, i) => (
                                <p key={`p-block-${i}`}>{para}</p>
                            ))}
                            </div>
                                <div className="ml-5">
                                    <Link className="btn btn-outline-primary" to="/">Back to Blogs</Link>
                                </div>
                        </div>
                    </article>
                </div>
            </section>
        </main>
    );
};

interface DetailsProps { }

export default Details;