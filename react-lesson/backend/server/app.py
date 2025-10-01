from flask import Flask, jsonify, request
from flask_cors import CORS

app  = Flask(__name__)
CORS(app) # Enable CORS for all routes

# sample product data

products = [
    {
        "id": 1,
        "name": "Classic Wooden Chair",
        "price in ksh": 4999.99,
        "image": "https://images.unsplash.com/photo-1582582494700-6adcb6f1c2f6?auto=format&fit=crop&w=600&q=80",
        "category": "Seating",
        "description": "A stylish wooden chair perfect for your living room or office."
    },
    {
        "id": 2,
        "name": "Modern Dining Table",
        "price in ksh": 12999.99,
        "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        "category": "Tables",
        "description": "A sleek dining table that seats six comfortably."
    },
    {
        "id": 3,
        "name": "Cozy Sofa",
        "price in ksh": 29999.99,
        "image": "https://images.unsplash.com/photo-1616627568248-6c06a0e308ff?auto=format&fit=crop&w=600&q=80",
        "category": "Seating",
        "description": "A soft and cozy sofa perfect for lounging."
    },
    {
        "id": 4,
        "name": "Minimalist Coffee Table",
        "price in ksh": 8999.99,
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        "category": "Tables",
        "description": "A minimalist coffee table that blends with any interior style."
    },
    {
        "id": 5,
        "name": "Ergonomic Office Chair",
        "price in ksh": 19999.99,
        "image": "https://images.unsplash.com/photo-1581092795360-4d1c8a26dc2b?auto=format&fit=crop&w=600&q=80",
        "category": "Seating",
        "description": "A comfortable chair designed to support long hours at your desk."
    },
]


@app.route('/api/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = next((item for item in products if item["id"] == product_id), None)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404
