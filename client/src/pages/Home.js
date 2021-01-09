import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { getAllPosts } from '../api/posts';
import { BlogPostsList } from '../components/BlogPostsList';
import { PageLayout } from '../components/PageLayout';

const Home = () => {
	const [blogposts, setBlogposts] = useState([]);
	const [loading, setLoading] = useState(false);

    useEffect(() => {
		setLoading(true);
		getAllPosts().then(blogposts => {
			setBlogposts(blogposts);
		}).finally(() => {
			setLoading(false);
		})
	}, [])

	if (loading) {
		<CircularProgress />
	}

	return <PageLayout>
		<BlogPostsList blogposts={blogposts} />
	</PageLayout>
}

export { Home }