
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";webkitURL
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import BlogPage from "./pages/BlogPage";
import RoadmapPage from "./pages/RoadmapPage";
import RoadmapSelectionPage from "./pages/RoadmapSelectionPage";
import InternshipsPage from "./pages/InternshipsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/roadmap-selection" element={<RoadmapSelectionPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
