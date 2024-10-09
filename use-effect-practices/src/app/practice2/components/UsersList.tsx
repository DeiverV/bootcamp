import { IMockUser } from "../interfaces";

interface Props {
  isLoading: boolean;
  users: IMockUser[];
}
export const UsersList = ({ isLoading, users }: Props) => {
  return (
    <>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <ul className="grid place-items-center gap-4 w-full">
          {users.map(({ name, username, email, company, id }) => (
            <li key={id} className="grid gap-4 border rounded-mb p-4 w-full">
              <div>
                <h6 className="text-lg font-semibold">{name}</h6>
                <p>Email: {email}</p>
                <p>Username: {username}</p>
              </div>
              <div>
                <h6 className="text-lg font-semibold">
                  User Company: {company.name}
                </h6>
                <p>Phrase: {company.catchPhrase}</p>
                <p>BS: {company.bs}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
