import * as React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

const Admin: React.FC<AdminProps> = (props) => {
    const history = useHistory();
    const { blogid } = useParams();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch('/api/blogs', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, content })
        });
        const result = await res.json();
        history.push(`/details/${result.id}`);
    }

    return (
        <main className="container">
            <section className="row">
                <div className="col-12">
                    <form action="" className="form-group border rounded-lg p-3">
                        <label htmlFor="title">Title</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text"
                            className="form-control form-control-lg mb-2"
                            placeholder="Example Title"
                        />
                        <label htmlFor="content">Content</label>
                        <textarea
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            rows={20}
                            className="form-control form-control-lg mb-2"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...">
                        </textarea>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link className="btn btn-outline-secondary btn-lg"to={`/details/${blogid}`}>Go Back</Link>
                            <div>
                            <button onClick={handleSubmit} className="btn btn-primary btn-lg mt-3 mx-3">Edit It!</button>
                            <button onClick={handleSubmit} className="btn btn-outline-danger btn-lg mt-3 mx-3">Delete It!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

interface AdminProps { }

export default Admin;