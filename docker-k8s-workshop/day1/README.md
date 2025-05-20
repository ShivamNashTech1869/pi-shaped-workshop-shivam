# Day 1: Docker & Kubernetes Workshop - Introduction to Docker & Containerization

## Application

A simple Flask "Hello, World!" REST API containerized using Docker.

## Docker Image

- Image Name: `shivam1869/flask-hello-world:day1`
- Docker Hub Link: https://hub.docker.com/r/shivam1869/flask-hello-world

### Core Concept Questions

1. **Why is Docker useful in building and deploying microservices for a real-world product?**

Docker provides lightweight, consistent environments for applications, making microservices easy to deploy, scale, and isolate. It enables developers to package code and dependencies together, ensuring the app runs the same everywhere—locally, in staging, or in production—greatly simplifying deployment for complex products like e-commerce or banking apps.

2. **What is the difference between a Docker image and a container in the context of scaling a web application?**

A Docker **image** is a static, read-only template that contains the application code and dependencies. A **container** is a running instance of an image — it includes the application and its environment running in isolation. When scaling, multiple containers can be created from the same image to handle increased load.

3. **How does Kubernetes complement Docker when running a product at scale?**

Kubernetes manages container orchestration at scale by automating deployment, scaling, load balancing, and recovery of containers. While Docker builds and runs containers, Kubernetes ensures hundreds or thousands of containers run smoothly across clusters, providing high availability and efficient resource management.

---

## How to Run Locally

```bash
docker run -d -p 8090:8080 shivam1869/flask-hello-world:day1
```


