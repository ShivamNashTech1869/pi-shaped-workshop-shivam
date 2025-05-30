# Day 5 - Real-world Kubernetes Use Cases & Optimization

## Overview

Apply Kubernetes concepts by deploying a real-world use case with a focus on performance tuning or cost optimization strategies.

---

## What We Did

 - Created a 2-tier application consisting of frontend and backend components using Helm charts and/or raw Kubernetes manifests.

 - Implemented resource limits for CPU and memory to optimize pod performance and cost.

 - Added liveness and readiness probes to ensure pod health and availability.

 - Configured Horizontal Pod Autoscaler (HPA) to automatically scale pods based on CPU or memory usage.

 - Added comments in code and manifests to explain performance and cost optimization considerations.

---

## Core Concept Questions

**Q1: Why are liveness and readiness probes critical in keeping a product’s user experience stable and reliable?**
Liveness and readiness probes help Kubernetes determine the health and availability of application pods:

   - Liveness probes detect if an application is stuck or deadlocked and need to be restarted to recover.
   -  Readiness probes signal whether a pod is ready to serve traffic, preventing requests from being routed to pods that are still initializing or temporarily unhealthy.

Together, these probes ensure that users are served by healthy pods only, minimizing downtime and failed requests, which stabilizes and improves the overall user experience.

---

**Q2: How does HPA help in handling flash sales, seasonal load spikes, or traffic surges in real-world applications like an e-commerce platform?**

Horizontal Pod Autoscaler (HPA) automatically scales the number of pod replicas based on observed CPU/memory usage or custom metrics:

   - During flash sales or seasonal spikes, HPA quickly increases pod replicas to handle increased traffic.

   - It scales down when demand drops, optimizing resource usage and cost.

   - This elasticity ensures the platform remains performant and responsive under variable load without manual intervention, providing a seamless shopping experience.

## **Project Setup**

### **Docker Image Used**

- **Image Name:** `shivam1869/frontend-app:day5` && `shivam1869/backend-app:day5`
- **Docker Hub Repo Link:** `https://hub.docker.com/repositories/shivam1869`

---

## Installation & Upgrade Steps
**1. Build Docker Images (optional if you want to build locally)**

   ```bash
    # From frontend directory
    docker build -t shivam1869/frontend-app:day5 .

    # From backend directory
    docker build -t shivam1869/backend-app:day5 .
   ```

**2. Load Images into Minikube (if using minikube)**

   ```bash
    minikube image load shivam1869/frontend-app:day5
    minikube image load shivam1869/backend-app:day5
   ```
**4. Verify Deployments and Services**

   ```bash
    kubectl get pods
    kubectl get svc
    kubectl get hpa
   ```
**5. Access Application**
Frontend NodePort service URL: http://<minikube-ip>:<frontend-nodeport>
   ```bash
    minikube service frontend-service --url
   ```
API backend is accessible via service name inside cluster (backend-service), or via NodePort externally.
**6. Check Logs (for debugging)**

   ```bash
   kubectl logs deployment/frontend-deployment
   kubectl logs deployment/backend-deployment
   ```

**8. Monitor HPA**

   ```bash
  kubectl get hpa -w
   ```
**9. check the top resource usage (CPU, memory)**

   ```bash
  kubectl top pods
   ```

## Screenshots

- Frontend docker build:
  ![frontend-docker-build](screenshots/frontend-docker-build.png)

- Backend docker build:
  ![backend-docker-build](screenshots/backend-docker-build.png)

- Docker push frontend & backend images:
  ![docker_push_frontend-backend_images](screenshots/docker_push_frontend-backend_images.png)

- Kubernetes Frontend & Backend Debug Summary:
  ![Kubernetes_Frontend-Backend Debug Summary](screenshots/Kubernetes Frontend-Backend Debug Summary.png)
