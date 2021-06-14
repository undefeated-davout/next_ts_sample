import Layout from '../components/layout';
import useSWR from 'swr';

export default function Home() {
  const func = (arg: string) => fetch(arg).then((res) => res.text());
  const { data, error } = useSWR<string, Error>('/data.txt', func, {
    refreshInterval: 5000,
  });

  return (
    <div>
      {error}
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{data}</h5>
        </div>
      </Layout>
    </div>
  );
}
