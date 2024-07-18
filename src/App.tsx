import MainLayout from "@/layouts/MainLayout";
import { useState } from "react";
import { columns } from "@/components/transactions/columns";
import { VisualData } from "@/components/transactions/VisualData";

import JSON_DATA from "../public/db.json";

const App = () => {
  const [data] = useState(() => JSON_DATA.transactions);
  return (
    <MainLayout>
      <VisualData columns={columns} data={data} />
    </MainLayout>
  );
};
export default App;
