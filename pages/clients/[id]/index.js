import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjctHandler() {
    // load data
    // router.push("/clients/yudha/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "yudha", clientprojectid: "projectA" },
    });
  }

  return (
    <div>
      <h1>Project of a Given Client</h1>
      <button onClick={loadProjctHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
