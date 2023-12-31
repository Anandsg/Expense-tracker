import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expenseActions } from '../store/expenseSlice';

const AddExpenses = () => {
    const dispatch = useDispatch();
    const email = useSelector((state) => state.auth.email)

    const [money, setMoney] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Food');
    const [expensesList, setExpensesList] = useState([]);
    const [showActivatePremium, setShowActivatePremium] = useState(false);

    useEffect(() => {
        fetchExpenses();
    }, []);
    const csvDataDownloader = () => {
        const csvData = [["Category", "Money", "Description"]];

        expensesList.forEach((each) => {
            let tmp = [each.category, each.money, each.description];
            csvData.push(tmp);
        });

        function makeCSV(allRows) {
            return allRows.map((r) => r.join(",")).join("\n");
        }

        const a2 = document.createElement("a");  // Create an anchor element
        a2.id = "a2";
        const blob2 = new Blob([makeCSV(csvData)]);
        a2.href = URL.createObjectURL(blob2);

        // Add the anchor element to the document body
        document.body.appendChild(a2);

        // Trigger a click event on the anchor element
        a2.click();
    };

    const fetchExpenses = async () => {
        try {
            const res = await axios.get(
                'https://expense-tracker-main-e0bd5-default-rtdb.firebaseio.com/expenses.json',
            );
            if (res.status === 200) {
                const data = res.data;

                const loadedExpenses = [];
                for (const key in data) {
                    const parsedData = JSON.parse(data[key].body);
                    loadedExpenses.unshift({
                        id: key,
                        money: parsedData.money,
                        description: parsedData.description,
                        category: parsedData.category,
                    });
                }
                dispatch(expenseActions.addExpense(loadedExpenses))
                setExpensesList(loadedExpenses);
            } else {
                alert('Something went wrong, please refresh the page.');
            }
        } catch (error) {
            // console.log(error.message);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (money && description && category) {
            const expenses = {
                money: money,
                description: description,
                category: category,
            };
            if (expenses.money >= 10000) {
                setShowActivatePremium(true);
            }
            try {
                const resp = await axios.post(
                    'https://expense-tracker-main-e0bd5-default-rtdb.firebaseio.com/expenses.json',
                    {
                        body: JSON.stringify(expenses),
                        headers: {
                            'content-type': 'application/json',
                        },
                    }
                );
                if (resp.status === 200) {
                    if (expenses.money <= 10000) {
                        setExpensesList((prevExpenses) => [
                            {
                                id: resp.data.name,
                                money: expenses.money,
                                description: expenses.description,
                                category: expenses.category,
                            },
                            ...prevExpenses,
                        ]);
                    }
                } else {
                    alert('Something went wrong...');
                }
            } catch (error) {
                console.log(error.message);
            }
            setCategory('Food');
            setDescription('');
            setMoney('');
        } else {
            alert('Please enter all details.');
        }

    };
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Add Expense</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-600">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={money}
                        onChange={(e) => setMoney(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter the amount"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter the description"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                        Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    >
                        <option value="Food">Food</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Salary">Salary</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-indigo-500 text-white p-2 text-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Add Expense
                </button>
                {showActivatePremium && (
                    <button
                        className="bg-yellow-500 text-white mx-2 p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300"
                        onClick={() => {
                            alert('Premium Activated');
                        }}
                    >
                        Activate Gold
                    </button>
                )}
            </form>
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Expense List</h3>
                <ul className="space-y-4">
                    {expensesList.map((expense) => (
                        <li key={expense.id} className="border p-4 rounded-md flex justify-between items-center">
                            <div>
                                <p className="text-gray-600 p-2">{`Amount: ${expense.money}`}</p>
                                <p className="text-gray-600 p-2">{`Description: ${expense.description}`}</p>
                                <p className="text-gray-600 p-2">{`Category: ${expense.category}`}</p>
                            </div>
                            <div className="flex space-x-4">
                                <button
                                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-500 hover:text-red-700 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* {<button className='my-4 bg-indigo-500 text-white p-2 text-sm rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-blue-300'
                    onClick={csvDataDownloader}>
                    Download Expenses
                </button>} */}
            </div>
        </div>
    );
};

export default AddExpenses;