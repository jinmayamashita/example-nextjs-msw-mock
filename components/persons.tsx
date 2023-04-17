import { usePersons } from "@/hooks/usePersons";
import Image from "next/image";

export function Persons() {
  const { data, isLoading } = usePersons();
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        display: "grid",
        gap: 8,
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {data?.map(({ id, first_name, last_name, avatar }) => (
        <li
          key={id}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            borderRadius: 5,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: 8,
            color: "#333",
          }}
        >
          <Image
            src={avatar}
            alt=""
            width={50}
            height={50}
            style={{
              borderRadius: "50%",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          />
          <span>
            {first_name} {last_name}
          </span>
        </li>
      ))}
    </ul>
  );
}
