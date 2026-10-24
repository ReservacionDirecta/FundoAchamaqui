# Deployment on Railway

This project is configured to be deployed on Railway with a PostgreSQL database.

## Prerequisites
- A Railway account.
- The Railway CLI installed (optional, but recommended).

## Environment Variables
Ensure you set the following environment variables in your Railway project:
- `DATABASE_URL`: The connection string for your PostgreSQL database (Railway provides this automatically when you add a PostgreSQL plugin).
- `RESEND_API_KEY`: API key for contact/newsletter emails.
- `ADMIN_USER` / `ADMIN_PASSWORD`: Credentials for the `/admin` login page.
- `SESSION_SECRET`: Random 32-byte base64 string used to sign admin sessions. Generate with `node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"`.

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
Note: the seed script wipes and reseeds content when fewer than 11 blog posts exist, so run it only once for initial setup -- it is intentionally not part of the start command. The start command runs a safe `prisma db push` (without `--accept-data-loss`), which refuses to drop data.
