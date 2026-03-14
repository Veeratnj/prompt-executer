import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider } from "@/context/AppContext";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "@/pages/Dashboard";
import CostAnalyzer from "@/pages/CostAnalyzer";
import Categories from "@/pages/Categories";
import Kubernetes from "@/pages/Kubernetes";
import Recommendations from "@/pages/Recommendations";
import Anomalies from "@/pages/Anomalies";
import Reports from "@/pages/Reports";
import VirtualTags from "@/pages/VirtualTags";
import CostAllocation from "@/pages/CostAllocation";
import UnitEconomics from "@/pages/UnitEconomics";
import Forecasting from "@/pages/Forecasting";
import Budgeting from "@/pages/Budgeting";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cost-analyzer" element={<CostAnalyzer />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/kubernetes" element={<Kubernetes />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/anomalies" element={<Anomalies />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/virtual-tags" element={<VirtualTags />} />
              <Route path="/cost-allocation" element={<CostAllocation />} />
              <Route path="/unit-economics" element={<UnitEconomics />} />
              <Route path="/forecasting" element={<Forecasting />} />
              <Route path="/budgeting" element={<Budgeting />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
