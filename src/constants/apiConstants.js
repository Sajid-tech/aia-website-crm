export const LOGIN = {
  postLogin: "/panel-login",
};
export const PANEL_CHECK = {
  getPanelStatus: "/panel-check-status",
  getEnvStatus: "/panel-fetch-dotenv",
};
export const POPUP_API = {
  list: "/popup",
  byId: (id) => `/popup/${id}`,
};
export const BANNER_API = {
  list: "/banner",
  byId: (id) => `/banner/${id}`,
};

export const COMPANY_API = {
  list: "/company",
  dropdown: "/companys",
  byId: (id) => `/company/${id}`,
};
export const COUNTRY_API = {
  list: "/country",
  dropdown: "/countrys",
  byId: (id) => `/country/${id}`,
};
export const LETUREYOUTUBE_API = {
  list: "/lecture-youtube",
  byId: (id) => `/lecture-youtube/${id}`,
};

export const YOUTUBEFOR_API = {
  list: "/youtubeFor",
};
export const STUDENT_API = {
  list: "/student",
  byId: (id) => `/student/${id}`,
};
