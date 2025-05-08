export function renderDashboard(appState) {
  const { trips } = appState;
  const currentTrip = trips[0]; // Get the first trip for now

  return `
    <div class="page dashboard">
      <div class="trip-header">
        <img src="${currentTrip.image}" alt="${currentTrip.destination}" class="trip-image">
        <div class="trip-details">
          <h1>${currentTrip.destination}</h1>
          <p class="trip-date">${currentTrip.dateRange}</p>
          <div class="trip-stats">
            <span>${currentTrip.days} days</span>
            <span>${currentTrip.distance} km</span>
            <span>${currentTrip.documents} documents</span>
          </div>
        </div>
      </div>

      <div class="trip-content">
        <section class="flight-info">
          <h2>Flight</h2>
          <div class="flight-details">
            <div class="departure">
              <h3>${currentTrip.flight.departure.code}</h3>
              <p>${currentTrip.flight.departure.city}, ${currentTrip.flight.departure.country}</p>
            </div>
            <div class="flight-time">
              <p>${currentTrip.flight.date}</p>
              <p>${currentTrip.flight.time}</p>
            </div>
            <div class="arrival">
              <h3>${currentTrip.flight.arrival.code}</h3>
              <p>${currentTrip.flight.arrival.city}, ${currentTrip.flight.arrival.country}</p>
            </div>
          </div>
        </section>

        <section class="hotels">
          <h2>Hotels</h2>
          ${currentTrip.hotels.map(hotel => `
            <div class="hotel-card ${hotel.status}">
              <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
              <div class="hotel-details">
                <h3>${hotel.name}</h3>
                <p>Check-in: ${hotel.checkIn}</p>
                <p>Check-out: ${hotel.checkOut}</p>
                <p>${hotel.nights} nights</p>
                <span class="status-badge">${hotel.status}</span>
              </div>
            </div>
          `).join('')}
        </section>

        <section class="activities">
          <h2>Activities</h2>
          ${currentTrip.activities.map(day => `
            <div class="day-activities">
              <h3>Day ${day.day} - ${day.date}</h3>
              ${day.items.map(activity => `
                <div class="activity-card">
                  <h4>${activity.title}</h4>
                  <p>${activity.time}</p>
                  <p>${activity.duration}</p>
                  <p>${activity.location}</p>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </section>
      </div>
    </div>
  `;
}