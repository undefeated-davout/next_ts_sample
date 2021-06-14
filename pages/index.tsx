import { useState } from 'react';
import Layout from '../components/layout';
import useSWR from 'swr';

type dataType = {
  name: string;
  mail: string;
  age: number;
};

export default function Home() {
  const [address, setAddress] = useState('/api/hello');
  const { data } = useSWR<dataType>(address);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setAddress('/api/hello/' + e.currentTarget.value);
  };

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{JSON.stringify(data)}</h5>
          <input type="number" className="form-control" onChange={onChange} />
        </div>
      </Layout>
    </div>
  );
}
