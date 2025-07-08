
import { AddButton } from "@/components/AddButton";

const Index = () => {
  const handleCreateCategory = () => {
    console.log("Creating category...");
  };

  const handleCreateSubCategory = () => {
    console.log("Creating sub category...");
  };

  const handleCreatePrompt = () => {
    console.log("Creating prompt...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Multi-Option Add Button
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Click the floating add button to see the beautiful expanding menu with multiple action options
          </p>
        </div>
        
        <div className="relative">
          <AddButton
            onCreateCategory={handleCreateCategory}
            onCreateSubCategory={handleCreateSubCategory}
            onCreatePrompt={handleCreatePrompt}
          />
        </div>

        <div className="mt-16 text-sm text-slate-500">
          <p>Try clicking and hovering over the add button!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
