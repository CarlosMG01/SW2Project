document.addEventListener('DOMContentLoaded', () => {
  const loadRestaurants = (page = 1, limit = 10) => {
    fetch(`http://localhost:3000/api/restaurants?page=${page}&limit=${limit}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        const { data, total } = result;
        console.log('Data received from API:', data); // Mensaje de depuración

        const restaurantList = document.getElementById('restaurant-list');
        restaurantList.innerHTML = ''; // Limpiar lista anterior

        data.forEach(restaurant => {
          const div = document.createElement('div');
          div.className = 'restaurant';
          div.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>Address: ${restaurant.address}</p>
            <p>Location: ${restaurant.location}</p>
            <p>Rating: ${restaurant.rate}</p>
            <p>Cuisine: ${restaurant.cuisines}</p>
          `;
          restaurantList.appendChild(div);
        });

        const pagination = document.getElementById('pagination');
        pagination.innerHTML = ''; // Limpiar paginación anterior

        const totalPages = Math.ceil(total / limit);

        for (let i = 1; i <= totalPages; i++) {
          const pageLink = document.createElement('a');
          pageLink.href = '#';
          pageLink.innerText = i;
          pageLink.className = 'page-link';
          pageLink.onclick = (e) => {
            e.preventDefault();
            loadRestaurants(i, limit);
          };
          pagination.appendChild(pageLink);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  loadRestaurants();
});
