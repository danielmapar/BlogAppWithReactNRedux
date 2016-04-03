import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import PostsShow from './containers/posts_show';

//const Greeting = () => {
//  return <div>Hey there!</div>;
//};

// Nested routing is great for adding header, footer for example
export default (
  <Route path="/" component={App}>
    /* If route only matches the parent, in this case '/' */
    <IndexRoute component={PostsIndex} /> /* If the route is '/' show App and PostsIndex */
    <Route path="/posts/new" component={PostsNew} />
    <Route path="/posts/:id" component={PostsShow} />
    {/* this.props.param.id be passed to us*/}
    {/* <Route path="greet" component={Greeting} /> */}
    {/* <Route path="greet2" component={Greeting} /> */}
    {/* <Route path="greet3" component={Greeting} /> */}
  </Route>
);
