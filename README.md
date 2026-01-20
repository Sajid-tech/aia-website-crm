<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AIA CRM - README</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
            color: #e2e8f0;
            line-height: 1.6;
            min-height: 100vh;
            padding: 40px 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Header Section */
        .header {
            text-align: center;
            margin-bottom: 60px;
            animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .logo {
            font-size: 48px;
            margin-bottom: 15px;
        }

        h1 {
            font-size: 3.5em;
            background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .subtitle {
            font-size: 1.2em;
            color: #94a3b8;
            margin-bottom: 20px;
        }

        .version-badge {
            display: inline-block;
            background: linear-gradient(135deg, #06b6d4, #3b82f6);
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 600;
        }

        /* Features Grid */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin: 60px 0;
        }

        .feature-card {
            background: rgba(30, 41, 59, 0.8);
            border: 1px solid rgba(148, 163, 184, 0.1);
            padding: 25px;
            border-radius: 12px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .feature-card:hover {
            border-color: rgba(6, 182, 212, 0.5);
            background: rgba(30, 41, 59, 1);
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(6, 182, 212, 0.1);
        }

        .feature-icon {
            font-size: 2.5em;
            margin-bottom: 12px;
        }

        .feature-card h3 {
            color: #06b6d4;
            margin-bottom: 8px;
            font-size: 1.2em;
        }

        .feature-card p {
            color: #cbd5e1;
            font-size: 0.95em;
        }

        /* Section Styles */
        section {
            margin: 50px 0;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        h2 {
            font-size: 2.2em;
            margin-bottom: 25px;
            color: #06b6d4;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        /* Code Block */
        .code-block {
            background: rgba(15, 23, 42, 0.9);
            border-left: 4px solid #06b6d4;
            padding: 20px;
            border-radius: 8px;
            overflow-x: auto;
            margin: 20px 0;
            font-family: 'Courier New', monospace;
            font-size: 0.95em;
        }

        .code-block code {
            color: #a8e6e3;
            display: block;
            line-height: 1.8;
        }

        /* Tech Stack Grid */
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }

        .tech-category {
            background: rgba(30, 41, 59, 0.6);
            border: 1px solid rgba(148, 163, 184, 0.1);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }

        .tech-category h4 {
            color: #3b82f6;
            margin-bottom: 15px;
            font-size: 1.1em;
            border-bottom: 2px solid rgba(59, 130, 246, 0.3);
            padding-bottom: 10px;
        }

        .tech-item {
            color: #cbd5e1;
            padding: 8px 0;
            font-size: 0.95em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .tech-item:before {
            content: "▸";
            color: #06b6d4;
            font-weight: bold;
        }

        /* Quick Links */
        .quick-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }

        .link-btn {
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
            border: 1px solid rgba(6, 182, 212, 0.5);
            padding: 15px 20px;
            border-radius: 8px;
            text-align: center;
            color: #06b6d4;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
            font-size: 0.95em;
        }

        .link-btn:hover {
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3));
            border-color: rgba(6, 182, 212, 0.8);
            transform: translateY(-3px);
        }

        /* Module Table */
        .modules-table {
            width: 100%;
            border-collapse: collapse;
            margin: 30px 0;
        }

        .modules-table th {
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(59, 130, 246, 0.2));
            border: 1px solid rgba(6, 182, 212, 0.3);
            padding: 15px;
            text-align: left;
            color: #06b6d4;
            font-weight: 600;
        }

        .modules-table td {
            border: 1px solid rgba(148, 163, 184, 0.1);
            padding: 12px 15px;
            color: #cbd5e1;
        }

        .modules-table tr:hover {
            background: rgba(6, 182, 212, 0.05);
        }

        .module-name {
            color: #06b6d4;
            font-weight: 600;
        }

        /* Info Box */
        .info-box {
            background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1));
            border-left: 4px solid #06b6d4;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
            color: #cbd5e1;
        }

        .info-box strong {
            color: #06b6d4;
        }

        /* Footer */
        footer {
            text-align: center;
            margin-top: 60px;
            padding: 40px 0;
            border-top: 1px solid rgba(148, 163, 184, 0.1);
            color: #64748b;
        }

        .heart {
            color: #ef4444;
            animation: heartbeat 0.8s infinite;
        }

        @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            h1 { font-size: 2.5em; }
            h2 { font-size: 1.8em; }
            .features { grid-template-columns: 1fr; }
            .tech-grid { grid-template-columns: 1fr; }
            .quick-links { grid-template-columns: repeat(2, 1fr); }
            body { padding: 20px 10px; }
        }
    </style>

</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <div class="logo">🚀</div>
            <h1>AIA Website CRM</h1>
            <p class="subtitle">A Modern Content Management System Built with React & Vite</p>
            <div class="version-badge">📦 v3.0.8</div>
        </header>

        <!-- Features Section -->
        <section>
            <h2>✨ Key Features</h2>
            <div class="features">
                <div class="feature-card">
                    <div class="feature-icon">🔐</div>
                    <h3>Secure Authentication</h3>
                    <p>JWT-based authentication with session management and encrypted state persistence</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">👥</div>
                    <h3>User Management</h3>
                    <p>Comprehensive student records, testimonials, and certificate tracking system</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📝</div>
                    <h3>Content Management</h3>
                    <p>Easy-to-use tools for blogs, FAQs, banners, and gallery management</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎓</div>
                    <h3>Course Management</h3>
                    <p>Integrated YouTube lectures and comprehensive course organization</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🏢</div>
                    <h3>Multi-Company Support</h3>
                    <p>Manage multiple companies with country-specific configurations</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📊</div>
                    <h3>Analytics Dashboard</h3>
                    <p>Detailed reports and user activity tracking with real-time insights</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Responsive Design</h3>
                    <p>Mobile-first UI with collapsible navigation and adaptive layouts</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Modern UI Components</h3>
                    <p>Beautiful interface with smooth animations and dark mode support</p>
                </div>
            </div>
        </section>

        <!-- Quick Start -->
        <section>
            <h2>🚀 Quick Start</h2>
            <div class="info-box">
                <strong>Prerequisites:</strong> Node.js (v16+) and npm or yarn
            </div>

            <div class="code-block">
                <code>

# Clone the repository<br>

git clone https://github.com/moorthygithub/aia-website-crm.git<br>
cd aia-website-crm<br>
<br>

# Install dependencies<br>

npm install<br>
<br>

# Start development server<br>

npm run dev<br>
<br>

# Build for production<br>

npm run build
</code>
</div>

            <h3 style="margin-top: 30px; margin-bottom: 15px; color: #3b82f6;">📋 Available Scripts</h3>
            <div class="quick-links">
                <div class="link-btn">npm run dev</div>
                <div class="link-btn">npm run build</div>
                <div class="link-btn">npm run lint</div>
                <div class="link-btn">npm run preview</div>
            </div>
        </section>

        <!-- Tech Stack -->
        <section>
            <h2>🛠️ Technology Stack</h2>
            <div class="tech-grid">
                <div class="tech-category">
                    <h4>⚛️ Frontend</h4>
                    <div class="tech-item">React 18.3</div>
                    <div class="tech-item">Vite 5.4</div>
                    <div class="tech-item">React Router 6.27</div>
                </div>
                <div class="tech-category">
                    <h4>🎨 UI & Styling</h4>
                    <div class="tech-item">Tailwind CSS 3.4</div>
                    <div class="tech-item">Shadcn UI</div>
                    <div class="tech-item">Radix UI</div>
                    <div class="tech-item">Framer Motion 11.11</div>
                </div>
                <div class="tech-category">
                    <h4>📦 State Management</h4>
                    <div class="tech-item">Redux Toolkit 2.11</div>
                    <div class="tech-item">Redux Persist 6.0</div>
                    <div class="tech-item">React Query 5.60</div>
                </div>
                <div class="tech-category">
                    <h4>📝 Forms & Data</h4>
                    <div class="tech-item">React Hook Form 7.53</div>
                    <div class="tech-item">React Table 8.20</div>
                    <div class="tech-item">CKEditor 4 4.3</div>
                </div>
                <div class="tech-category">
                    <h4>🌐 HTTP & Utils</h4>
                    <div class="tech-item">Axios 1.7</div>
                    <div class="tech-item">Crypto-JS 4.2</div>
                    <div class="tech-item">Moment.js 2.30</div>
                </div>
                <div class="tech-category">
                    <h4>🔔 Notifications</h4>
                    <div class="tech-item">Sonner 2.0</div>
                    <div class="tech-item">React Icons 5.3</div>
                    <div class="tech-item">Lucide React 0.453</div>
                </div>
            </div>
        </section>

        <!-- Project Structure -->
        <section>
            <h2>📂 Project Structure</h2>
            <div class="code-block">
                <code>

src/<br>
├── app/ <span style="color: #94a3b8;"># Page components</span><br>
│ ├── auth/ <span style="color: #94a3b8;"># Authentication</span><br>
│ ├── blog/ <span style="color: #94a3b8;"># Blog management</span><br>
│ ├── student/ <span style="color: #94a3b8;"># Student records</span><br>
│ ├── company/ <span style="color: #94a3b8;"># Company management</span><br>
│ └── ...<br>
├── components/ <span style="color: #94a3b8;"># Reusable UI components</span><br>
├── api/ <span style="color: #94a3b8;"># API client</span><br>
├── hooks/ <span style="color: #94a3b8;"># Custom React hooks</span><br>
├── store/ <span style="color: #94a3b8;"># Redux store</span><br>
├── routes/ <span style="color: #94a3b8;"># Route configuration</span><br>
└── utils/ <span style="color: #94a3b8;"># Utility functions</span>
</code>
</div>
</section>

        <!-- Core Modules -->
        <section>
            <h2>📦 Core Modules</h2>
            <table class="modules-table">
                <thead>
                    <tr>
                        <th>Module</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="module-name">Authentication</td>
                        <td>User login and JWT token management</td>
                    </tr>
                    <tr>
                        <td class="module-name">Blog</td>
                        <td>Blog creation, management, and FAQ integration</td>
                    </tr>
                    <tr>
                        <td class="module-name">Student</td>
                        <td>Student records, testimonials, and certificates</td>
                    </tr>
                    <tr>
                        <td class="module-name">Company</td>
                        <td>Multi-company management system</td>
                    </tr>
                    <tr>
                        <td class="module-name">Gallery</td>
                        <td>Image and media gallery management</td>
                    </tr>
                    <tr>
                        <td class="module-name">Banner</td>
                        <td>Website banner and promotional content</td>
                    </tr>
                    <tr>
                        <td class="module-name">Newsletter</td>
                        <td>Newsletter subscription management</td>
                    </tr>
                    <tr>
                        <td class="module-name">Lectures</td>
                        <td>YouTube video integration and course content</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Security & Features -->
        <section>
            <h2>🔒 Security Features</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0;">
                <div class="info-box">
                    ✅ JWT-based authentication system
                </div>
                <div class="info-box">
                    ✅ Session timeout tracking
                </div>
                <div class="info-box">
                    ✅ Encrypted state persistence
                </div>
                <div class="info-box">
                    ✅ Role-based access control
                </div>
                <div class="info-box">
                    ✅ Protected API routes
                </div>
                <div class="info-box">
                    ✅ Secure token management
                </div>
            </div>
        </section>

        <!-- Deployment -->
        <section>
            <h2>🚀 Deployment</h2>
            <div class="code-block">
                <code>

# Build for production<br>

npm run build<br>
<br>

# Deploy the dist/ folder to your hosting platform<br>

# (Vercel, Netlify, AWS, etc.)

                </code>
            </div>
        </section>

        <!-- Footer -->
        <footer>
            <p>Built with <span class="heart">❤</span> for modern web applications</p>
            <p style="margin-top: 15px; font-size: 0.95em;">© 2024 AIA Website CRM | Version 3.0.8</p>
        </footer>
    </div>

</body>
</html>
