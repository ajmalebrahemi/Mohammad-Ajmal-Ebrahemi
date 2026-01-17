# Deploying to Namecheap - Step by Step Guide

## ✅ Build Complete!

Your production build is ready in: `dist/professional-portfolio/`

## 📦 Files to Upload

All files from the `dist/professional-portfolio` folder need to be uploaded to your Namecheap hosting.

## 🚀 Deployment Methods

### Method 1: Using cPanel File Manager (Easiest)

1. **Login to Namecheap**
   - Go to https://www.namecheap.com
   - Login to your account
   - Navigate to **Hosting List** → Select your domain → **Manage**

2. **Access cPanel**
   - Click on **cPanel** button
   - Find and click **File Manager**

3. **Navigate to Public HTML**
   - In File Manager, go to `public_html` folder (or `www` folder)
   - This is your website's root directory

4. **Clear Existing Files (if any)**
   - Select all files in `public_html`
   - Delete them (or backup first if needed)

5. **Upload Files**
   - Click **Upload** button in File Manager
   - Navigate to: `D:\Mohammad Ajmal Ebrahemi\dist\professional-portfolio`
   - Select ALL files and folders:
     - `index.html`
     - `main-*.js`
     - `polyfills-*.js`
     - `styles-*.css`
     - `chunk-*.js`
     - `assets/` folder (if any)
     - `favicon.ico`
   - Upload all files
   - Wait for upload to complete

6. **Verify Upload**
   - Make sure `index.html` is in the root of `public_html`
   - Check that all `.js` and `.css` files are uploaded

7. **Test Your Website**
   - Visit your domain: `https://yourdomain.com`
   - Your portfolio should be live!

---

### Method 2: Using FTP Client (FileZilla, WinSCP, etc.)

1. **Get FTP Credentials**
   - In Namecheap cPanel, go to **FTP Accounts**
   - Note your FTP host, username, and password
   - Or use your cPanel username and password

2. **Connect via FTP**
   - Open your FTP client (FileZilla, WinSCP, etc.)
   - Host: `ftp.yourdomain.com` or your server IP
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (or 22 for SFTP)

3. **Navigate to Public HTML**
   - Connect and navigate to `public_html` folder

4. **Upload Files**
   - Navigate to: `D:\Mohammad Ajmal Ebrahemi\dist\professional-portfolio`
   - Select ALL files and folders
   - Drag and drop to `public_html` on the server
   - Wait for upload to complete

5. **Verify and Test**
   - Check that all files are uploaded
   - Visit your domain to test

---

## ⚙️ Important Configuration

### For Subdirectories (if not using root domain)

If you want to deploy to a subdirectory like `yourdomain.com/portfolio`:

1. **Update angular.json** before building:
   ```json
   "outputPath": "dist/professional-portfolio",
   "baseHref": "/portfolio/"
   ```

2. **Rebuild:**
   ```bash
   npm run build:prod
   ```

3. **Upload to:** `public_html/portfolio/`

---

## 🔧 Troubleshooting

### Issue: Blank Page or 404 Error

**Solution:**
- Make sure `index.html` is in the root of `public_html`
- Check that all `.js` and `.css` files are uploaded
- Verify file permissions (should be 644 for files, 755 for folders)

### Issue: Assets Not Loading

**Solution:**
- Ensure `assets` folder is uploaded completely
- Check that image paths are correct
- Verify file names match exactly (case-sensitive)

### Issue: Routes Not Working (404 on refresh)

**Solution:**
- Create a `.htaccess` file in `public_html` with:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

### Issue: HTTPS Mixed Content Warnings

**Solution:**
- Ensure all external resources use HTTPS
- Check that your site is accessed via HTTPS

---

## 📝 Quick Checklist

- [ ] Build completed successfully
- [ ] All files uploaded to `public_html`
- [ ] `index.html` is in the root directory
- [ ] All `.js`, `.css` files are uploaded
- [ ] `assets` folder is uploaded (if exists)
- [ ] `.htaccess` file created (for routing)
- [ ] Tested website on your domain
- [ ] Checked mobile responsiveness
- [ ] Verified all images load correctly

---

## 🎯 After Deployment

1. **Test All Pages**
   - Home page loads correctly
   - Navigation works
   - All sections are visible
   - Images display properly
   - Contact form works (frontend)

2. **Performance Check**
   - Test page load speed
   - Check mobile responsiveness
   - Verify dark/light mode toggle

3. **SEO Setup**
   - Update meta tags in `index.html` if needed
   - Submit sitemap to Google Search Console
   - Verify Google Analytics (if added)

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify all files are uploaded correctly
3. Check file permissions in cPanel
4. Contact Namecheap support if hosting issues persist

---

**Your portfolio is now ready to go live! 🚀**
