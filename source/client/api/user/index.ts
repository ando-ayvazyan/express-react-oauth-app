import {API_ENDPOINTS} from "common/constant/appRoutes.constant";
import {request} from "common/helper/request.helper";
import {formatApiUrl} from "common/helper/text.hlper";

const getViewer = async () => await request(API_ENDPOINTS.VIEWER);

const getUser = async ({name}: {name: string}) => await request(formatApiUrl(API_ENDPOINTS.USER, name));

export const user = {
	getViewer,
	getUser,
};