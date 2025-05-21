# Day 2 - Kubernetes Deployment & Service Setup

## **Overview**

In this assignment, we deployed a simple Flask web application on Kubernetes using a Deployment and exposed it via a NodePort service.  
We also explored resource requests and limits, as well as node affinity concepts.

---

## **Core Concept Questions**

### **1. Why do we set requests and limits for CPU/memory in a production-grade product?**

Setting resource requests and limits helps Kubernetes efficiently schedule pods and ensures that containers get the resources they need without affecting others.
Requests guarantee minimum resources, while limits prevent a container from consuming excessive resources, maintaining cluster stability and performance.

### **2. When would a product team apply node affinity in Kubernetes?**

Node affinity is used when pods need to be scheduled on specific nodes that meet certain criteria, like having SSDs, GPUs, or geographic constraints.
It helps optimize resource usage, improve performance, and meet compliance or architectural requirements.

---

## **Project Setup**

### **Docker Image Used**

- **Image Name:** `shivam1869/flask-hello-world:day1`
- **Docker Hub Link:** [https://hub.docker.com/r/shivam1869/flask-hello-world](https://hub.docker.com/r/shivam1869/flask-hello-world)

---

## **How to Run Locally**

1. Pull and run the Docker image:

   ```bash
   sudo docker run -d -p 8090:8080 --name flask-container shivam1869/flask-hello-world:day1
   ```
  
2. Open your browser and visit:
   ```bash
   http://localhost:8090
   ```

