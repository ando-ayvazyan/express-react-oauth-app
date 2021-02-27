import { API_ENDPOINTS } from "common/constant/appRoutes.constant";
import { request } from "common/helper/request.helper";
import { formatApiUrl } from "common/helper/text.hlper";

const getUser = async () => await request(formatApiUrl(API_ENDPOINTS.USER, user));

export const user = {
	getUser,
};