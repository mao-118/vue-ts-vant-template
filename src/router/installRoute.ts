type RouteModule = {
    path: string,
    name: string,
    component(): Promise<object>,
    meta?: {
        title?: string
    },
    [propName: string]: any
}
//一键导入modules下的路由
function getRoutes(): RouteModule[] {
    const importRouter: Record<string, { default: RouteModule }> = import.meta.globEager('./modules/*.ts');
    const keys: string[] = Object.keys(importRouter);
    return keys.reduce((currentRoute: RouteModule[], nextRoute: string) => {
        currentRoute = currentRoute.concat(importRouter[nextRoute].default);
        return currentRoute;
    }, [] as RouteModule[]);
}
export const routes: RouteModule[] = getRoutes();