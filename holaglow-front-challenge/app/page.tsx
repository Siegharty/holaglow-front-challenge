import { DataContextProvider } from "@/context/DataContext";
import OverviewPage from "./overview/page";

export default function AppPage() {
  return (
    <main>
      <DataContextProvider>
        <OverviewPage />
      </DataContextProvider>
    </main>
  );
}
