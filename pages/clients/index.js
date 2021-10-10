import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "octavian", name: "Octavian Yudha" },
    { id: "mahendra", name: "Mahendra Yudha" },
    { id: "yudha", name: "Yudha Octavian" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
