import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

export default function UserRepos({ login, onSelect }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={( data ) => (
        <RepoMenu
          repos={data}
          onSelect={onSelect}
        />)
      }
    />
  );
}
