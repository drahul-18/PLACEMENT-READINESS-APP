# Verification Steps — JD Analysis

## 1. Skill Extraction

Skill extraction uses case-insensitive keyword matching. Categories:

- **Core CS**: DSA, OOP, DBMS, OS, Networks
- **Languages**: Java, Python, JavaScript, TypeScript, C, C++, etc.
- **Web**: React, Next.js, Node.js, Express, REST, GraphQL
- **Data**: SQL, MongoDB, PostgreSQL, MySQL, Redis
- **Cloud/DevOps**: AWS, Azure, GCP, Docker, Kubernetes, CI/CD, Linux
- **Testing**: Selenium, Cypress, Playwright, JUnit, PyTest

If no keywords match → shows "General fresher stack".

## 2. Sample JD for Testing

Copy this into the Assessments form:

```
Google — Software Engineer Intern

Requirements:
- Strong foundation in DSA and algorithms
- Proficiency in Java or Python
- Experience with React and JavaScript
- Knowledge of SQL and database design
- Familiarity with AWS or GCP
- Understanding of REST APIs and GraphQL
- Experience with Docker and CI/CD pipelines
```

Expected: Core CS, Languages (Java, Python), Web (React, JavaScript, REST, GraphQL), Data (SQL), Cloud/DevOps (AWS, GCP, Docker, CI/CD).

## 3. History Persistence

1. Run `npm run dev`
2. Go to **Dashboard** → **Assessments**
3. Paste the sample JD above
4. Enter Company: Google, Role: SDE Intern
5. Click **Analyze**
6. You should see **Results** with score, skills, checklist, 7-day plan, questions
7. Go to **History** in the sidebar
8. You should see the entry with date, company, role, score
9. Refresh the page (F5) — History still shows the entry
10. Click the entry → opens Results with that analysis

## 4. Interactive Skill Toggles & Live Score

1. On **Results** page, find "Key Skills Extracted"
2. Each skill has **Know** / **Practice** toggle (default: Practice)
3. Click **Know** on 2–3 skills → readiness score increases by +2 per skill
4. Click **Practice** on a skill → score decreases by 2
5. Score updates in real time (0–100 bounds)
6. Refresh the page → toggles persist (Know/Practice state retained)
7. Go to **History** → click entry → Results shows same toggles and score

## 5. Export Tools

On **Results** page:
- **Copy 7-day plan** — copies plan as plain text
- **Copy round checklist** — copies checklist as plain text
- **Copy 10 questions** — copies questions as plain text
- **Download as TXT** — downloads single file with all sections

## 6. Action Next Box

At bottom of **Results**:
- Shows top 3 weak skills (marked "Need practice")
- Suggests: "Start Day 1 plan now."
- If all skills marked "Know" → shows "All skills marked as known..."

## 7. Readiness Score

- Base: 35 (from JD analysis)
- +5 per detected category (max 30)
- +10 if company provided
- +10 if role provided
- +10 if JD length > 800 chars
- **Live adjustments**: +2 per "Know" skill, -2 per "Practice" skill
- Cap: 0–100

## 8. Routes (Unchanged)

- `/` — Landing
- `/dashboard` — Dashboard
- `/dashboard/practice` — Practice
- `/dashboard/assessments` — JD Analysis
- `/dashboard/results` — Analysis results (?id= for history)
- `/dashboard/history` — Past analyses
