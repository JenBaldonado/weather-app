import { useEffect, useState } from 'react'
import './App.css'
import Sidepane from './components/sidepane'
const weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL



function App() {
 

  return (
    <>
      <div className="weather-app">
        <Sidepane/>

 {/*  <!-- Main dashboard --> */}
  <main className="dashboard">
    {/* <!-- Search --> */}
    <header className="dashboard-header">
      <form className="search-form">
        <label className="sr-only" for="city-search">
          Search for a city
        </label>

        <span className="search-icon" aria-hidden="true">⌕</span>

        <input
          id="city-search"
          className="search-input"
          name="city"
          type="search"
          placeholder="Search city or airport"
          autocomplete="off"
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <button className="location-button" type="button">
        <span aria-hidden="true">●</span>
        Use current location
      </button>
    </header>

    <div className="dashboard-grid">
     {/*  <!-- Main column --> */}
      <section className="main-column">
       {/*  <!-- Current weather --> */}
        <article className="current-weather">
          <div className="current-weather-content">
            <p className="location-name">Manila</p>

            <h1 className="temperature">
              29<span className="degree-symbol">°</span>
            </h1>

            <p className="weather-description">Partly cloudy</p>
            <p className="current-date">Friday, August 28</p>

            <div className="temperature-range">
              <span className="temperature-high">H: 31°</span>
              <span className="temperature-low">L: 25°</span>
            </div>
          </div>

          <div className="current-weather-visual" aria-hidden="true">
            <span className="hero-sun"></span>
            <span className="hero-cloud">☁️</span>
          </div>
        </article>

        {/* <!-- Hourly forecast --> */}
        <section className="weather-card hourly-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Today</p>
              <h2>Hourly forecast</h2>
            </div>

            <button className="text-button" type="button">
              View details
            </button>
          </div>

          <div className="hourly-list">
            <article className="hour-item">
              <time datetime="09:00">9 AM</time>
              <span className="forecast-icon" aria-label="Partly cloudy">
                🌤️
              </span>
              <strong>28°</strong>
              <span className="rain-chance">💧 10%</span>
            </article>

            <article className="hour-item">
              <time datetime="12:00">12 PM</time>
              <span className="forecast-icon" aria-label="Partly cloudy">
                🌤️
              </span>
              <strong>30°</strong>
              <span className="rain-chance">💧 10%</span>
            </article>

            <article className="hour-item active">
              <time datetime="15:00">3 PM</time>
              <span className="forecast-icon" aria-label="Sunny">
                ☀️
              </span>
              <strong>31°</strong>
              <span className="rain-chance">💧 20%</span>
            </article>

            <article className="hour-item">
              <time datetime="18:00">6 PM</time>
              <span className="forecast-icon" aria-label="Partly cloudy">
                🌤️
              </span>
              <strong>29°</strong>
              <span className="rain-chance">💧 20%</span>
            </article>

            <article className="hour-item">
              <time datetime="21:00">9 PM</time>
              <span className="forecast-icon" aria-label="Cloudy night">
                ☁️
              </span>
              <strong>27°</strong>
              <span className="rain-chance">💧 10%</span>
            </article>

            <article className="hour-item">
              <time datetime="00:00">12 AM</time>
              <span className="forecast-icon" aria-label="Clear night">
                🌙
              </span>
              <strong>26°</strong>
              <span className="rain-chance">💧 10%</span>
            </article>
          </div>
        </section>

     {/*    <!-- Temperature chart placeholder --> */}
        <section className="weather-card chart-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Temperature</p>
              <h2>Next 24 hours</h2>
            </div>

            <span className="chart-change">↑ 2.4°</span>
          </div>

          <div
            className="chart-placeholder"
            role="img"
            aria-label="Temperature chart ranging from 24 to 33 degrees"
          >
            <div className="chart-line"></div>

            <div className="chart-labels">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>12 AM</span>
            </div>
          </div>
        </section>
      </section>

      {/* <!-- Right column --> */}
      <aside className="details-column">
       {/*  <!-- Five-day forecast --> */}
        <section className="weather-card daily-forecast">
          <div className="section-heading">
            <div>
              <p className="eyebrow">This week</p>
              <h2>5-day forecast</h2>
            </div>
          </div>

          <div className="daily-list">
            <article className="day-item">
              <time datetime="2026-08-28">Today</time>
              <span className="day-condition">
                <span aria-label="Partly cloudy">🌤️</span>
                Partly cloudy
              </span>
              <span className="day-temperatures">
                <strong>31°</strong>
                <span>25°</span>
              </span>
            </article>

            <article className="day-item">
              <time datetime="2026-08-29">Saturday</time>
              <span className="day-condition">
                <span aria-label="Rainy">🌧️</span>
                Showers
              </span>
              <span className="day-temperatures">
                <strong>31°</strong>
                <span>25°</span>
              </span>
            </article>

            <article className="day-item">
              <time datetime="2026-08-30">Sunday</time>
              <span className="day-condition">
                <span aria-label="Thunderstorm">⛈️</span>
                Storms
              </span>
              <span className="day-temperatures">
                <strong>30°</strong>
                <span>25°</span>
              </span>
            </article>

            <article className="day-item">
              <time datetime="2026-08-31">Monday</time>
              <span className="day-condition">
                <span aria-label="Partly cloudy">🌤️</span>
                Partly cloudy
              </span>
              <span className="day-temperatures">
                <strong>30°</strong>
                <span>24°</span>
              </span>
            </article>

            <article className="day-item">
              <time datetime="2026-09-01">Tuesday</time>
              <span className="day-condition">
                <span aria-label="Sunny">☀️</span>
                Sunny
              </span>
              <span className="day-temperatures">
                <strong>31°</strong>
                <span>24°</span>
              </span>
            </article>
          </div>
        </section>

        {/* <!-- Weather details --> */}
        <section className="weather-details" aria-label="Weather details">
          <article className="weather-card metric-card">
            <div className="metric-icon humidity-icon" aria-hidden="true">
              💧
            </div>

            <div>
              <p className="metric-label">Humidity</p>
              <p className="metric-value">
                78<span className="metric-unit">%</span>
              </p>
              <span className="metric-status">High</span>
            </div>
          </article>

          <article className="weather-card metric-card">
            <div className="metric-icon wind-icon" aria-hidden="true">
              〰
            </div>

            <div>
              <p className="metric-label">Wind</p>
              <p className="metric-value">
                18<span className="metric-unit">km/h</span>
              </p>
              <span className="metric-status">North East</span>
            </div>
          </article>

          <article className="weather-card metric-card">
            <div className="metric-icon visibility-icon" aria-hidden="true">
              ◉
            </div>

            <div>
              <p className="metric-label">Visibility</p>
              <p className="metric-value">
                10<span className="metric-unit">km</span>
              </p>
              <span className="metric-status">Excellent</span>
            </div>
          </article>

          <article className="weather-card metric-card">
            <div className="metric-icon pressure-icon" aria-hidden="true">
              ◴
            </div>

            <div>
              <p className="metric-label">Pressure</p>
              <p className="metric-value">
                1012<span className="metric-unit">hPa</span>
              </p>
              <span className="metric-status">Normal</span>
            </div>
          </article>
        </section>

       {/*  <!-- Sunrise and sunset --> */}
        <section className="weather-card sun-card">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Daylight</p>
              <h2>Sunrise &amp; sunset</h2>
            </div>
          </div>

          <div className="sun-times">
            <div className="sun-time">
              <span className="sun-icon" aria-hidden="true">🌅</span>

              <div>
                <span>Sunrise</span>
                <strong>5:56 AM</strong>
              </div>
            </div>

            <div className="sun-time">
              <span className="sun-icon" aria-hidden="true">🌇</span>

              <div>
                <span>Sunset</span>
                <strong>6:12 PM</strong>
              </div>
            </div>
          </div>
        </section>
      </aside>
    </div>
  </main>
</div>
    </>
  )
}

export default App
