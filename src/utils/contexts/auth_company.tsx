import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { CompanyType } from "../apis/company/types";
import { getCompany } from "../apis/company/api";

interface ContextCompany {
  tokenCompany: string;
  company: Partial<CompanyType>;
  changeTokenCompany: (token?: string) => void;
}

const InitialState = {
  tokenCompany: "",
  company: {},
  changeTokenCompany: () => {},
};

const AuthCompanyContext = createContext<ContextCompany>(InitialState);

export const AuthCompanyProvider = ({ children }: { children: ReactNode }) => {
  const [tokenCompany, setTokenCompany] = useState(localStorage.getItem("token_company") ?? "");
  const [company, setCompany] = useState<Partial<CompanyType>>({});

  useEffect(() => {
    setAxiosConfig(tokenCompany);
    tokenCompany !== "" && fetchCompany();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeTokenCompany();
        }
      }
    );
  }, [tokenCompany]);

  const fetchCompany = async () => {
    try {
      const result = await getCompany();
      setCompany(result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeTokenCompany = (token?: string) => {
    const newToken = token ?? "";
    setTokenCompany(newToken);
    if (token) {
      localStorage.setItem("token_company", newToken);
    } else {
      localStorage.removeItem("token_company");
      setCompany({});
    }
  };

  const AuthCompanyContextValue = {
    tokenCompany,
    company,
    changeTokenCompany,
  };

  return <AuthCompanyContext.Provider value={AuthCompanyContextValue}>{children}</AuthCompanyContext.Provider>;
};

export const useAuthCompany = () => {
  const context = useContext(AuthCompanyContext);
  return context;
};
