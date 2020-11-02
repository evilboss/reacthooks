import {RequestInterceptor} from "react-fetching-library";

export const requestHostInterceptor = host => RequestInterceptor => async action => {
    return {
        ...action,
        endpoint: `${host}${action.endpoint}`,
    };
};
