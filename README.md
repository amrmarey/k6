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
    - [3. 🚀 Launch Containers](#3--launch-containers)
    - [4. 🌐 Access Services](#4--access-services)
    - [5. 📉 Execute Load Tests](#5--execute-load-tests)
  - [🔄 Changing Test URL](#-changing-test-url)
  - [🛑 Stop Containers](#-stop-containers)
  - [🖌️ Customization](#️-customization)
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

### 3. 🚀 Launch Containers

```bash
docker-compose up -d
```

### 4. 🌐 Access Services

- **Grafana**: [http://localhost:3000](http://localhost:3000)
- **InfluxDB**: [http://localhost:8086](http://localhost:8086)

### 5. 📉 Execute Load Tests

K6 automatically runs `loadtest.js`, sending results to InfluxDB for visualization in Grafana.

---

## 🔄 Changing Test URL

To change the load test URL:

1. Open `scripts/loadtest.js`
2. Modify the request URL:

```javascript
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://your-new-url.com');
  sleep(1);
}
```

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

## 📊 Visualizing Metrics with Grafana

Log into Grafana using the default credentials. You can:

- Add InfluxDB as a data source
- Create dashboards to monitor metrics
- Use community dashboards for quick setup

---

## 🙌 Contribution

Feedback and contributions are welcome!  
📧 Contact: [amr.marey@msn.com](mailto:amr.marey@msn.com)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Testing! 🚀🎉
