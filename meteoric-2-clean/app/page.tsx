import { supabase } from '../lib/supabaseClient';

export default async function Home() {
  const { data, error } = await supabase.from('accounts').select('*');

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Lista de cuentas</h1>
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
