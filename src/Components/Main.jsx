import React from 'react'

function Main() {
    return (
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div class="bg-yellow-300 rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-red-600">Chew Toy</h2>
                    <p class="text-gray-700 mt-2">Toys for all</p>
                    <p class="text-red-500 font-bold mt-4">Price: $99.99</p>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                </div>
                <div class="bg-yellow-300 rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-red-600">Teddy Bear</h2>
                    <p class="text-gray-700 mt-2">Pet for life</p>
                    <p class="text-red-500 font-bold mt-4">Price: $99.99</p>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                </div>
                <div class="bg-yellow-300 rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-bold text-red-600">Fidget Spinner</h2>
                    <p class="text-gray-700 mt-2">Stay distracted</p>
                    <p class="text-red-500 font-bold mt-4">Price: $99.99</p>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Main
