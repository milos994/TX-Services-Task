import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { BlogPostCommentsList } from '../components/BlogPostCommentsList';

const Blogpost = () => {
	return (
		<PageLayout>
			<BlogPostCommentsList />
		</PageLayout>
	)
}

export { Blogpost }