import { useFetch } from "./FetchHook";

export default function Fetch({
  uri,
  renderSuccess,
  loadingFallBack = <p>Loading...</p>,
  renderErr = (err) => <pre>{JSON.stringify(err, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);

  if (loading) return loadingFallBack;
  if (error) return renderErr(error);
  if (data) return renderSuccess(data);
  
  return <p>Nothing</p>
}
