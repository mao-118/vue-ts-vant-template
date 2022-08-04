type routeModule = {
    path: string,
    name: string,
    component: () => void,
    meta?: {
        title?: string
    },
    [propName: string]: any
}
//一键导入modules下的路由
function getRoutes(): routeModule[] {
    const importRouter: Record<string, { default: routeModule }> = import.meta.globEager('./modules/*.ts');
    const keys: string[] = Object.keys(importRouter);
    return keys.reduce((currentRoute: routeModule[], nextRoute: string) => {
        const route: routeModule = (importRouter[nextRoute]).default;
        currentRoute.push(route);
        return currentRoute;
    }, [] as routeModule[]);
}
export const routes: routeModule[] = getRoutes();