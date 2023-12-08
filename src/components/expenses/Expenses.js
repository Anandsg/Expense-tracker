import React, { useState } from 'react';

const Expenses = () => {
    const [expenseData, setExpenseData] = useState({
        amount: '',
        description: '',
        category: 'Food', // Default category
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExpenseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // You can add logic to handle form submission here
        console.log('Expense Data:', expenseData);
        // Add further logic such as sending data to the backend
        // or updating state in your parent component
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
                        value={expenseData.amount}
                        onChange={handleInputChange}
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
                        value={expenseData.description}
                        onChange={handleInputChange}
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
                        value={expenseData.category}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    >
                        <option value="Food">Food</option>
                        <option value="Petrol">Petrol</option>
                        <option value="Salary">Salary</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
};

export default Expenses;
