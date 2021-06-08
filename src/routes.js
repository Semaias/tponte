import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Part from './pages/Part';
import OurBlog from './pages/OurBlog';
import Article from './pages/Article';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/facaparte" component={Part} />
        <Route path="/blog" component={OurBlog} />
        <Route path="/Artigo" component={Article} />
      </Switch>
    </BrowserRouter>
  );
}
