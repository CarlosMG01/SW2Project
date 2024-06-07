document.addEventListener('DOMContentLoaded', () => {
  const loadData = (endpoint, containerId, page = 1, limit = 10) => {
    fetch(`http://localhost:3000/api/${endpoint}?page=${page}&limit=${limit}`)
      .then(response => response.json())
      .then(result => {
        const { data, total } = result;

        const container = document.getElementById(containerId);
        container.innerHTML = '';

        data.forEach(item => {
          const div = document.createElement('div');
          div.className = endpoint;
          div.innerHTML = `
            <h2>${item.name || item.business_id}</h2>
            <p>Name: ${item.name || ''}</p>
            <p>Address: ${item.address || ''}</p> 
            <p>Location: ${item.latitude + ', ' + item.longitude || ''}</p>
            <p>Rating: ${item.stars || ''}</p>
            <p>Cuisine: ${item.categories || ''}</p>
          `;
          container.appendChild(div);
        });

        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        const totalPages = Math.ceil(total / limit);

        for (let i = 1; i <= totalPages; i++) {
          const pageLink = document.createElement('a');
          pageLink.href = '#';
          pageLink.innerText = i;
          pageLink.className = 'page-link';
          pageLink.onclick = (e) => {
            e.preventDefault();
            loadData(endpoint, containerId, i, limit);
          };
          pagination.appendChild(pageLink);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  loadData('restaurantes', 'restaurant-list');
});
