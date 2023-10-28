set -e

mongo <<EOF
db = db.getSiblingDB('products')

db.createUser({
  user: 'diegox',
  pwd: '$PRODUCTS_PASSWORD',
  roles: [{ role: 'readWrite', db: 'products' }],
});

db = db.getSiblingDB('warehouse')

db.createUser({
  user: 'warehouse',
  pwd: '$WAREHOUSE_PASSWORD',
  roles: [{ role: 'readWrite', db: 'warehouse' }],
});
db.createCollection('documents')
db.createCollection('stocks')
db.createCollection('invoices')
db.createCollection('orders')

EOF