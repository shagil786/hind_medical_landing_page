import { REQUEST_TRACE_API, REQUEST_ORDER_API } from "@/constants/api/orders";
import { requestGet } from "@/helpers";
import { APIReqParamsType, APIResultType } from "@/interfaces/types";

const getOrders = async (params: any) => {
    const url = `${REQUEST_ORDER_API}`;

    const getParams: APIReqParamsType = {
        url,
        reqParams: params,
    };

    const result: APIResultType = await requestGet(getParams);

    return result;
}

const getTrace = async (params: any) => {
    const url = `${REQUEST_TRACE_API}`;

    const getParams: APIReqParamsType = {
        url,
        reqParams: params,
    };

    const result: APIResultType = await requestGet(getParams);

    return result;
}

export const orderService = {
    getOrders,
    getTrace,
}