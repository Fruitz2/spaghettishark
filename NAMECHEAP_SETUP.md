# How to Link Your Namecheap Domain to Vercel

## Step 1: Get Your Vercel Project URL
Your current Vercel deployment is at: `https://spaghettishark.vercel.app` (or similar)

## Step 2: Add Domain in Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Click on your `spaghettishark` project
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your Namecheap domain (e.g., `spaghettishark.xyz` or `yourdomain.com`)
6. Click **Add**

Vercel will show you DNS records you need to add. It will look like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

## Step 3: Configure DNS in Namecheap

1. Log into Namecheap: https://www.namecheap.com/myaccount/login/
2. Go to **Domain List**
3. Click **Manage** next to your domain
4. Go to **Advanced DNS** tab
5. Delete any existing A Records and CNAME Records for `@` and `www`
6. Click **Add New Record**

### Add these records EXACTLY as Vercel shows:

**Record 1 (A Record):**
- Type: `A Record`
- Host: `@`
- Value: `76.76.21.21` (use the IP Vercel gives you)
- TTL: `Automatic`

**Record 2 (CNAME):**
- Type: `CNAME Record`
- Host: `www`
- Value: `cname.vercel-dns.com` (use what Vercel gives you)
- TTL: `Automatic`

7. Click **Save All Changes**

## Step 4: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Usually works within 10-30 minutes
- Check status in Vercel dashboard (it will show "Valid Configuration" when ready)

## Step 5: Verify It Works

After DNS propagates, visit:
- `https://yourdomain.com`
- `https://www.yourdomain.com`

Both should redirect to your Spaghetti Shark site!

## Common Issues:

**Domain shows "Domain not configured"**
- Wait longer (DNS propagation)
- Double-check DNS records match Vercel exactly

**HTTPS not working**
- Vercel auto-generates SSL certificate
- Can take a few minutes after domain is verified

**www not working**
- Make sure you added the CNAME record for `www`

## Need Help?

1. Vercel Support: https://vercel.com/support
2. Check DNS propagation: https://dnschecker.org
3. Namecheap Support: https://www.namecheap.com/support/

---

**Note:** The actual DNS values will be in your Vercel dashboard. The IPs shown above are examples.
