import { NextRouter } from 'next/router';

export default function createRouterBuild(router: NextRouter) {
    const queryParams = router.query;

    function addRouteParam(paramName: string, paramValue: string) {
        if (queryParams[paramName]) {
            queryParams[paramName] = `${queryParams[paramName]},${paramValue}`;
        } else {
            queryParams[paramName] = paramValue;
        }

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            },
            undefined,
            {
                shallow: false,
            },
        );
    }

    function updateRouteParam(paramName: string, paramValue: string) {
        queryParams[paramName] = paramValue;

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            }, 
            undefined,
            {
                shallow: false,
                scroll: false
            },
        );
    }

    function removeRouteParam(paramName: string, value: string) {
        const paramText = queryParams[paramName];

        if (typeof paramText === 'string') {
            const paramItemsArray = paramText.split(',');
            const paramRemoveIndex = paramItemsArray.findIndex(
                (paramItem: string) => paramItem === value.toString(),
            );

            if (paramRemoveIndex !== -1) {
                paramItemsArray.splice(paramRemoveIndex, 1);
            }

            if (paramItemsArray.length > 0) {
                queryParams[paramName] = paramItemsArray.join(',');
            } else {
                delete queryParams[paramName];
            }
        }

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            },
            undefined,
            {
                shallow: false,
            },
        );
    }

    function addRoutePath(mainPath: string, path: string) {
        const mainPathValues = queryParams[mainPath];

        if (
            typeof mainPathValues !== 'string' &&
            mainPathValues !== undefined
        ) {
            mainPathValues.push(path);
        }

        queryParams[mainPath] = mainPathValues;

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            },
            undefined,
            {
                shallow: false,
            },
        );
    }

    function updateRoutePath(mainPath: string, newPath: string) {
        queryParams[mainPath] = newPath.split('/');

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            },
            undefined,
            {
                shallow: false,
            },
        );
    }

    function removeRoutePath(mainPath: string, value: string) {
        const mainPathValues = queryParams[mainPath];

        if (
            typeof mainPathValues !== 'string' &&
            mainPathValues !== undefined
        ) {
            const routeRemoveIndex = mainPathValues.findIndex(
                (routeValue: string) => routeValue === value.toString(),
            );

            if (routeRemoveIndex !== -1) {
                mainPathValues.splice(routeRemoveIndex, 1);
            }
        }

        queryParams[mainPath] = mainPathValues;

        router.push(
            {
                pathname: router.pathname,
                query: queryParams,
            },
            undefined,
            {
                shallow: false,
            },
        );
    }

    function switchRoute(
        mainPath: string,
        path: string,
        removeParam: string,
        newParams: Record<string, string>,
    ) {
        delete queryParams[removeParam];

        const params = Object.assign(newParams, queryParams);

        router.push(
            {
                pathname: `/${mainPath}/${path}`,
                query: params,
            },
            undefined,
            {
                shallow: false,
            },
        );
    }

    return {
        addRouteParam,
        updateRouteParam,
        removeRouteParam,
        addRoutePath,
        updateRoutePath,
        removeRoutePath,
        switchRoute,
    };
}
