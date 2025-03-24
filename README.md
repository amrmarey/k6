# 🚀 Docker Compose Stack for K6, InfluxDB, and Grafana

A ready-to-use Docker Compose setup for performance testing with **Grafana**, **InfluxDB**, and **K6**.

---

## 📦 Overview

- 🌐 **Grafana**: Interactive visualization of metrics.
- 🗃️ **InfluxDB**: Time-series database for storing metrics.
- 📊 **K6**: Load testing tool to simulate user scenarios.

---

## 🛠️ Components

### 📈 Grafana
- **Docker Image**: `grafana/grafana:latest`
- **Default Credentials**:
  - Username: `admin`
  - Password: `admin`
- **Port**: `3000`

### 🗄️ InfluxDB
- **Docker Image**: `influxdb:1.8`
- **Database**: `k6`
- **Port**: `8086`

### 🚦 K6
- **Docker Image**: `grafana/k6:latest`
- **Test Script Location**: `/scripts/loadtest.js`

---

## 🔧 Requirements

- 🐳 Docker
- 📑 Docker Compose

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

Run Docker Compose:

```bash
docker-compose up -d
```

### 4. 🌐 Access Services
- **Grafana**: [http://localhost:3000](http://localhost:3000)
- **InfluxDB**: [http://localhost:8086](http://localhost:8086)

### 5. 📉 Execute Load Tests

K6 automatically runs `loadtest.js`, sending results to InfluxDB for visualization via Grafana.

---

## 🛑 Stop Containers

```bash
docker-compose down
```

---

## 🖌️ Customization

Modify the `loadtest.js` script in the `scripts` directory to customize testing scenarios.

---

## 📊 Visualizing Metrics with Grafana

Log into Grafana with the provided credentials to view performance metrics. Create custom dashboards connected directly to InfluxDB.

---

## 🙌 Contribution

Feedback and contributions are welcome! ✉️ [amr.marey@msn.com](mailto:amr.marey@msn.com)

---

Happy Testing! 🚀🎉

