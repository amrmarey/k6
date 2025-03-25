# 🚀 Docker Compose Stack for K6, InfluxDB, and Grafana

[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/amrmarey/k6?style=social)](https://github.com/amrmarey/k6)

A ready-to-use Docker Compose setup for performance testing with **Grafana**, **InfluxDB**, and **K6**.

---

## 📚 Table of Contents

- [🚀 Docker Compose Stack for K6, InfluxDB, and Grafana](#-docker-compose-stack-for-k6-influxdb-and-grafana)
  - [📚 Table of Contents](#-table-of-contents)
  - [📦 Overview](#-overview)
  - [🛠️ Components](#️-components)
    - [📈 Grafana](#-grafana)
    - [🗄️ InfluxDB](#️-influxdb)
    - [🚦 K6](#-k6)
  - [🔧 Requirements](#-requirements)
  - [▶️ Quick Start](#️-quick-start)
    - [1. 🌀 Clone the Repository](#1--clone-the-repository)
    - [2. 📂 Directory Structure](#2--directory-structure)
    - [3. 📉 Configure Load Test](#3--configure-load-test)
    - [4. 🚀 Launch Containers](#4--launch-containers)
    - [5. 🌐 Access Services](#5--access-services)
  - [🔄 Changing Test URL](#-changing-test-url)
  - [🛑 Stop Containers](#-stop-containers)
  - [🖌️ Customization](#️-customization)
  - [🧭 Setting Up the Grafana Dashboard](#-setting-up-the-grafana-dashboard)
  - [📊 Visualizing Metrics with Grafana](#-visualizing-metrics-with-grafana)
  - [🙌 Contribution](#-contribution)
  - [📄 License](#-license)

---

## 📦 Overview

This stack enables performance testing with:
- 🌐 **Grafana**: Visualize metrics interactively
- 🗃️ **InfluxDB**: Store time-series data
- 📊 **K6**: Simulate user scenarios and load testing

---

## 🛠️ Components

### 📈 Grafana
- Docker Image: `grafana/grafana:latest`
- Default Credentials:
  - Username: `admin`
  - Password: `admin`
- Port: `3000`

### 🗄️ InfluxDB
- Docker Image: `influxdb:1.8`
- Database: `k6`
- Port: `8086`

### 🚦 K6
- Docker Image: `grafana/k6:latest`
- Test Script Location: `/scripts/loadtest.js`

---

## 🔧 Requirements

- 🐳 [Docker](https://docs.docker.com/get-docker/)
- 📑 [Docker Compose](https://docs.docker.com/compose/install/)

---

## ▶️ Quick Start

### 1. 🌀 Clone the Repository

```bash
git clone https://github.com/amrmarey/k6.git
cd k6
```

### 2. 📂 Directory Structure

Ensure your structure matches:

```plaintext
.
├── docker-compose.yml
└── scripts
    └── loadtest.js
```

### 3. 📉 Configure Load Test

Edit the `scripts/loadtest.js` file to define your test logic:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://your-target-url.com');
  sleep(1);
}
```

### 4. 🚀 Launch Containers

```bash
docker-compose up -d
```

### 5. 🌐 Access Services

- **Grafana**: [http://localhost:3000](http://localhost:3000)
- **InfluxDB**: [http://localhost:8086](http://localhost:8086)

---

## 🔄 Changing Test URL

To change the load test URL:

1. Open `scripts/loadtest.js`
2. Modify the request URL
3. Restart the K6 container:

```bash
docker-compose restart k6
```

---

## 🛑 Stop Containers

```bash
docker-compose down
```

---

## 🖌️ Customization

You can modify the `loadtest.js` script to define different test scenarios, including ramping patterns, thresholds, and custom metrics.

---

## 🧭 Setting Up the Grafana Dashboard

1. **Login to Grafana** at [http://localhost:3000](http://localhost:3000) using:
   - **Username**: `admin`
   - **Password**: `admin`

2. **Add InfluxDB as a Data Source**:
   - Navigate to **Configuration → Data Sources**
   - Click **Add data source** → Select **InfluxDB**
   - Set the following:
     - **URL**: `http://influxdb:8086`
     - **Database**: `k6`
     - **User/Password**: Leave blank
     - Click **Save & Test**

3. **Import a Dashboard**:
   - Navigate to **+ → Import**
   - Use the dashboard ID `2587` (K6 Official Dashboard), or upload your own JSON
   - Select the InfluxDB data source you just added

4. **View Real-Time Metrics** on your new dashboard

---

## 📊 Visualizing Metrics with Grafana

Use your Grafana dashboard to analyze:
- Request durations and trends
- HTTP response codes
- VUs (Virtual Users)
- Error rates

---

## 🙌 Contribution

Feedback and contributions are welcome!  
📧 Contact: [amr.marey@msn.com](mailto:amr.marey@msn.com)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Testing! 🚀🎉
