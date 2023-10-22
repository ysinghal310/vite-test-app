import MonthCard from "./components/MonthCard";

const data = [
  { id: 1, isActive: false },
  { id: 2, isActive: false },
  { id: 3, isActive: false },
  { id: 4, isActive: false },
  { id: 5, isActive: false },
  { id: 6, isActive: false },
  { id: 7, isActive: false },
  { id: 8, isActive: false },
  { id: 9, isActive: false },
  { id: 10, isActive: true },
  { id: 11, isActive: false },
  { id: 12, isActive: false },
];

const Payroll = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-2 mt-3">
        {data.map((month) => (
          <MonthCard key={month.id} isActive={month.isActive} />
        ))}
      </div>
    </div>
  );
};

export default Payroll;
