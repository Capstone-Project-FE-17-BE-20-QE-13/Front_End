import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { JsType } from "../apis/jobseekers/types";
import { getJs } from "../apis/jobseekers/api";
import { CompanyType } from "../apis/company/types";
import { getCompany } from "../apis/company/api";

interface ContextCookie {
  tokenCookie: string;
  js: Partial<JsType>;
  company: Partial<CompanyType>;
  changeToken: (tokenCookie?: string) => void;
}

const InitialStateCookie = {
  tokenCookie: "",
  js: {},
  company: {},
  changeToken: () => {},
};

const AuthContextCookie = createContext<ContextCookie>(InitialStateCookie);

export const AuthCookieProvider = ({ children }: { children: ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies<any>(["id", "token", "role"]);
  const [tokenCookie, setTokenCookie] = useState(cookies.token ?? "");
  const [js, setJs] = useState<Partial<JsType>>({});
  const [company, setCompany] = useState<Partial<CompanyType>>({});

  useEffect(() => {
    setAxiosConfig(tokenCookie);
    tokenCookie !== "" && cookies.role == "jobseeker" && fetchJs();
    tokenCookie !== "" && cookies.role == "company" && fetchCompany();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeToken();
        }
      }
    );
  }, [tokenCookie]);

  const fetchJs = async () => {
    try {
      const result = await getJs();
      setJs(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompany = async () => {
    try {
      const result = await getCompany();
      setCompany(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeToken = (token?: string) => {
    const newToken = token ?? "";
    setTokenCookie(newToken);
    if (token) {
      setCookie("token", newToken, { path: "/" });
    } else {
      removeCookie("token", { path: "/" });
      removeCookie("id", { path: "/" });
      removeCookie("role", { path: "/" });
      setJs({});
      setCompany({});
    }
  };

  const AuthContextCookieValue = {
    tokenCookie,
    js,
    company,
    changeToken,
  };

  return <AuthContextCookie.Provider value={AuthContextCookieValue}>{children}</AuthContextCookie.Provider>;
};

export const useAuthCookie = () => {
  const context = useContext(AuthContextCookie);
  return context;
};
