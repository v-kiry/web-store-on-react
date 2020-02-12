/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Switch, Route } from 'react-router-dom'
import Catalog from "../../pages/Bags/Catalog";
import Hats from '../../pages/Hats/Hats';
import Shoes from "../../pages/Shoes";
import Cart from "../../pages/Cart/Cart";

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Catalog}/>
        <Route path='/shoes' component={Shoes}/>
        <Route path='/hats' component={Hats}/>
        <Route path='/cart' component={Cart}/>
      </Switch>
    </main>
  );
}