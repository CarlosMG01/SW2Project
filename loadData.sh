#!/bin/bash

# Directorio donde se encuentran los archivos JSON
DATA_DIR="./yelp_dataset"

# Importar fotos
mongoimport --db restaurants --collection photos --file $DATA_DIR/photos.json --jsonArray

# Importar restaurantes
mongoimport --db restaurants --collection restaurants --file $DATA_DIR/yelp_academic_dataset_business.json --jsonArray

# Importar reseñas
mongoimport --db restaurants --collection reviews --file $DATA_DIR/yelp_academic_dataset_review.json --jsonArray

# Importar tips
mongoimport --db restaurants --collection tips --file $DATA_DIR/yelp_academic_dataset_tip.json --jsonArray

# Importar usuarios
mongoimport --db restaurants --collection users --file $DATA_DIR/yelp_academic_dataset_user.json --jsonArray

echo "Carga de datos completada."
