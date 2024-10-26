# E-commerce Data base:
    - categories
    - customers
    - Orders
    - products


# Products:
{
  "name": "Smartphone",
  "description": "Latest model with 5G support.",
  "price": 999.99,
  "stock": 50,
  "category": "electronics"
}

# categories
{
  "name": "electronics",
  "description": "All kinds of electronic devices and gadgets."
}

# customers
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "phone": "+1234567890",
  "address": "123 Main St, Cityville"
}

# Orders
{
  "customer": "Alice Johnson",
  "items": [
    {
      "product": "Smartphone",
      "quantity": 1,
      "price": 999.99
    },
    {
      "product": "Wireless Earbuds",
      "quantity": 2,
      "price": 49.99
    }
  ],
  "total": 1099.97,
  "status": "shipped"
}

