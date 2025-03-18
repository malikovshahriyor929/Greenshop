import { FC } from "react";
import { componentType } from "../../@types";
import ModalForHeader from "../../components/modal";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const ProviderConf: FC<componentType> = ({ children }) => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ModalForHeader /> {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default ProviderConf;
