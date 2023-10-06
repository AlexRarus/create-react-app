import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { isBrowser } from 'src/utils/detectEnvironment';
import { useThemeContext } from 'src/providers/theme-provider';

import { GlobalStyleApp } from './styles';
import routes from './router/routes';

const SsrCompatibleSuspense = isBrowser ? Suspense : ({ children }: any) => children;
const Root = () => {
  const { theme } = useThemeContext();

  useEffect(() => {
    console.log('-----');
    console.log('process.env.COMMITDATE: ', process.env.COMMITDATE);
    console.log('process.env.COMMITHASH: ', process.env.COMMITHASH);
    console.log('process.env.BRANCH: ', process.env.BRANCH);
    console.log('-----');
  }, [])

  return (
    <>
      <GlobalStyleApp theme={theme} />
      <SsrCompatibleSuspense fallback={''}>
        <Routes>
          <Route path='/'>
            {routes.map(({ index, path, Component }: any) => (
              <Route key={path} index={index} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </SsrCompatibleSuspense>
    </>
  );
}

export default Root;
