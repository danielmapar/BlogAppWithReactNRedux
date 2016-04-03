import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  /* Component rendered to the DOM once */
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDelete() {
    // bind to get this.props
    this.props.deletePost(this.props.params.id).then(() => {
        // blog post has been created, promise is ok
        // we navigate by calling this.context.router.push with the new path
        this.context.router.push('/');
      });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return (
        <div>Loading...</div>
      );
    }

    return (
        <div>
          <Link to="/">Back to Index</Link>
          <button onClick={this.onDelete.bind(this)} className="btn btn-danger pull-xs-right">
            Delete Post
          </button>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
