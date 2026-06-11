# Deployment on Railway

This project is configured to be deployed on Railway with a PostgreSQL database.

## Prerequisites
- A Railway account.
- The Railway CLI installed (optional, but recommended).

## Environment Variables
Ensure you set the following environment variables in your Railway project:
- `DATABASE_URL`: The connection string for your PostgreSQL database (Railway provides this automatically when you add a PostgreSQL plugin).

## Deployment Steps
1. Connect your GitHub repository to Railway.
2. Railway will automatically detect the Next.js project.
3. Add a PostgreSQL database to your project in Railway.
4. The build script will run `prisma generate` and `next build`.
5. The start script will run `next start`.

## Database Setup
To apply the database schema and seed the initial data on Railway, you can run the following commands once the `DATABASE_URL` is set:
```bash
npx prisma db push
npx prisma db seed
```
