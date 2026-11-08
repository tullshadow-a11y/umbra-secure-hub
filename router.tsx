import { QueryClient } from '@tanstack/react-query';
import { createRouter, createHashHistory } from '@tanstack/react-router'; // 1. استيراد createHashHistory
import { routeTree } from './routeTree.gen';

export const getRouter = () => {
  const queryClient = new QueryClient();

  // 2. إعداد الـ Hash history لتوافق GitHub Pages تماماً
  const history = createHashHistory();

  const router = createRouter({
    routeTree,
    history, // 3. إضافتها هنا
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
