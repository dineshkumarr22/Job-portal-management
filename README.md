# JOB PORTAL MANAGEMENT

## Overview
- Backend server built with Node.js, Express, and MongoDB  
- Provides APIs for user authentication, job postings, applications, and company management  
- Supports multiple user roles: students and recruiters  
- Enables job searching, applications, and profile management  

## Features
- User registration, login, and profile update with role-based access (student, recruiter)  
- Job posting and retrieval for recruiters and applicants  
- Application submission and status updates for jobs  
- Company registration and detailed company profiles  
- Middleware for authentication and file uploads using Multer  
- Cloudinary integration for media storage  
- MongoDB connection with schema models  

## Technologies
- Node.js with Express framework  
- MongoDB with Mongoose ORM  
- JWT for user authentication  
- Cloudinary for media uploads  
- Multer for file handling  
- Dotenv for environment configuration

## API Endpoints
- **User routes:** `/api/users` — register, login, logout, update profile  
- **Job routes:** `/api/jobs` — post jobs, get all jobs, get recruiter jobs  
- **Application routes:** `/api/applications` — apply for jobs, get applied jobs, update application status  
- **Company routes:** `/api/companies` — register company, get details, update company  

## Folder Structure
- `routes/` — Express route handlers for users, jobs, applications, companies  
- `models/` — Mongoose schemas for User, Job, Company, Application  
- `controllers/` — Business logic for request handling  
- `middlewares/` — Authentication and file upload middleware  
- `config/` — Database connection and Cloudinary configuration

## Screenshots 
![WhatsApp Image 2025-09-20 at 19 03 14_282e8599](https://github.com/user-attachments/assets/38139d58-de6d-4e3d-9090-f0f3f9c8f4fb) 

![WhatsApp Image 2025-09-20 at 19 03 44_2059b494](https://github.com/user-attachments/assets/2ca165cc-b54f-472a-9d1c-b5f60ec479f4) 

![WhatsApp Image 2025-09-20 at 19 24 44_7943a614](https://github.com/user-attachments/assets/9e00030c-97eb-4779-8d03-02b4a2f681cf)




