import { reFetchAtom } from "@/utils/reFetchAtom";
import { Button } from "@nextui-org/react";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";

const RefetchButton = () => {
  const [load, setLoad] = useAtom(reFetchAtom);

  // Get QueryClient from the context
  const queryClient = useQueryClient();

  const refetchHandler = () => {
    // Invalidate every query with a key that starts with `todos`
    queryClient.invalidateQueries({ queryKey: ["getUser"] });
  };

  return (
    <>
      <Button color="primary" isLoading={load} onPress={refetchHandler}>
        <span className={` ${load ? "hidden" : ""}`}>Refetch</span>
      </Button>
    </>
  );
};

export default RefetchButton;
