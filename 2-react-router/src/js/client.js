import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

/*Tests for better view.
1.
I noticed React-Router lets you link to "pages" aka components and creates this extension of the URL to the actual page file path that you are on, in the server, aka html files (index.html).
  React-Router helps make that page act as an interactive 1 page application.
  Where... what would have been external links to other html files, are now links "virtual" links/pages created by the React-Router for that page.
  ex: http://localhost:8080/#/archives?_k=v0rroa
    http://localhost:8080/ is equal to http://localhost:8080/index.html <- this is the site for index.html.
      Notes: some sites are okay without the complete filePath. Some servers look for index.html by default when given a path.
    /#/archives is the React-Router'd page path for index.html.
Hypothesis:
  If I create another page with React-Router-ing, it should not interfere with file path.
  To test the case, I can create following folder structure:
    src/
    src/index.html/#/archives <-test against
    src/index/#/archives.html/#/archives <-to create, where it can also link to index.html
    src/js/client2.js <-will place the component in archives.html
archives.html should create another render page with everything the same.
*/

const app = document.getElementById('app');
//Router history is all you need to get react-router going.
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
