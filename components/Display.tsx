import { ReFetchAtom } from "@/utils/reFetchAtom";
import { UserType } from "@/utils/userType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import ErrorCard from "./ErrorCard";
import LoadingCard from "./LoadingCard";
import UserCard from "./UserCard";

const Display = () => {
  const [load, setLoad] = useAtom(ReFetchAtom);

  const { data, isLoading, isFetching, isFetched, isSuccess, isError } =
    useQuery({
      queryKey: ["getUser"],
      queryFn: async () => {
        const request = await axios(
          "https://randomuser.me/api/?nat=AU,CA,DE,FR,GB,IE,IN,NZ,US&exc=login,registered,id,cell,phone,nat&noinfo"
        );

        const response = request.data.results[0] as UserType;

        return response;
      },
      refetchOnWindowFocus: true,

      retry: true,
    });

  useEffect(() => {
    if (isLoading || isFetching) {
      setLoad(true);
    } else {
      setLoad(false);
    }
  }, [isLoading, isFetching]);

  if (isError) {
    return (
      <>
        <div className="flex items-center justify-center h-[86dvh]">
          <div className="">
            <ErrorCard />
          </div>
        </div>
      </>
    );
  }

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center h-[86dvh]">
        <div className="">
          <LoadingCard />
        </div>
      </div>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="flex items-center justify-center h-[86dvh]">
          <div className="">
            <UserCard info={data} />
          </div>
        </div>
      </>
    );
  }
};

export default Display;
