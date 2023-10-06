import { LazyExoticComponent, ComponentType } from 'react';
import { MainPage } from 'src/pages/main';

export interface IRoute {
  path: string;
  Component?: LazyExoticComponent<ComponentType<any>> | ComponentType<any>;
  index?: boolean;
}


const routes: IRoute[] = [
  {
    index: true,
    path: `/`,
    Component: MainPage,
  },
];

export default routes;
