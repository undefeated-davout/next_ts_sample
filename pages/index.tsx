import { useState } from 'react';
import Layout from '../components/layout';
import useSWR from 'swr';

type dataType = {
  id: string;
  item: string;
};

export default function Home() {
  const [pref, setPref] = useState({ id: 0, item: 'name' });
  const [address, setAddress] = useState('/api/hello/' + pref.id + '/' + pref.item);
  const { data } = useSWR<dataType>(address);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    pref.id = Number(e.currentTarget.value);
    setPref(pref);
    setAddress('/api/hello/' + pref.id + '/' + pref.item);
  };
  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    pref.item = e.currentTarget.value;
    setPref(pref);
    setAddress('/api/hello/' + pref.id + '/' + pref.item);
  };

  return (
    <div>
      <Layout header="Next.js" title="Top page.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{JSON.stringify(data)}</h5>
          <input
            type="number"
            className="form-control form-control-sm mb-2"
            onChange={handleChange}
          />
          <select onChange={handleSelect} className="form-control form-control-sm">
            <option value="name">Name</option>
            <option value="mail">Mail</option>
            <option value="age">Age</option>
          </select>
        </div>
      </Layout>
    </div>
  );
}
