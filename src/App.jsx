import Payroll from "./feature/payroll";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F1F1F1] antialiased">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-semibold">
          This is Sample App on dev
        </h2>
        <Payroll />
      </div>
    </div>
  );
}

export default App;
