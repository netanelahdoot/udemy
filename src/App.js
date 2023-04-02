import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const Expesnses = [
    { date: new Date(2020, 7, 14), id: "1", title: "Banana", amount: "1" },
    { date: new Date(2023, 12, 14), id: "2", title: "beef", amount: "10" },
  ];

  return (
    <div className="App">
      {Expesnses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default App;
