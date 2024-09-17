// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { LazyExoticComponent } from 'react';
import React, { lazy } from 'react';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  component: LazyExoticComponent<JSXComponent> | JSXComponent; //() => JSX.Element;
  name: string;
  children?: Route[];
}

export const routes: Route[] = [
  {
    path: '/lazyload',
    component: lazy( () => import(/*webpackChunkName:"LazyLayout"*/ '../01-lazyload/layout/LazyLayout' ) ),
    name: 'LazyLoading Nested'
  },
  {
    path: '/nolazy',
    component: NoLazy,
    name: 'NoLazyLoading'
  }

];
