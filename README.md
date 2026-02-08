# Job Data Project — Backend (API)

Backend API for the **Job Data** full-stack project — a Germany-focused job search website built by aggregating job listings from the web and serving them to a frontend UI.

- Frontend repo: https://github.com/impiyushkumar/frontend-project
- Backend repo: https://github.com/impiyushkumar/job-data-project
- Live (AWS): http://51.21.221.169/

---

## Project Overview

**Job Data** is a job search & aggregation platform focused on **Germany-based jobs**.

The core idea:
1. Job listings are collected by **scraping public job pages** on the web (from multiple sources).
2. The scraped data is cleaned/normalized (title, company, location, role type, apply link, etc.).
3. This backend exposes the data through a **REST API** that the frontend consumes to show searchable, filterable job results.

This repo contains the backend service (Node.js) that powers the job listing data for the frontend.

> Note: When scraping, always respect source websites’ Terms of Service and robots.txt. This project is for learning/portfolio purposes and is not affiliated with any job board.

---

## Features

- Job data API for the frontend app
- Germany-focused job listings (aggregated via scraping)
- JSON REST endpoints
- Environment-based configuration via `.env`
- CORS support for connecting the frontend
- Ready for deployment on a VM (e.g., AWS EC2) behind a reverse proxy (Nginx)

> Update the “API Endpoints” section below to match your exact routes.

---

## Tech Stack

- Node.js (JavaScript)
- (Add your actual libs here after checking `package.json`)
  - Example: Express, dotenv, cors, axios/cheerio/puppeteer, mongoose/pg, etc.

---

## Project Structure

Typical structure (confirm with your actual files):

