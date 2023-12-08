import axios from 'axios';
import React, { useState } from 'react';

const AddExpenses = () => {
    const [money, setMoney] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Food');


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (money && description && category) {
            const expenses = {
                money: money,
                description: description,
                category: category
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
                )
                if (resp.status === 200) {
                    const res = await axios.get(
                        'https://expense-tracker-main-e0bd5-default-rtdb.firebaseio.com/expenses.json',
                    )
                    if (res.status === 200) {
                        const data = res.data

                        const loadArray = []
                        for (const key in data) {
                            const parsedData = JSON.parse(data[key].body)
                            loadArray.unshift({
                                id: key,
                                money: parsedData.money,
                                description: parsedData.description,
                                category: parsedData.category,
                            })
                        }
                        console.log(loadArray)
                    } else {
                        alert('Something went wrong please Refresh Page...')
                    }
                } else {
                    alert('Something went wrong...')
                }
            } catch (error) {
                window.alert('Please try again...')
                console.log(error.message)
            }
            setCategory('Food')
            setDescription('')
            setMoney('')
        } else {
            alert('Please enter all details...')
        }
    }

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
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
};

export default AddExpenses;
